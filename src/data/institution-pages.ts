import type { Locale, LocalizedText } from "@/types/common";
import {
  defenceMinisterProfileDetails,
  frontChairProfileDetails,
  nationalAssemblyChairProfileDetails,
  primeMinisterProfileDetails,
  publicSecurityMinisterProfileDetails,
  statePresidentProfileDetails,
  type LeadershipProfileDetails,
} from "@/data/leadership-profile-details";

export type InstitutionId = "national-assembly" | "state-president" | "government";

export type VerificationStatus = "verified" | "needs-review" | "incomplete";

export type LeadershipProfile = {
  id: string;
  fullName: string;
  titleUsed: LocalizedText;
  startDisplay: LocalizedText;
  endDisplay?: LocalizedText;
  portraitUrl?: string;
  summary?: LocalizedText;
  milestones?: LocalizedText[];
  sourceUrl?: string;
  verificationStatus: VerificationStatus;
};

export type LeadershipArchive = {
  id: string;
  title: LocalizedText;
  lead: LocalizedText;
  periods: Array<{ label: LocalizedText; note: LocalizedText }>;
  profiles: LeadershipProfile[];
  officialLabel?: LocalizedText;
  officialUrl?: string;
  reviewedAt: string;
};

export type InstitutionPage = {
  id: InstitutionId;
  nodeId: string;
  order: string;
  slug: Record<Locale, string>;
  title: LocalizedText;
  eyebrow: LocalizedText;
  summary: LocalizedText;
  overview: Array<{ title: LocalizedText; description: LocalizedText }>;
  structureTitle: LocalizedText;
  archive: LeadershipArchive;
};

const t = (vi: string, en: string): LocalizedText => ({ vi, en });
const profileId = (fullName: string) => fullName
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/đ/gi, "d")
  .toLocaleLowerCase("vi")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");
const profile = (fullName: string, viOffice: string, enOffice: string, viTenure: string, enTenure = viTenure): LeadershipProfile => ({
  id: profileId(fullName),
  fullName,
  titleUsed: t(viOffice, enOffice),
  startDisplay: t(viTenure, enTenure),
  verificationStatus: "verified",
});
const profileWithDetails = (
  person: LeadershipProfile,
  viSummary: string,
  enSummary: string,
  milestones: Array<[vi: string, en: string]>,
): LeadershipProfile => ({
  ...person,
  summary: t(viSummary, enSummary),
  milestones: milestones.map(([vi, en]) => t(vi, en)),
});
const generalSecretaryArchiveUrl = "https://daihoidang.vn/tong-bi-thu.vnp";
const frontChairArchiveUrl = "https://nvsk.vnanet.vn/ho-so/chu-tich-mat-tran-to-quoc-viet-nam-qua-cac-thoi-ky-3-40857.vna";
const nationalAssemblyChairArchiveUrl = "https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc/chu-tich-quoc-hoi?categoryId=102000122";
const primeMinisterArchiveUrl = "https://chinhphu.vn/thu-tuong-chinh-phu-cac-nhiem-ky-tu-1945-den-nay-70558";
const statePresidentArchiveUrl = "https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc/chu-tich-nuoc?categoryId=102000124";
const defenceMinisterArchiveUrl = "https://bqp.vn/bo-truong/tien-nhiem";
const publicSecurityMinisterArchiveUrl = "https://bocongan.gov.vn/gioi-thieu/lanh-dao-bo-qua-cac-thoi-ky";
const portraitProfileFrom = (
  sourceUrl: string,
  portraitDirectory: string,
  detailsByName: Record<string, LeadershipProfileDetails> = {},
) => (
  fullName: string,
  viOffice: string,
  enOffice: string,
  viTenure: string,
  portraitFileName: string,
  enTenure = viTenure,
): LeadershipProfile => ({
  ...profile(fullName, viOffice, enOffice, viTenure, enTenure),
  portraitUrl: `/images/leaders/${portraitDirectory}/${portraitFileName}`,
  sourceUrl,
  ...(detailsByName[fullName] ?? {}),
});
const generalSecretaryProfile = portraitProfileFrom(generalSecretaryArchiveUrl, "general-secretaries");
const frontChairProfile = portraitProfileFrom(frontChairArchiveUrl, "front-chairs", frontChairProfileDetails);
const nationalAssemblyChairProfile = portraitProfileFrom(nationalAssemblyChairArchiveUrl, "national-assembly-chairs", nationalAssemblyChairProfileDetails);
const primeMinisterProfile = portraitProfileFrom(primeMinisterArchiveUrl, "prime-ministers", primeMinisterProfileDetails);
const statePresidentProfile = portraitProfileFrom(statePresidentArchiveUrl, "state-presidents", statePresidentProfileDetails);
const defenceMinisterProfile = portraitProfileFrom(defenceMinisterArchiveUrl, "defence-ministers", defenceMinisterProfileDetails);
const publicSecurityMinisterProfile = portraitProfileFrom(publicSecurityMinisterArchiveUrl, "public-security-ministers", publicSecurityMinisterProfileDetails);

export const leadershipArchives: Record<string, LeadershipArchive> = {
  "general-secretary": {
    id: "general-secretary",
    title: t("Tổng Bí thư qua các thời kỳ", "General Secretaries through history"),
    lead: t("Tách lịch sử người đảm nhiệm khỏi sơ đồ cơ cấu để phân biệt rõ chức danh với cá nhân.", "Keeps officeholder history separate from the organization structure so the office is not confused with an individual."),
    periods: [
      { label: t("1930–1975", "1930–1975"), note: t("Thời kỳ hình thành và lãnh đạo cách mạng", "Formation and revolutionary leadership") },
      { label: t("1976–2000", "1976–2000"), note: t("Thống nhất đất nước và thời kỳ đổi mới", "National reunification and the renovation period") },
      { label: t("2001–nay", "2001–present"), note: t("Các nhiệm kỳ trong giai đoạn đương đại", "Terms in the contemporary period") },
    ],
    profiles: [
      profileWithDetails(
        generalSecretaryProfile("Trần Phú", "Tổng Bí thư", "General Secretary", "10/1930–4/1931", "tran-phu.jpg"),
        "Trần Phú là Tổng Bí thư đầu tiên của Đảng. Ông trực tiếp dự thảo Luận cương chính trị tháng 10/1930 và tham gia xây dựng tổ chức Đảng trong giai đoạn đầu.",
        "Trần Phú was the Party's first General Secretary. He directly drafted the October 1930 Political Thesis and helped build the Party organization in its early period.",
        [
          ["1926: Tham gia Hội Việt Nam Cách mạng Thanh niên.", "1926: Joined the Vietnamese Revolutionary Youth League."],
          ["10/1930: Luận cương chính trị được thông qua; được bầu làm Tổng Bí thư.", "10/1930: The Political Thesis was adopted; elected General Secretary."],
          ["1931: Bị bắt và hy sinh tại Nhà thương Chợ Quán.", "1931: Arrested and died at Chợ Quán Hospital."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Lê Hồng Phong", "Tổng Bí thư", "General Secretary", "3/1935–10/1936", "le-hong-phong.jpg"),
        "Lê Hồng Phong có vai trò quan trọng trong việc khôi phục hệ thống tổ chức Đảng sau thời kỳ bị đàn áp và chuẩn bị Đại hội đại biểu toàn quốc lần thứ I.",
        "Lê Hồng Phong played an important role in restoring the Party's organizational network after a period of repression and preparing for the First National Congress.",
        [
          ["1924: Sang Quảng Châu hoạt động cách mạng.", "1924: Went to Guangzhou for revolutionary activities."],
          ["1933–1935: Tham gia khôi phục hệ thống tổ chức Đảng.", "1933–1935: Helped restore the Party's organizational network."],
          ["3/1935: Đứng đầu Ban Chấp hành Trung ương sau Đại hội I.", "3/1935: Headed the Central Committee after the First Congress."],
          ["1942: Hy sinh tại Côn Đảo.", "1942: Died at Côn Đảo."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Hà Huy Tập", "Tổng Bí thư", "General Secretary", "10/1936–3/1938", "ha-huy-tap.jpg"),
        "Hà Huy Tập là nhà hoạt động lý luận và tổ chức của Đảng. Trong nhiệm kỳ, ông tham gia khôi phục cơ quan lãnh đạo Trung ương và chủ trì nhiều hội nghị quan trọng.",
        "Hà Huy Tập was a Party theorist and organizer. During his tenure, he helped restore the central leadership body and chaired several important conferences.",
        [
          ["1925: Bắt đầu tham gia hoạt động cách mạng.", "1925: Began participating in revolutionary activities."],
          ["10/1936: Được bầu làm Tổng Bí thư.", "10/1936: Elected General Secretary."],
          ["1937–1938: Chủ trì các Hội nghị Trung ương tại Hóc Môn.", "1937–1938: Chaired Central Committee conferences in Hóc Môn."],
          ["1941: Bị xử bắn tại Hóc Môn, Gia Định.", "1941: Executed in Hóc Môn, Gia Định."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Nguyễn Văn Cừ", "Tổng Bí thư", "General Secretary", "3/1938–1/1940", "nguyen-van-cu.jpg"),
        "Nguyễn Văn Cừ lãnh đạo Đảng trong giai đoạn phong trào dân chủ phát triển và tình hình quốc tế có nhiều biến động. Ông đặc biệt chú trọng công tác tự phê bình, phê bình và xây dựng Đảng.",
        "Nguyễn Văn Cừ led the Party as the democratic movement expanded amid major international changes. He placed particular emphasis on self-criticism, criticism and Party building.",
        [
          ["1929: Trở thành người hoạt động cách mạng chuyên nghiệp.", "1929: Became a professional revolutionary."],
          ["3/1938: Được bầu làm Tổng Bí thư.", "3/1938: Elected General Secretary."],
          ["1939: Viết tác phẩm Tự chỉ trích.", "1939: Wrote the work Self-Criticism."],
          ["1941: Bị xử bắn tại Hóc Môn.", "1941: Executed in Hóc Môn."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Trường Chinh", "Tổng Bí thư", "General Secretary", "5/1941–10/1956; 7/1986–12/1986", "truong-chinh.jpg"),
        "Trường Chinh giữ chức Tổng Bí thư trong hai giai đoạn lịch sử khác nhau. Ông tham gia lãnh đạo Cách mạng Tháng Tám, kháng chiến chống thực dân Pháp và quá trình chuẩn bị đường lối đổi mới năm 1986.",
        "Trường Chinh served as General Secretary in two distinct historical periods. He helped lead the August Revolution, the resistance against French colonial rule and preparations for the 1986 renovation policy.",
        [
          ["1929: Tham gia vận động thành lập tổ chức cộng sản ở Bắc Kỳ.", "1929: Helped campaign for the establishment of a communist organization in Bắc Kỳ."],
          ["5/1941: Được bầu làm Tổng Bí thư.", "5/1941: Elected General Secretary."],
          ["1945: Tham gia lãnh đạo Tổng khởi nghĩa Tháng Tám.", "1945: Helped lead the August General Uprising."],
          ["7/1986: Được bầu lại làm Tổng Bí thư trước Đại hội VI.", "7/1986: Re-elected General Secretary before the Sixth Congress."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Hồ Chí Minh", "Chủ tịch Đảng; Tổng Bí thư", "Party President; General Secretary", "Chủ tịch Đảng 2/1951–9/1969; Tổng Bí thư 10/1956–9/1960", "ho-chi-minh.jpg", "Party President 2/1951–9/1969; General Secretary 10/1956–9/1960"),
        "Hồ Chí Minh là người sáng lập Đảng Cộng sản Việt Nam và lãnh đạo cách mạng Việt Nam giành chính quyền năm 1945. Nguồn Tư liệu – Văn kiện Đảng xếp ông trong danh sách Tổng Bí thư giai đoạn 1956–1960.",
        "Hồ Chí Minh founded the Communist Party of Vietnam and led the Vietnamese revolution to seize power in 1945. The Party Documents archive lists him among the General Secretaries for 1956–1960.",
        [
          ["1930: Chủ trì Hội nghị thành lập Đảng.", "1930: Chaired the conference that founded the Party."],
          ["1941: Chủ trì Hội nghị Trung ương VIII, thành lập Việt Minh.", "1941: Chaired the Eighth Central Committee Conference and established the Việt Minh."],
          ["1945: Lãnh đạo Cách mạng Tháng Tám và thành lập nước Việt Nam Dân chủ Cộng hòa.", "1945: Led the August Revolution and founded the Democratic Republic of Vietnam."],
          ["1956–1960: Giữ chức Tổng Bí thư theo danh mục chính thức.", "1956–1960: Served as General Secretary according to the official listing."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Lê Duẩn", "Tổng Bí thư", "General Secretary", "9/1960–7/1986", "le-duan.jpg"),
        "Lê Duẩn là người giữ cương vị đứng đầu Đảng trong thời gian dài, từ thời kỳ đấu tranh thống nhất đất nước đến những năm đầu xây dựng và bảo vệ Tổ quốc sau năm 1975.",
        "Lê Duẩn headed the Party for an extended period, from the struggle for national reunification through the early years of national construction and defence after 1975.",
        [
          ["1930: Trở thành một trong những đảng viên đầu tiên.", "1930: Became one of the Party's earliest members."],
          ["1960: Được bầu làm Bí thư thứ nhất tại Đại hội III.", "1960: Elected First Secretary at the Third Congress."],
          ["1976: Giữ chức Tổng Bí thư tại Đại hội IV.", "1976: Became General Secretary at the Fourth Congress."],
          ["1986: Từ trần khi đang giữ chức Tổng Bí thư.", "1986: Died while serving as General Secretary."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Nguyễn Văn Linh", "Tổng Bí thư", "General Secretary", "12/1986–6/1991", "nguyen-van-linh.jpg"),
        "Nguyễn Văn Linh là Tổng Bí thư đầu tiên của thời kỳ Đổi mới. Ông góp phần thúc đẩy đổi mới tư duy kinh tế, khắc phục cơ chế quản lý tập trung và tăng cường đấu tranh chống quan liêu, tiêu cực.",
        "Nguyễn Văn Linh was the first General Secretary of the Đổi Mới era. He helped advance new economic thinking, reform centralized management and strengthen efforts against bureaucracy and misconduct.",
        [
          ["1930: Bị bắt và đày ra Côn Đảo khi tham gia hoạt động cách mạng.", "1930: Arrested and exiled to Côn Đảo for revolutionary activities."],
          ["1981: Giữ chức Bí thư Thành ủy Thành phố Hồ Chí Minh.", "1981: Became Secretary of the Hồ Chí Minh City Party Committee."],
          ["12/1986: Được bầu làm Tổng Bí thư tại Đại hội VI.", "12/1986: Elected General Secretary at the Sixth Congress."],
          ["1991: Được cử làm Cố vấn Ban Chấp hành Trung ương.", "1991: Appointed Adviser to the Central Committee."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Đỗ Mười", "Tổng Bí thư", "General Secretary", "6/1991–12/1997", "do-muoi.jpg"),
        "Đỗ Mười lãnh đạo Đảng trong giai đoạn tiếp tục triển khai đường lối Đổi mới, ổn định kinh tế – xã hội và mở rộng quan hệ đối ngoại của Việt Nam.",
        "Đỗ Mười led the Party as Vietnam continued implementing Đổi Mới, stabilized its economy and society, and expanded its foreign relations.",
        [
          ["1939: Gia nhập Đảng Cộng sản Đông Dương.", "1939: Joined the Indochinese Communist Party."],
          ["1945: Vượt ngục và tham gia lãnh đạo khởi nghĩa tại Hà Đông.", "1945: Escaped prison and helped lead the uprising in Hà Đông."],
          ["1988: Được bầu làm Chủ tịch Hội đồng Bộ trưởng.", "1988: Elected Chair of the Council of Ministers."],
          ["1991: Được bầu làm Tổng Bí thư tại Đại hội VII.", "1991: Elected General Secretary at the Seventh Congress."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Lê Khả Phiêu", "Tổng Bí thư", "General Secretary", "12/1997–4/2001", "le-kha-phieu.jpg"),
        "Lê Khả Phiêu trưởng thành từ Quân đội nhân dân Việt Nam và từng phụ trách công tác Đảng, công tác chính trị trong quân đội trước khi được bầu làm Tổng Bí thư.",
        "Lê Khả Phiêu rose through the Vietnam People's Army and oversaw Party and political work in the military before being elected General Secretary.",
        [
          ["1964–1992: Đảm nhiệm nhiều chức vụ chính trị trong quân đội.", "1964–1992: Held a range of political posts in the military."],
          ["1991: Được bầu vào Ban Chấp hành Trung ương.", "1991: Elected to the Central Committee."],
          ["1992: Tham gia Bộ Chính trị và Thường trực Bộ Chính trị.", "1992: Joined the Politburo and its Standing Board."],
          ["12/1997: Được bầu làm Tổng Bí thư.", "12/1997: Elected General Secretary."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Nông Đức Mạnh", "Tổng Bí thư", "General Secretary", "4/2001–1/2011", "nong-duc-manh.jpg"),
        "Nông Đức Mạnh giữ chức Tổng Bí thư trong hai nhiệm kỳ, gắn với quá trình đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế của Việt Nam.",
        "Nông Đức Mạnh served two terms as General Secretary during Vietnam's accelerated industrialization, modernization and international integration.",
        [
          ["1992: Được bầu làm Chủ tịch Quốc hội khóa IX.", "1992: Elected Chair of the Ninth National Assembly."],
          ["1997: Tiếp tục giữ chức Chủ tịch Quốc hội khóa X.", "1997: Continued as Chair of the Tenth National Assembly."],
          ["4/2001: Được bầu làm Tổng Bí thư tại Đại hội IX.", "4/2001: Elected General Secretary at the Ninth Congress."],
          ["4/2006: Được bầu lại làm Tổng Bí thư tại Đại hội X.", "4/2006: Re-elected General Secretary at the Tenth Congress."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Nguyễn Phú Trọng", "Tổng Bí thư", "General Secretary", "1/2011–7/2024", "nguyen-phu-trong.jpg"),
        "Nguyễn Phú Trọng giữ chức Tổng Bí thư trong ba nhiệm kỳ. Ông tập trung vào công tác xây dựng, chỉnh đốn Đảng và lãnh đạo công tác phòng, chống tham nhũng, tiêu cực.",
        "Nguyễn Phú Trọng served three terms as General Secretary. He focused on Party building and rectification and led efforts to prevent and combat corruption and misconduct.",
        [
          ["2006: Được bầu làm Chủ tịch Quốc hội.", "2006: Elected Chair of the National Assembly."],
          ["1/2011: Được bầu làm Tổng Bí thư.", "1/2011: Elected General Secretary."],
          ["2/2013: Làm Trưởng Ban Chỉ đạo Trung ương về phòng, chống tham nhũng.", "2/2013: Became Head of the Central Steering Committee on Anti-Corruption."],
          ["2018–2021: Đồng thời giữ chức Chủ tịch nước.", "2018–2021: Concurrently served as State President."],
        ],
      ),
      profileWithDetails(
        generalSecretaryProfile("Tô Lâm", "Tổng Bí thư", "General Secretary", "Từ 8/2024", "to-lam.jpg", "Since 8/2024"),
        "Tô Lâm trưởng thành trong lực lượng Công an nhân dân, từng giữ chức Bộ trưởng Bộ Công an và Chủ tịch nước trước khi được bầu làm Tổng Bí thư.",
        "Tô Lâm rose through the People's Public Security forces and served as Minister of Public Security and State President before being elected General Secretary.",
        [
          ["2016: Được bổ nhiệm làm Bộ trưởng Bộ Công an.", "2016: Appointed Minister of Public Security."],
          ["5/2024: Được Quốc hội bầu làm Chủ tịch nước.", "5/2024: Elected State President by the National Assembly."],
          ["8/2024: Được bầu làm Tổng Bí thư.", "8/2024: Elected General Secretary."],
          ["Từ 2024: Lãnh đạo công việc của Ban Chấp hành Trung ương Đảng.", "Since 2024: Has led the work of the Party Central Committee."],
        ],
      ),
    ],
    officialLabel: t("Mở chuyên trang Tổng Bí thư của TTXVN", "Open VNA's General Secretary archive"),
    officialUrl: generalSecretaryArchiveUrl,
    reviewedAt: "18/07/2026",
  },
  "front-central-committee-chair": {
    id: "front-central-committee-chair",
    title: t(
      "Chủ tịch Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam qua các thời kỳ",
      "Chairs of the Central Committee of the Vietnam Fatherland Front through history",
    ),
    lead: t(
      "Hồ sơ chỉ xuất hiện sau khi họ tên, chức danh và thời gian đảm nhiệm đã được đối chiếu nguồn chính thức.",
      "Profiles appear only after the name, office and tenure have been checked against an official source.",
    ),
    periods: [
      { label: t("1941–1976", "1941–1976"), note: t("", "") },
      { label: t("1977–2007", "1977–2007"), note: t("", "") },
      { label: t("2008–nay", "2008–present"), note: t("", "") },
    ],
    profiles: [
      frontChairProfile(
        "Nguyễn Lương Bằng",
        "Chủ nhiệm đầu tiên của Tổng bộ Việt Minh",
        "First Head of the Viet Minh General Headquarters",
        "5/1941",
        "nguyen-luong-bang.jpg",
      ),
      frontChairProfile(
        "Huỳnh Thúc Kháng",
        "Hội trưởng Hội Liên hiệp quốc dân Việt Nam",
        "President of the Vietnam National Union Association",
        "5/1946",
        "huynh-thuc-khang.jpg",
      ),
      frontChairProfile(
        "Tôn Đức Thắng",
        "Chủ tịch Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam",
        "Chair of the Central Committee of the Vietnam Fatherland Front",
        "9/1955–1/1977",
        "ton-duc-thang.jpg",
      ),
      frontChairProfile(
        "Hoàng Quốc Việt",
        "Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa I",
        "Chair of the Central Committee of the Vietnam Fatherland Front, Term I",
        "1/1977–5/1983",
        "hoang-quoc-viet.jpg",
      ),
      frontChairProfile(
        "Huỳnh Tấn Phát",
        "Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa II",
        "Chair of the Central Committee of the Vietnam Fatherland Front, Term II",
        "5/1983–11/1988",
        "huynh-tan-phat.jpg",
      ),
      frontChairProfile(
        "Nguyễn Hữu Thọ",
        "Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa III",
        "Chair of the Central Committee of the Vietnam Fatherland Front, Term III",
        "11/1988–8/1994",
        "nguyen-huu-tho.jpg",
      ),
      frontChairProfile(
        "Lê Quang Đạo",
        "Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa IV",
        "Chair of the Central Committee of the Vietnam Fatherland Front, Term IV",
        "8/1994–7/1999",
        "le-quang-dao.jpg",
      ),
      frontChairProfile(
        "Phạm Thế Duyệt",
        "Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa V, VI",
        "Chair of the Central Committee of the Vietnam Fatherland Front, Terms V and VI",
        "8/1999–12/2007",
        "pham-the-duyet.jpg",
      ),
      frontChairProfile(
        "Huỳnh Đảm",
        "Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa VI, VII",
        "Chair of the Central Committee of the Vietnam Fatherland Front, Terms VI and VII",
        "1/2008–9/2013",
        "huynh-dam.jpg",
      ),
      frontChairProfile(
        "Nguyễn Thiện Nhân",
        "Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa VII, VIII",
        "Chair of the Central Committee of the Vietnam Fatherland Front, Terms VII and VIII",
        "9/2013–6/2017",
        "nguyen-thien-nhan.jpg",
      ),
      frontChairProfile(
        "Trần Thanh Mẫn",
        "Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa VIII, IX",
        "Chair of the Central Committee of the Vietnam Fatherland Front, Terms VIII and IX",
        "7/2017–3/2021",
        "tran-thanh-man.jpg",
      ),
      frontChairProfile(
        "Đỗ Văn Chiến",
        "Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa IX, X",
        "Chair of the Central Committee of the Vietnam Fatherland Front, Terms IX and X",
        "Từ 4/2021",
        "do-van-chien.jpg",
        "Since 4/2021",
      ),
    ],
    officialLabel: t("Mở hồ sơ Chủ tịch Mặt trận Tổ quốc Việt Nam qua các thời kỳ", "Open the archive of Vietnam Fatherland Front Chairs through history"),
    officialUrl: frontChairArchiveUrl,
    reviewedAt: "18/07/2026",
  },
  "minister-national-defence": {
    id: "minister-national-defence",
    title: t("Bộ trưởng Bộ Quốc phòng qua các thời kỳ", "Ministers of National Defence through history"),
    lead: t(
      "Phân biệt chức danh lãnh đạo Bộ Quốc phòng với Quân đội nhân dân là một lực lượng vũ trang.",
      "Distinguishes the office leading the Ministry of National Defence from the People's Army as an armed force.",
    ),
    periods: [
      { label: t("1945–1979", "1945–1979"), note: t("Các nhiệm kỳ đầu và giai đoạn kháng chiến", "Early terms and the wartime period") },
      { label: t("1980–2005", "1980–2005"), note: t("Giai đoạn xây dựng và bảo vệ Tổ quốc", "National construction and defence period") },
      { label: t("2006–nay", "2006–present"), note: t("Các nhiệm kỳ trong giai đoạn đương đại", "Terms in the contemporary period") },
    ],
    profiles: [
      defenceMinisterProfile("Chu Văn Tấn", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "9/1945–2/1946", "chu-van-tan.jpg"),
      defenceMinisterProfile("Phan Anh", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "3/1946–11/1946", "phan-anh.jpg"),
      defenceMinisterProfile("Võ Nguyên Giáp", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "12/1946–7/1947; 10/1948–1/1980", "vo-nguyen-giap.jpg"),
      defenceMinisterProfile("Tạ Quang Bửu", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "8/1947–8/1948", "ta-quang-buu.png"),
      defenceMinisterProfile("Văn Tiến Dũng", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "1980–1986", "van-tien-dung.jpg"),
      defenceMinisterProfile("Lê Đức Anh", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "1987–1991", "le-duc-anh.jpg"),
      defenceMinisterProfile("Đoàn Khuê", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "1991–1997", "doan-khue.jpg"),
      defenceMinisterProfile("Phạm Văn Trà", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "1997–2006", "pham-van-tra.jpg"),
      defenceMinisterProfile("Phùng Quang Thanh", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "2006–2016", "phung-quang-thanh.jpg"),
      defenceMinisterProfile("Ngô Xuân Lịch", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "2016–2021", "ngo-xuan-lich.jpg"),
      defenceMinisterProfile("Phan Văn Giang", "Bộ trưởng Bộ Quốc phòng", "Minister of National Defence", "Từ 2021", "phan-van-giang.jpg", "Since 2021"),
    ],
    officialLabel: t("Mở hồ sơ Bộ trưởng Bộ Quốc phòng qua các thời kỳ", "Open the official archive of Ministers of National Defence"),
    officialUrl: defenceMinisterArchiveUrl,
    reviewedAt: "18/07/2026",
  },
  "minister-public-security": {
    id: "minister-public-security",
    title: t("Bộ trưởng Bộ Công an qua các thời kỳ", "Ministers of Public Security through history"),
    lead: t(
      "Phân biệt chức danh lãnh đạo Bộ Công an với Công an nhân dân là một lực lượng vũ trang.",
      "Distinguishes the office leading the Ministry of Public Security from the People's Public Security as an armed force.",
    ),
    periods: [
      { label: t("1946–1980", "1946–1980"), note: t("Việt Nam Công an vụ và Bộ Công an", "Vietnam Police Department and Ministry of Public Security") },
      { label: t("1980–2001", "1980–2001"), note: t("Giai đoạn mang tên Bộ Nội vụ", "Period under the Ministry of Home Affairs name") },
      { label: t("2002–nay", "2002–present"), note: t("Các nhiệm kỳ Bộ trưởng Bộ Công an", "Terms of Ministers of Public Security") },
    ],
    profiles: [
      publicSecurityMinisterProfile("Lê Giản", "Giám đốc Việt Nam Công an vụ", "Director of the Vietnam Police Department", "1946–1952", "le-gian.webp"),
      publicSecurityMinisterProfile("Trần Quốc Hoàn", "Bộ trưởng Bộ Công an", "Minister of Public Security", "1953–1980", "tran-quoc-hoan.webp"),
      publicSecurityMinisterProfile("Phạm Hùng", "Phó Chủ tịch Hội đồng Bộ trưởng kiêm Bộ trưởng Bộ Nội vụ", "Deputy Chair of the Council of Ministers and Minister of Home Affairs", "1980–1986", "pham-hung.webp"),
      publicSecurityMinisterProfile("Mai Chí Thọ", "Bộ trưởng Bộ Nội vụ", "Minister of Home Affairs", "1986–1991", "mai-chi-tho.webp"),
      publicSecurityMinisterProfile("Bùi Thiện Ngộ", "Bộ trưởng Bộ Nội vụ", "Minister of Home Affairs", "1991–1996", "bui-thien-ngo.webp"),
      publicSecurityMinisterProfile("Lê Minh Hương", "Bộ trưởng Bộ Nội vụ; Bộ trưởng Bộ Công an", "Minister of Home Affairs; Minister of Public Security", "1996–2002", "le-minh-huong.webp"),
      publicSecurityMinisterProfile("Lê Hồng Anh", "Bộ trưởng Bộ Công an", "Minister of Public Security", "2002–2011", "le-hong-anh.webp"),
      publicSecurityMinisterProfile("Trần Đại Quang", "Bộ trưởng Bộ Công an", "Minister of Public Security", "2011–2016", "tran-dai-quang.webp"),
      publicSecurityMinisterProfile("Tô Lâm", "Bộ trưởng Bộ Công an", "Minister of Public Security", "2016–6/6/2024", "to-lam.webp"),
      publicSecurityMinisterProfile("Lương Tam Quang", "Bộ trưởng Bộ Công an", "Minister of Public Security", "Từ 6/6/2024", "luong-tam-quang.png", "Since 6/6/2024"),
    ],
    officialLabel: t("Mở hồ sơ lãnh đạo Bộ Công an qua các thời kỳ", "Open the official archive of Ministry of Public Security leaders"),
    officialUrl: publicSecurityMinisterArchiveUrl,
    reviewedAt: "18/07/2026",
  },
  "national-assembly-chair": {
    id: "national-assembly-chair",
    title: t("Chủ tịch Quốc hội qua các thời kỳ", "National Assembly Chairs through history"),
    lead: t("Tra cứu theo nhiệm kỳ Quốc hội và tên chức danh được sử dụng trong từng giai đoạn.", "Browse by National Assembly term and the office title used in each period."),
    periods: [
      { label: t("Khóa I–VI", "Terms I–VI"), note: t("1946–1981", "1946–1981") },
      { label: t("Khóa VII–XI", "Terms VII–XI"), note: t("1981–2007", "1981–2007") },
      { label: t("Khóa XII–nay", "Terms XII–present"), note: t("2007–nay", "2007–present") },
    ],
    profiles: [
      nationalAssemblyChairProfile("Nguyễn Văn Tố", "Trưởng ban Thường trực Quốc hội", "Head of the National Assembly Standing Board", "1/1946–11/1946", "nguyen-van-to.jpg"),
      nationalAssemblyChairProfile("Bùi Bằng Đoàn", "Trưởng ban Thường trực Quốc hội", "Head of the National Assembly Standing Board", "11/1946–4/1955", "bui-bang-doan.jpg"),
      nationalAssemblyChairProfile("Tôn Đức Thắng", "Trưởng ban Thường trực Quốc hội", "Head of the National Assembly Standing Board", "4/1955–9/1960", "ton-duc-thang.jpg"),
      nationalAssemblyChairProfile("Trường Chinh", "Chủ tịch Ủy ban Thường vụ Quốc hội", "Chair of the National Assembly Standing Committee", "9/1960–7/1981", "truong-chinh.jpg"),
      nationalAssemblyChairProfile("Nguyễn Hữu Thọ", "Chủ tịch Quốc hội", "Chair of the National Assembly", "7/1981–6/1987", "nguyen-huu-tho.jpg"),
      nationalAssemblyChairProfile("Lê Quang Đạo", "Chủ tịch Quốc hội", "Chair of the National Assembly", "6/1987–9/1992", "le-quang-dao.jpg"),
      nationalAssemblyChairProfile("Nông Đức Mạnh", "Chủ tịch Quốc hội", "Chair of the National Assembly", "9/1992–6/2001", "nong-duc-manh.jpg"),
      nationalAssemblyChairProfile("Nguyễn Văn An", "Chủ tịch Quốc hội", "Chair of the National Assembly", "6/2001–6/2006", "nguyen-van-an.jpg"),
      nationalAssemblyChairProfile("Nguyễn Phú Trọng", "Chủ tịch Quốc hội", "Chair of the National Assembly", "6/2006–7/2011", "nguyen-phu-trong.jpg"),
      nationalAssemblyChairProfile("Nguyễn Sinh Hùng", "Chủ tịch Quốc hội", "Chair of the National Assembly", "7/2011–3/2016", "nguyen-sinh-hung.jpg"),
      nationalAssemblyChairProfile("Nguyễn Thị Kim Ngân", "Chủ tịch Quốc hội", "Chair of the National Assembly", "3/2016–3/2021", "nguyen-thi-kim-ngan.jpg"),
      nationalAssemblyChairProfile("Vương Đình Huệ", "Chủ tịch Quốc hội", "Chair of the National Assembly", "3/2021–4/2024", "vuong-dinh-hue.jpg"),
      nationalAssemblyChairProfile("Trần Thanh Mẫn", "Chủ tịch Quốc hội", "Chair of the National Assembly", "Từ 5/2024", "tran-thanh-man.jpg", "Since 5/2024"),
    ],
    officialLabel: t("Mở hồ sơ Chủ tịch Quốc hội qua các thời kỳ", "Open the officeholder archive for National Assembly Chairs"),
    officialUrl: nationalAssemblyChairArchiveUrl,
    reviewedAt: "18/07/2026",
  },
  "state-president": {
    id: "state-president",
    title: t("Chủ tịch nước qua các thời kỳ", "State Presidents through history"),
    lead: t("Giữ nguyên tên chức danh và thời gian đảm nhiệm như hồ sơ chính thức của từng nhiệm kỳ.", "Preserves the official title and tenure recorded for each term."),
    periods: [
      { label: t("1945–1976", "1945–1976"), note: t("Giai đoạn Nhà nước Việt Nam Dân chủ Cộng hòa", "Democratic Republic of Vietnam period") },
      { label: t("1976–1992", "1976–1992"), note: t("Giai đoạn chuyển tiếp về thiết chế và tên gọi", "Institutional and title transition period") },
      { label: t("1992–nay", "1992–present"), note: t("Các nhiệm kỳ từ khi tái lập Văn phòng Chủ tịch nước", "Terms since the Office of the State President was re-established") },
    ],
    profiles: [
      statePresidentProfile("Hồ Chí Minh", "Chủ tịch nước", "State President", "1/1946–9/1969", "ho-chi-minh.jpg"),
      statePresidentProfile("Tôn Đức Thắng", "Chủ tịch nước", "State President", "23/9/1969–1980", "ton-duc-thang.jpg"),
      statePresidentProfile("Nguyễn Hữu Thọ", "Quyền Chủ tịch nước", "Acting State President", "4/1980–7/1981", "nguyen-huu-tho.jpg"),
      statePresidentProfile("Trường Chinh", "Chủ tịch Hội đồng Nhà nước", "Chair of the Council of State", "1981–1987", "truong-chinh.jpg"),
      statePresidentProfile("Võ Chí Công", "Chủ tịch Hội đồng Nhà nước", "Chair of the Council of State", "1987–1992", "vo-chi-cong.jpg"),
      statePresidentProfile("Lê Đức Anh", "Chủ tịch nước", "State President", "1992–1997", "le-duc-anh.jpg"),
      statePresidentProfile("Trần Đức Lương", "Chủ tịch nước", "State President", "1997–6/2006", "tran-duc-luong.jpg"),
      statePresidentProfile("Nguyễn Minh Triết", "Chủ tịch nước", "State President", "6/2006–7/2011", "nguyen-minh-triet.jpg"),
      statePresidentProfile("Trương Tấn Sang", "Chủ tịch nước", "State President", "7/2011–3/2016", "truong-tan-sang.jpg"),
      statePresidentProfile("Trần Đại Quang", "Chủ tịch nước", "State President", "4/2016–9/2018", "tran-dai-quang.jpg"),
      statePresidentProfile("Đặng Thị Ngọc Thịnh", "Quyền Chủ tịch nước", "Acting State President", "9/2018–10/2018", "dang-thi-ngoc-thinh.jpg"),
      statePresidentProfile("Nguyễn Phú Trọng", "Chủ tịch nước", "State President", "23/10/2018–5/4/2021", "nguyen-phu-trong.jpg"),
      statePresidentProfile("Nguyễn Xuân Phúc", "Chủ tịch nước", "State President", "5/4/2021–18/1/2023", "nguyen-xuan-phuc.jpg"),
      statePresidentProfile("Võ Thị Ánh Xuân", "Quyền Chủ tịch nước", "Acting State President", "1/2023–3/2023; 3/2024–5/2024", "vo-thi-anh-xuan.jpg"),
      statePresidentProfile("Võ Văn Thưởng", "Chủ tịch nước", "State President", "3/2023–3/2024", "vo-van-thuong.jpg"),
      statePresidentProfile("Lương Cường", "Chủ tịch nước", "State President", "10/2024–4/2026", "luong-cuong.jpg"),
      statePresidentProfile("Tô Lâm", "Chủ tịch nước", "State President", "22/5/2024–21/10/2024; từ 4/2026", "to-lam.jpg", "22/5/2024–21/10/2024; since 4/2026"),
    ],
    officialLabel: t("Mở danh sách chính thức theo nhiệm kỳ", "Open the official term-by-term list"),
    officialUrl: statePresidentArchiveUrl,
    reviewedAt: "18/07/2026",
  },
  "prime-minister": {
    id: "prime-minister",
    title: t("Thủ tướng Chính phủ qua các thời kỳ", "Prime Ministers through history"),
    lead: t("Tra cứu cả những tên gọi lịch sử của chức danh người đứng đầu Chính phủ.", "Includes historical titles used for the head of Government."),
    periods: [
      { label: t("1945–1976", "1945–1976"), note: t("Chính phủ lâm thời và các nhiệm kỳ đầu", "Provisional and early Governments") },
      { label: t("1976–1992", "1976–1992"), note: t("Thời kỳ Hội đồng Bộ trưởng", "Council of Ministers period") },
      { label: t("1992–nay", "1992–present"), note: t("Chức danh Thủ tướng Chính phủ", "Prime Minister period") },
    ],
    profiles: [
      primeMinisterProfile("Hồ Chí Minh", "Chủ tịch Chính phủ; Chủ tịch nước kiêm Thủ tướng", "President of the Government; State President and Prime Minister", "9/1945–đầu 1955", "ho-chi-minh.jpg", "9/1945–early 1955"),
      primeMinisterProfile("Phạm Văn Đồng", "Thủ tướng Chính phủ; Chủ tịch Hội đồng Bộ trưởng", "Prime Minister; Chair of the Council of Ministers", "9/1955–1987", "pham-van-dong.jpg"),
      primeMinisterProfile("Huỳnh Tấn Phát", "Chủ tịch Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam", "President of the Provisional Revolutionary Government of the Republic of South Vietnam", "1969–1976", "huynh-tan-phat.jpg"),
      primeMinisterProfile("Phạm Hùng", "Chủ tịch Hội đồng Bộ trưởng", "Chair of the Council of Ministers", "1987–10/3/1988", "pham-hung.jpg"),
      primeMinisterProfile("Đỗ Mười", "Chủ tịch Hội đồng Bộ trưởng", "Chair of the Council of Ministers", "6/1988–7/1991", "do-muoi.jpg"),
      primeMinisterProfile("Võ Văn Kiệt", "Quyền Chủ tịch Hội đồng Bộ trưởng; Chủ tịch Hội đồng Bộ trưởng; Thủ tướng Chính phủ", "Acting Chair and Chair of the Council of Ministers; Prime Minister", "3/1988–6/1988; 8/1991–9/1997", "vo-van-kiet.jpg"),
      primeMinisterProfile("Phan Văn Khải", "Thủ tướng Chính phủ", "Prime Minister", "9/1997–27/6/2006", "phan-van-khai.jpg"),
      primeMinisterProfile("Nguyễn Tấn Dũng", "Thủ tướng Chính phủ", "Prime Minister", "6/2006–6/4/2016", "nguyen-tan-dung.jpg"),
      primeMinisterProfile("Nguyễn Xuân Phúc", "Thủ tướng Chính phủ", "Prime Minister", "4/2016–5/4/2021", "nguyen-xuan-phuc.jpg"),
      primeMinisterProfile("Phạm Minh Chính", "Thủ tướng Chính phủ", "Prime Minister", "5/4/2021–4/2026", "pham-minh-chinh.jpg"),
      primeMinisterProfile("Lê Minh Hưng", "Thủ tướng Chính phủ", "Prime Minister", "Từ 4/2026", "le-minh-hung.jpg", "Since 4/2026"),
    ],
    officialLabel: t("Mở hồ sơ Thủ tướng các nhiệm kỳ", "Open the official Prime Minister archive"),
    officialUrl: primeMinisterArchiveUrl,
    reviewedAt: "18/07/2026",
  },
};

export const institutionPages: InstitutionPage[] = [
  {
    id: "national-assembly",
    nodeId: "national-assembly",
    order: "02.1",
    slug: { vi: "quoc-hoi", en: "national-assembly" },
    title: t("Quốc hội", "National Assembly"),
    eyebrow: t("Cơ quan quyền lực nhà nước cao nhất", "Highest state-power body"),
    summary: t("Cơ quan đại biểu cao nhất của Nhân dân, thực hiện quyền lập hiến, lập pháp, quyết định các vấn đề quan trọng và giám sát tối cao.", "The highest representative body of the People, exercising constitutional and legislative powers, deciding major issues and conducting supreme oversight."),
    overview: [
      { title: t("Lập hiến và lập pháp", "Constitutional and legislative powers"), description: t("Thực hiện quyền lập hiến và quyền lập pháp.", "Exercises constitutional and legislative powers.") },
      { title: t("Quyết định", "National decisions"), description: t("Quyết định các vấn đề quan trọng của đất nước.", "Decides major national issues.") },
      { title: t("Giám sát tối cao", "Supreme oversight"), description: t("Giám sát tối cao đối với hoạt động của Nhà nước.", "Conducts supreme oversight of State activities.") },
    ],
    structureTitle: t("Cơ cấu Quốc hội", "National Assembly structure"),
    archive: leadershipArchives["national-assembly-chair"],
  },
  {
    id: "state-president",
    nodeId: "state-president",
    order: "02.2",
    slug: { vi: "chu-tich-nuoc", en: "state-president" },
    title: t("Chủ tịch nước", "State President"),
    eyebrow: t("Người đứng đầu Nhà nước", "Head of State"),
    summary: t("Thay mặt nước CHXHCN Việt Nam về đối nội và đối ngoại; đây vừa là thiết chế hiến định vừa là chức danh cá nhân.", "Represents the Socialist Republic of Vietnam internally and externally; both a constitutional institution and an individual office."),
    overview: [
      { title: t("Đại diện Nhà nước", "State representation"), description: t("Thay mặt Nhà nước về đối nội và đối ngoại.", "Represents the State internally and externally.") },
      { title: t("Nhiệm vụ hiến định", "Constitutional duties"), description: t("Công bố luật, thực hiện nhiệm vụ nhân sự và đối ngoại theo Hiến pháp.", "Promulgates laws and performs personnel and foreign-affairs duties under the Constitution.") },
      { title: t("Quốc phòng và an ninh", "Defence and security"), description: t("Thống lĩnh lực lượng vũ trang nhân dân và giữ chức Chủ tịch Hội đồng Quốc phòng và An ninh.", "Serves as commander-in-chief and chairs the National Defence and Security Council.") },
    ],
    structureTitle: t("Thiết chế và bộ máy hỗ trợ", "Institution and supporting apparatus"),
    archive: leadershipArchives["state-president"],
  },
  {
    id: "government",
    nodeId: "government",
    order: "02.3",
    slug: { vi: "chinh-phu", en: "government" },
    title: t("Chính phủ", "Government"),
    eyebrow: t("Cơ quan hành chính nhà nước cao nhất", "Highest state administrative body"),
    summary: t("Thực hiện quyền hành pháp, tổ chức thi hành Hiến pháp và pháp luật, thống nhất quản lý nền hành chính quốc gia.", "Exercises executive power, implements the Constitution and laws, and provides unified management of the national administration."),
    overview: [
      { title: t("Thi hành pháp luật", "Law implementation"), description: t("Tổ chức thi hành Hiến pháp và pháp luật.", "Organizes implementation of the Constitution and laws.") },
      { title: t("Xây dựng chính sách", "Policy development"), description: t("Xây dựng và tổ chức thực hiện chính sách quốc gia.", "Develops and implements national policy.") },
      { title: t("Quản lý hành chính", "Administrative management"), description: t("Thống nhất quản lý nền hành chính, các ngành và lĩnh vực.", "Provides unified management of administration, sectors and fields.") },
    ],
    structureTitle: t("Cơ cấu Chính phủ", "Government structure"),
    archive: leadershipArchives["prime-minister"],
  },
];

export const institutionPageByNodeId = new Map(institutionPages.map((page) => [page.nodeId, page]));

export function institutionPath(page: InstitutionPage, locale: Locale) {
  const stateSlug = locale === "vi" ? "nha-nuoc-chxhcn-viet-nam" : "state-of-vietnam";
  return `/${locale}/${stateSlug}/${page.slug[locale]}`;
}

export function findInstitutionBySlug(slug: string, locale: Locale) {
  return institutionPages.find((page) => page.slug[locale] === slug);
}
