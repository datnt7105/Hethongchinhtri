import type { LocalizedText } from "@/types/common";

export type MapRegion = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  path: string;
  labelX: number;
  labelY: number;
};

export const mapRegions: MapRegion[] = [
  {
    id: "north",
    name: { vi: "Khu vực phía Bắc", en: "Northern area" },
    description: {
      vi: "Vùng tương tác minh họa trên bản đồ. Đây không phải là một cấp hành chính.",
      en: "An interactive illustrative area on the map. It is not an administrative level.",
    },
    path: "M126 38 C166 16 226 26 246 60 C264 91 236 119 214 135 C193 151 186 177 166 194 C142 213 107 197 103 168 C99 140 70 126 79 94 C86 69 102 53 126 38 Z",
    labelX: 165,
    labelY: 107,
  },
  {
    id: "central",
    name: { vi: "Khu vực miền Trung", en: "Central area" },
    description: {
      vi: "Dải lãnh thổ minh họa kết nối hai phần của bản đồ; không biểu thị ranh giới hành chính chi tiết.",
      en: "An illustrative territorial strip connecting the map; it does not show detailed administrative boundaries.",
    },
    path: "M166 187 C185 197 197 216 194 240 C191 270 208 290 203 320 C198 350 178 369 183 398 C188 427 216 441 211 470 L161 475 C164 447 143 425 146 394 C149 363 169 341 164 311 C159 280 143 259 148 230 C151 211 157 198 166 187 Z",
    labelX: 174,
    labelY: 324,
  },
  {
    id: "south",
    name: { vi: "Khu vực phía Nam", en: "Southern area" },
    description: {
      vi: "Vùng tương tác minh họa trên bản đồ. Nội dung Phase 1 không cung cấp hồ sơ tổ chức riêng cho từng tỉnh.",
      en: "An interactive illustrative area. Phase 1 does not provide organization profiles for individual provinces.",
    },
    path: "M160 465 C194 454 239 463 260 492 C282 522 267 559 239 577 C205 599 156 594 128 571 C98 547 91 507 116 484 C128 473 144 468 160 465 Z",
    labelX: 185,
    labelY: 530,
  },
];
