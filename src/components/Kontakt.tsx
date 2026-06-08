import { useState, ChangeEvent, FormEvent } from 'react'

/* ── Typy ── */
interface FormFields {
  name:     string
  phone:    string
  email:    string
  interest: string
  message:  string
}

type FormErrors = Partial<Record<keyof FormFields, string>>

/* ── Wartości początkowe ── */
const EMPTY_FIELDS: FormFields = {
  name:     '',
  phone:    '',
  email:    '',
  interest: '',
  message:  '',
}

/* ─────────────────────────────────────────
   Funkcja walidacji
   Zwraca obiekt błędów – pusty = formularz OK
───────────────────────────────────────── */
function validateForm(fields: FormFields): FormErrors {
  const errors: FormErrors = {}

  // Imię i nazwisko: wymagane, min. 3 znaki
  if (fields.name.trim().length < 3) {
    errors.name = 'Podaj imię i nazwisko (min. 3 znaki).'
  }

  // Telefon: wymagany, tylko cyfry / spacje / + - ()
  const phoneRegex = /^[0-9\s+\-()]{7,}$/
  if (!phoneRegex.test(fields.phone.trim())) {
    errors.phone = 'Podaj poprawny numer telefonu.'
  }

  // E-mail: wymagany, musi zawierać @ i domenę
  if (
    !fields.email.includes('@') ||
    !fields.email.includes('.') ||
    fields.email.trim().length < 5
  ) {
    errors.email = 'Podaj poprawny adres e-mail (np. jan@example.com).'
  }

  // Wiadomość: wymagana, min. 10 znaków
  if (fields.message.trim().length < 10) {
    errors.message = 'Wpisz wiadomość (min. 10 znaków).'
  }

  return errors
}

/* ─────────────────────────────────────────
   Komponent InputField – pola z obsługą błędu
───────────────────────────────────────── */
interface InputFieldProps {
  id:          keyof FormFields
  label:       string
  required?:   boolean
  type?:       string
  placeholder: string
  autoComplete?: string
  value:       string
  error?:      string
  onChange:    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  as?:         'input' | 'textarea' | 'select'
  children?:   React.ReactNode
}

function InputField({
  id, label, required = false, type = 'text',
  placeholder, autoComplete, value, error, onChange,
  as = 'input', children,
}: InputFieldProps) {
  const baseClass = `input-base${error ? ' error' : ''}`

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wider"
      >
        {label}
        {required && (
          <span className="text-gold ml-1" aria-hidden="true">*</span>
        )}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClass}
          aria-required={required}
          aria-describedby={`${id}-error`}
        />
      ) : as === 'select' ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`${baseClass} appearance-none`}
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className={baseClass}
          aria-required={required}
          aria-describedby={`${id}-error`}
        />
      )}

      {/* Komunikat błędu */}
      <p
        id={`${id}-error`}
        role="alert"
        className={`text-red-600 text-xs mt-1 transition-opacity duration-200 ${
          error ? 'opacity-100' : 'opacity-0 select-none'
        }`}
      >
        {error ?? '‎'/* niesłyszalny znak – zachowuje wysokość */}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────
   Główny komponent Kontakt
───────────────────────────────────────── */
export default function Kontakt() {
  const [fields, setFields]   = useState<FormFields>(EMPTY_FIELDS)
  const [errors, setErrors]   = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  /* Ogólna obsługa zmiany pola */
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    // Usuń błąd dla tego pola gdy użytkownik zaczyna pisać
    if (errors[name as keyof FormFields]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  /* Obsługa wysłania – kluczowe: e.preventDefault() */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newErrors = validateForm(fields)

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Formularz poprawny – reset i komunikat sukcesu
    setFields(EMPTY_FIELDS)
    setErrors({})
    setSuccess(true)
    setTimeout(() => setSuccess(false), 6000)
  }

  return (
    <section
      id="kontakt"
      className="py-24 bg-cream border-t border-stone/10"
      aria-labelledby="kontakt-heading"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="section-tag text-stone mb-3">Formularz kontaktowy</p>
          <h2
            id="kontakt-heading"
            className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-4"
          >
            Skontaktuj się z nami
          </h2>
          <p className="text-stone max-w-md mx-auto">
            Wypełnij formularz — oddzwonimy lub odezwiemy się mailowo w ciągu kilku godzin.
          </p>
        </div>

        <div className="bg-white rounded-sm border border-stone/10 p-8 md:p-12">

          {/* Komunikat sukcesu */}
          {success && (
            <div
              className="mb-6 p-4 bg-sage/10 border border-sage/30 rounded-sm text-sage text-sm font-medium"
              role="alert"
              aria-live="polite"
            >
              ✓ Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się wkrótce.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-6">

              <InputField
                id="name"
                label="Imię i nazwisko"
                required
                placeholder="Jan Kowalski"
                autoComplete="name"
                value={fields.name}
                error={errors.name}
                onChange={handleChange}
              />

              <InputField
                id="phone"
                label="Telefon"
                required
                type="tel"
                placeholder="+48 000 000 000"
                autoComplete="tel"
                value={fields.phone}
                error={errors.phone}
                onChange={handleChange}
              />

              <InputField
                id="email"
                label="E-mail"
                required
                type="email"
                placeholder="jan@example.com"
                autoComplete="email"
                value={fields.email}
                error={errors.email}
                onChange={handleChange}
              />

              <InputField
                id="interest"
                label="Czym jesteś zainteresowany?"
                placeholder=""
                value={fields.interest}
                error={errors.interest}
                onChange={handleChange}
                as="select"
              >
                <option value="">Wybierz opcję</option>
                <option value="kupno">Kupno nieruchomości</option>
                <option value="sprzedaz">Sprzedaż nieruchomości</option>
                <option value="wynajem">Wynajem</option>
                <option value="wycena">Wycena</option>
              </InputField>

              <div className="md:col-span-2">
                <InputField
                  id="message"
                  label="Wiadomość"
                  required
                  placeholder="Opisz czego szukasz lub co chcesz sprzedać..."
                  value={fields.message}
                  error={errors.message}
                  onChange={handleChange}
                  as="textarea"
                />
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <p className="text-xs text-stone/60">
                  * Pola obowiązkowe. Twoje dane są bezpieczne i nie będą udostępniane osobom
                  trzecim.
                </p>
                <button type="submit" className="btn-primary px-10 py-4 whitespace-nowrap">
                  Wyślij zapytanie →
                </button>
              </div>

            </div>
          </form>
        </div>

        {/* Szybki kontakt */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="flex items-center gap-4 bg-white p-5 rounded-sm border border-stone/10">
            <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm shrink-0" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3h4l1.5 3.5-2 1.5c.8 1.8 2.2 3.2 4 4l1.5-2L15.5 11v4a12 12 0 01-12.5-12z" stroke="#C9A96E" strokeWidth="1.3" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-stone mb-0.5">Telefon</div>
              <a href="tel:+48500123456" className="font-medium text-charcoal text-sm hover:text-gold transition-colors">
                +48 500 123 456
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-5 rounded-sm border border-stone/10">
            <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm shrink-0" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="4" width="14" height="10" rx="1" stroke="#C9A96E" strokeWidth="1.3" />
                <path d="M2 6l7 5 7-5" stroke="#C9A96E" strokeWidth="1.3" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-stone mb-0.5">E-mail</div>
              <a href="mailto:biuro@homekey.pl" className="font-medium text-charcoal text-sm hover:text-gold transition-colors">
                biuro@homekey.pl
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-5 rounded-sm border border-stone/10">
            <div className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm shrink-0" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2C6.24 2 4 4.24 4 7c0 4.25 5 9 5 9s5-4.75 5-9c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="#C9A96E" strokeWidth="1.3" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-stone mb-0.5">Biuro</div>
              <div className="font-medium text-charcoal text-sm">ul. Długa 12, Gdańsk</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
