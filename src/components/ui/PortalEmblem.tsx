import Image from "next/image";
import type { PoliticalSystemPortal } from "@/data/political-system-portals";

export function PortalEmblem({
  portal,
  className = "",
  sizes,
}: {
  portal: PoliticalSystemPortal;
  className?: string;
  sizes: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`portal-emblem portal-emblem--${portal.id}${className ? ` ${className}` : ""}`}
    >
      <Image alt="" fill sizes={sizes} src={portal.emblemSrc} unoptimized />
    </span>
  );
}
