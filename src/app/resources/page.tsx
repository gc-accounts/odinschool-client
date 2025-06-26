import ResourcesComp from "@/components/pages/Resources";
import { Metadata, ResolvingMetadata } from 'next';

export const metadata: Metadata = {
  title: 'Resource Suite',
  description: "Empower your career with OdinSchool's suite of resources",
};


export default function ResourcesPage() {
  return (
    <ResourcesComp />
  );
}