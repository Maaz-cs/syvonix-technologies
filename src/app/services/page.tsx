import type { Metadata } from "next";
import InnerPageShell from "@/components/InnerPageShell";
import ServicesExperience from "@/components/ServicesExperience";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SYVONIX Technologies capabilities across AI, software engineering, automation, product design, cloud and continuous improvement.",
};

export default function ServicesPage() {
  return (
    <InnerPageShell>
      <ServicesExperience />
    </InnerPageShell>
  );
}
