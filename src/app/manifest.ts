import type { MetadataRoute } from "next";
import { company } from "@/lib/content/company";

// Reuses the same dynamically-generated /icon and /apple-icon routes (see
// icon.tsx, apple-icon.tsx) rather than static image files, so the crown
// mark and brand colors only need to be defined in one place.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description: company.mission,
    start_url: "/",
    display: "standalone",
    background_color: "#f6fafd",
    theme_color: "#1d4ed8",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
