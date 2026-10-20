import { useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router";
import { Icon } from "../lib/icons";

const seniorityOptions = ["C-Level & Founder", "VP", "Director", "Manager", "Staff & Individual Contributor"];
const industryOptions = ["Technology & Software", "Financial Services", "Healthcare & Medical", "Retail & Consumer Goods", "Professional & Business Services", "Real Estate & Construction", "Manufacturing & Industrial", "Transportation & Logistics", "Utilities & Energy", "Hospitality & Travel", "Other"];
const countryOptions = ["United States", "United Kingdom", "Germany", "France", "UAE", "Singapore", "Australia", "Canada", "Other"];
const companySizeOptions = ["Self-employed", "1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5001-10000", "10001+", "Unknown"];

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  companySize: string;
  seniority: string;
  industry: string;
  linkedin: string;
  country: string;
  smsPromotions: boolean;
  smsReminders: boolean;
};

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  jobTitle: "",
  company: "",
  companySize: "",
  seniority: "",
  industry: "",
  linkedin: "",
  country: "",
  smsPromotions: false,
  smsReminders: false,
};

export default function ExpertForm() {
  const [values, setValues] = useState(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) =>
    setValues((current) => ({ ...current, [key]: value }));

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 900);
  };

  if (done)
    return (
      <div
        className="irg-expert-success relative overflow-hidden rounded-panel border border-secondary/15 bg-white p-8 text-center shadow-card sm:p-12"
        role="status"
        aria-live="polite"
      >
        <div className="irg-success-glow" aria-hidden="true" />
        <div className="irg-success-particles" aria-hidden="true">
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              style={{ "--particle-index": index } as CSSProperties}
            />
          ))}
        </div>

        <div className="irg-success-check mx-auto" aria-hidden="true">
          <svg viewBox="0 0 72 72" role="presentation">
            <circle className="irg-success-circle" cx="36" cy="36" r="30" />
            <path className="irg-success-tick" d="m21.5 37 9.5 9.5L51 25.8" />
          </svg>
        </div>

        <div className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-[#00b67a]/20 bg-[#00b67a]/[0.07] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#087a56]">
          <span className="h-2 w-2 rounded-full bg-[#00b67a]" /> Application successfully received
        </div>

        <h3 className="relative mt-5 text-[29px] font-extrabold text-primary sm:text-[34px]">
          Welcome to our panel
        </h3>

        <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-body">
          Thank you for applying to the IRG expert panel. We review applications within 1 business day and will contact you when a relevant study matches your profile.
        </p>

        <div className="relative mx-auto mt-7 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
          <div className="rounded-card border border-tint-100 bg-tint-50 p-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-secondary">Next step</span>
            <p className="mt-1.5 text-[13px] font-semibold text-primary">Profile review within 1 business day</p>
          </div>
          <div className="rounded-card border border-tint-100 bg-tint-50 p-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-secondary">Your choice</span>
            <p className="mt-1.5 text-[13px] font-semibold text-primary">Every future study invitation is optional</p>
          </div>
        </div>

        <p className="relative mt-5 text-[12px] text-body">
          Applying does not guarantee a study invitation. We only contact you for relevant opportunities.
        </p>
      </div>
    );

  const inputClass =
    "focus-ring mt-2 w-full rounded-input border border-tint-100 bg-white px-4 py-3 text-[15px] font-normal text-primary placeholder:text-body/45 transition-colors hover:border-secondary/30";

  return (
    <form
      onSubmit={submit}
      className="rounded-panel border border-secondary/15 bg-white p-6 shadow-card sm:p-9"
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
        <Field label="Full name">
          <input
            required
            name="fullName"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            autoComplete="name"
            placeholder="e.g., Jane Doe"
            className={inputClass}
          />
        </Field>

        <Field label="Professional email">
          <input
            required
            type="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            autoComplete="email"
            placeholder="e.g., jane@company.com"
            className={inputClass}
          />
        </Field>

        <Field label="Company name">
          <input
            required
            name="company"
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            autoComplete="organization"
            placeholder="e.g., Acme Ltd."
            className={inputClass}
          />
        </Field>

        <Field label="Company size (FTE)">
          <select
            required
            name="companySize"
            value={values.companySize}
            onChange={(event) => update("companySize", event.target.value)}
            className={inputClass}
          >
            <option value="" disabled>Select company size</option>
            {companySizeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field label="Phone number">
          <input
            required
            type="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
            placeholder="+92-300-1234567"
            className={inputClass}
          />
        </Field>

        <Field label="Job title">
          <input
            required
            value={values.jobTitle}
            onChange={(event) => update("jobTitle", event.target.value)}
            autoComplete="organization-title"
            placeholder="e.g., Senior Analyst"
            className={inputClass}
          />
        </Field>

        <Field label="Seniority">
          <select
            required
            value={values.seniority}
            onChange={(event) => update("seniority", event.target.value)}
            className={inputClass}
          >
            <option value="" disabled>Select level</option>
            {seniorityOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field label="Industry">
          <select
            required
            value={values.industry}
            onChange={(event) => update("industry", event.target.value)}
            className={inputClass}
          >
            <option value="" disabled>Select industry</option>
            {industryOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field label="Country">
          <select
            required
            value={values.country}
            onChange={(event) => update("country", event.target.value)}
            className={inputClass}
          >
            <option value="" disabled>Select country</option>
            {countryOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>

        <Field label="LinkedIn profile URL">
          <input
            required
            type="url"
            value={values.linkedin}
            onChange={(event) => update("linkedin", event.target.value)}
            placeholder="https://linkedin.com/in/your-profile"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-6 space-y-3">
        <Checkbox
          checked={values.smsPromotions}
          onChange={(checked) => update("smsPromotions", checked)}
        >
          I agree to receive promotional text messages about new products and special offers.
        </Checkbox>
        <Checkbox
          checked={values.smsReminders}
          onChange={(checked) => update("smsReminders", checked)}
        >
          I consent to receiving appointment reminders via text.
        </Checkbox>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="focus-ring mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-ctl px-6 py-3 text-[15px] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
        style={{ background: "var(--grad-primary)" }}
      >
        {submitting ? "Creating your profile…" : "Welcome to our panel"}
      </button>

      <p className="mt-4 text-center text-[12px] leading-relaxed text-body">
        By applying you agree to our{" "}
        <Link
          to="/terms-conditions"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-secondary hover:underline"
        >
          Terms
        </Link>{" "}
        and{" "}
        <Link
          to="/privacy-policy"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-secondary hover:underline"
        >
          Privacy Policy
        </Link>
        . We never share your data without your knowledge.
      </p>
    </form>
  );
}

function Field({ label, children, fullWidth = false }: { label: string; children: ReactNode; fullWidth?: boolean }) {
  return (
    <label className={`block text-[14px] font-bold text-primary${fullWidth ? " sm:col-span-2" : ""}`}>
      {label}
      {children}
    </label>
  );
}

function Checkbox({ checked, onChange, children }: { checked: boolean; onChange: (checked: boolean) => void; children: ReactNode }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-body">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="focus-ring mt-[3px] h-4 w-4 shrink-0 cursor-pointer rounded border-tint-100 accent-[var(--color-primary)]"
      />
      <span>{children}</span>
    </label>
  );
}
