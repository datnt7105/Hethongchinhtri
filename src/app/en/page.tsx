import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = { title: "Home" };

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
