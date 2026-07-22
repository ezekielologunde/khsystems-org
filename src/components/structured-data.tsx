import { company, offices } from "@/lib/content/company";

export function OrganizationStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: company.name,
    description: company.mission,
    telephone: company.phone,
    email: company.email,
    url: "https://www.khsystems.org",
    medicalSpecialty: "Psychiatric",
    openingHours: "Mo-Fr 09:00-17:00",
    department: offices.map((office) => ({
      "@type": "MedicalClinic",
      name: office.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.addressLines.join(", "),
        addressLocality: office.city,
        addressRegion: office.state,
        postalCode: office.zip,
        addressCountry: "US",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
