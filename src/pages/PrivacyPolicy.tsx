import LegalDocument from "../components/LegalDocument";
import { privacyPolicySections } from "../data/privacyPolicyContent";

export default function PrivacyPolicy() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="3 September 2026"
      intro="How Inventive Research Group collects, uses, stores, discloses and protects personal information across our website, research recruitment and client relationships."
      sections={privacyPolicySections}
    />
  );
}
