/**
 * Shape and validation rules for the project enquiry form.
 *
 * Shared by the browser (to show inline errors before submitting) and the API
 * route (which never trusts the client and re-validates every field).
 */

export const SERVICE_OPTIONS = [
  "Mobile App",
  "Website",
  "Landing Page",
  "Custom Software",
] as const;

export const TIMELINE_OPTIONS = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "Just exploring",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
export type TimelineOption = (typeof TIMELINE_OPTIONS)[number];

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  service: ServiceOption;
  timeline: TimelineOption;
  message: string;
  /**
   * Honeypot. Real people never see this field, so anything in it means a bot
   * filled the form in automatically.
   */
  company?: string;
};

export type ContactFieldErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export const emptyContactForm: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  service: "Mobile App",
  timeline: "1–3 months",
  message: "",
  company: "",
};

const LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 160 },
  message: { min: 10, max: 2000 },
} as const;

// Deliberately permissive: the goal is to catch typos, not to police which
// addresses are legal.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Allows the punctuation people actually type: +44 (0) 7700 900-123 etc.
const PHONE_ALLOWED = /^[+()\-.\s\d]+$/;

export function validateContactForm(
  values: ContactFormValues,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < LIMITS.name.min) {
    errors.name = "Please tell us your name.";
  } else if (name.length > LIMITS.name.max) {
    errors.name = `Please keep this under ${LIMITS.name.max} characters.`;
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  } else if (email.length > LIMITS.email.max) {
    errors.email = "That email address is too long.";
  }

  // Counting digits rather than characters keeps every national format valid.
  const phone = values.phone.trim();
  const phoneDigits = phone.replace(/\D/g, "").length;
  if (phone.length === 0) {
    errors.phone = "Please add a phone number so we can reach you.";
  } else if (!PHONE_ALLOWED.test(phone) || phoneDigits < 7 || phoneDigits > 15) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!SERVICE_OPTIONS.includes(values.service)) {
    errors.service = "Please choose what you need.";
  }

  if (!TIMELINE_OPTIONS.includes(values.timeline)) {
    errors.timeline = "Please choose a timeline.";
  }

  if (message.length < LIMITS.message.min) {
    errors.message = "A sentence or two about the project, please.";
  } else if (message.length > LIMITS.message.max) {
    errors.message = `Please keep this under ${LIMITS.message.max} characters.`;
  }

  return errors;
}

/**
 * Narrows an untrusted request body to `ContactFormValues`, trimming strings
 * along the way. Returns `null` when the payload is not even the right shape.
 */
export function parseContactPayload(body: unknown): ContactFormValues | null {
  if (typeof body !== "object" || body === null) return null;

  const record = body as Record<string, unknown>;
  const asString = (key: string) =>
    typeof record[key] === "string" ? (record[key] as string).trim() : "";

  return {
    name: asString("name"),
    email: asString("email"),
    phone: asString("phone"),
    service: asString("service") as ServiceOption,
    timeline: asString("timeline") as TimelineOption,
    message: asString("message"),
    company: asString("company"),
  };
}
