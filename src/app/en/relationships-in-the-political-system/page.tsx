import type { Metadata } from "next";
import { RelationshipsPage } from "@/components/pages/RelationshipsPage";

export const metadata: Metadata = { title: "Relationships in the political system", description: "Explore leadership, management, command, commander-in-chief, supervision and coordination relationships." };
export default function Page() { return <RelationshipsPage locale="en" />; }
