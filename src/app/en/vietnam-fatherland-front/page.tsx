import type { Metadata } from "next";
import { SystemPortalPage } from "@/components/pages/SystemPortalPage";
import { portalById } from "@/data/political-system-portals";

const portal = portalById.get("front")!;
export const metadata: Metadata = { title: portal.name.en, description: portal.summary.en };
export default function FrontPage() { return <SystemPortalPage locale="en" portal={portal} />; }
