import type { Metadata } from "next";
import { RelationshipsPage } from "@/components/pages/RelationshipsPage";

export const metadata: Metadata = { title: "Quan hệ trong hệ thống chính trị", description: "Khám phá các quan hệ lãnh đạo, quản lý, chỉ huy, thống lĩnh, giám sát và phối hợp." };
export default function Page() { return <RelationshipsPage locale="vi" />; }
