import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Tổng quan",
  description: "Hiểu hệ thống chính trị Việt Nam qua bốn cổng nội dung, sơ đồ quan hệ và thư viện nguồn tham khảo dùng chung.",
};

export default function VietnameseHomePage() {
  return <HomePage locale="vi" />;
}
