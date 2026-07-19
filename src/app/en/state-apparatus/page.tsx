import type { Metadata } from "next";
import { StateApparatusPage } from "@/components/pages/StateApparatusPage";

export const metadata: Metadata = { title: "State apparatus" };

export default function EnglishStateApparatusPage() {
  return <StateApparatusPage locale="en" />;
}

