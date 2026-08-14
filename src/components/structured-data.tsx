import { company, offices } from "@/lib/content/company";
import type { FaqCategory } from "@/lib/content/faq";

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

// One FAQPage per page isn't a schema.org requirement, but Google's own
// guidance is to mark up the actual visible Q&A content on the page - so
// this flattens our category grouping (a display concern) into the single
// flat mainEntity list the schema expects.
export function FaqStructuredData({ categories }: { categories: FaqCategory[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type BreadcrumbEntry = { name: string; path: string };

// Mirrors the visible <Breadcrumb> UI (see components/ui/breadcrumb.tsx) -
// keep the two in sync when a page's trail changes, since mismatched
// structured data vs. visible content is exactly what this markup is meant
// to avoid.
export function BreadcrumbStructuredData({ items }: { items: BreadcrumbEntry[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://www.khsystems.org${item.path}`,
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
