import type { Metadata } from "next";
import { SystemPortalPage } from "@/components/pages/SystemPortalPage";
import { portalById } from "@/data/political-system-portals";

const portal = portalById.get("armed-forces")!;

export const metadata: Metadata = {
  title: "Quân đội nhân dân",
  description: "Tìm hiểu vị trí, cơ cấu lực lượng và Bộ trưởng Bộ Quốc phòng qua các thời kỳ.",
};

export default function PeoplesArmyPage() {
  return <SystemPortalPage locale="vi" portal={portal} subjectId="army" />;
}
