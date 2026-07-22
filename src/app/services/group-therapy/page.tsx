import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/service-page-layout";
import { getServiceBySlug } from "@/lib/content/services";

const service = getServiceBySlug("group-therapy")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.summary,
};

export default function Page() {
  return <ServicePageLayout service={service} />;
}
