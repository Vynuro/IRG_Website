import LegalDocument from "../components/LegalDocument";
import { termsConditionsSections } from "../data/termsConditionsContent";

export default function TermsConditions() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms & Conditions"
      lastUpdated="3 September 2026"
      intro="The terms governing your use of the Inventive Research Group website and your interaction with us in connection with research projects, participant recruitment and related services."
      sections={termsConditionsSections}
    />
  );
}
