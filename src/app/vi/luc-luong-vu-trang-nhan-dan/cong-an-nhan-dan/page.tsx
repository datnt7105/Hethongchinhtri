import type { Metadata } from "next";
import { SystemPortalPage } from "@/components/pages/SystemPortalPage";
import { portalById } from "@/data/political-system-portals";

const portal = portalById.get("armed-forces")!;

export const metadata: Metadata = {
  title: "Công an nhân dân",
  description: "Tìm hiểu cơ cấu tổ chức và Bộ trưởng Bộ Công an qua các thời kỳ.",
};

export default function PeoplesPublicSecurityPage() {
  return <SystemPortalPage locale="vi" portal={portal} subjectId="public-security" />;
}
