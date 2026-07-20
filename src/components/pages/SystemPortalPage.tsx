import Image from "next/image";
import Link from "next/link";
import type { Locale, LocalizedText } from "@/types/common";
import { localize } from "@/lib/i18n";
import {
  politicalSystemNodes,
  politicalSystemPortals,
  portalPath,
  type PortalId,
  type PoliticalSystemPortal,
} from "@/data/political-system-portals";
import { institutionPages, institutionPath, leadershipArchives } from "@/data/institution-pages";
import { DetailTabs, type DetailTab } from "@/components/layout/DetailTabs";
import { SystemTreeExplorer } from "@/components/explorer/SystemTreeExplorer";
import { PortalEmblem } from "@/components/ui/PortalEmblem";
import { LeadershipArchiveSection } from "@/components/leadership/LeadershipArchiveSection";

export type ForceSubjectId = "army" | "public-security";
type PageSubjectId = PortalId | ForceSubjectId;
type OverviewCard = { viTitle: string; enTitle: string; vi: string; en: string };
type RelationshipItem = { source: LocalizedText; label: LocalizedText; target: LocalizedText; description: LocalizedText };

const t = (vi: string, en: string): LocalizedText => ({ vi, en });

type PortalThemeImage = {
  src: string;
  fit?: "cover" | "contain";
  credit?: LocalizedText;
  sourceHref?: string;
};

const portalThemeImages: Partial<Record<PageSubjectId, PortalThemeImage>> = {
  party: {
    src: "/images/themes/party-central-office-a6-sharp-v2.png",
    credit: t("Ảnh công trình A6: CDC JSC", "A6 building image: CDC JSC"),
    sourceHref: "https://cdcjsc.vn/vi/dich-vu-tu-van-va-giam-sat.pd/nha-lam-viec-van-phong-trung-uong-dang-cong-trinh-a6.html",
  },
  state: {
    src: "/images/themes/state-history-sharp-v2.png",
  },
  front: {
    src: "/images/themes/front-mttq-sharp.png",
  },
  "armed-forces": {
    src: "/images/themes/government-building-sharp.png",
  },
  army: {
    src: "/images/themes/ministry-national-defence.png",
    fit: "contain",
  },
  "public-security": {
    src: "/images/themes/ministry-public-security.png",
    fit: "contain",
  },
};

const overviewCards: Record<PageSubjectId, OverviewCard[]> = {
  party: [
    { viTitle: "Đảng là gì?", enTitle: "What is the Party?", vi: "Một tổ chức chính trị hoạt động theo Cương lĩnh, Điều lệ, Hiến pháp và pháp luật.", en: "A political organization operating under its Platform, Charter, the Constitution and law." },
    { viTitle: "Vai trò trong hệ thống chính trị", enTitle: "Role in the political system", vi: "Lực lượng lãnh đạo Nhà nước và xã hội theo Hiến pháp.", en: "The force leading the State and society under the Constitution." },
    { viTitle: "Nguyên tắc tổ chức", enTitle: "Organizing principles", vi: "Được tổ chức từ Trung ương đến địa phương và cơ sở theo Điều lệ Đảng.", en: "Organized from central to local and grassroots levels under the Party Charter." },
    { viTitle: "Điều dễ nhầm lẫn", enTitle: "Common misconception", vi: "Đảng lãnh đạo nhưng không đồng nhất với Nhà nước, Mặt trận hay Nhân dân.", en: "The Party leads but is not identical to the State, the Front or the People." },
  ],
  state: [
    { viTitle: "Nhà nước là gì?", enTitle: "What is the State?", vi: "Nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân và vì Nhân dân.", en: "A socialist rule-of-law State of the People, by the People and for the People." },
    { viTitle: "Quyền lực thuộc về ai?", enTitle: "Who holds state power?", vi: "Tất cả quyền lực nhà nước thuộc về Nhân dân.", en: "All state power belongs to the People." },
    { viTitle: "Quyền lực được tổ chức ra sao?", enTitle: "How is power organized?", vi: "Quyền lực thống nhất, có phân công, phối hợp và kiểm soát.", en: "Power is unified, with assignment, coordination and control." },
    { viTitle: "Điều dễ nhầm lẫn", enTitle: "Common misconception", vi: "Mỗi cơ quan có vị trí, nhiệm vụ và cơ chế trách nhiệm riêng theo Hiến pháp và luật.", en: "Each body has its own position, duties and accountability under the Constitution and law." },
  ],
  front: [
    { viTitle: "Đây là gì?", enTitle: "What is it?", vi: "Tổ chức liên minh chính trị và liên hiệp tự nguyện.", en: "A political alliance and voluntary union." },
    { viTitle: "Vị trí trong hệ thống", enTitle: "Position in the system", vi: "Một bộ phận của hệ thống chính trị, không phải cơ quan nhà nước.", en: "A component of the political system, not a state body." },
    { viTitle: "Vai trò chính", enTitle: "Main roles", vi: "Tập hợp khối đại đoàn kết; đại diện Nhân dân; giám sát và phản biện xã hội.", en: "Builds national unity, represents the People, and conducts social supervision and criticism." },
    { viTitle: "Quan hệ với tổ chức xung quanh", enTitle: "Relations with surrounding organizations", vi: "Từng quan hệ lãnh đạo, phối hợp, đại diện, giám sát và phản biện được ghi bằng nhãn riêng.", en: "Leadership, coordination, representation, supervision and criticism are each explicitly labeled." },
    { viTitle: "Điều dễ nhầm lẫn", enTitle: "Common misconception", vi: "Các tổ chức chính trị – xã hội là tổ chức thành viên, không phải ban chuyên môn.", en: "Socio-political organizations are member organizations, not specialist departments." },
  ],
  "armed-forces": [
    { viTitle: "Đây là gì?", enTitle: "What is it?", vi: "Lực lượng vũ trang nhân dân gồm Quân đội nhân dân, Công an nhân dân và Dân quân tự vệ.", en: "The People's Armed Forces comprise the People's Army, People's Public Security and Militia and Self-Defence Force." },
    { viTitle: "Vị trí trong hệ thống", enTitle: "Position in the system", vi: "Lực lượng nòng cốt bảo vệ Tổ quốc, an ninh quốc gia và trật tự, an toàn xã hội.", en: "Core forces protecting the country, national security and public order." },
    { viTitle: "Vai trò chính", enTitle: "Main roles", vi: "Thực hiện nhiệm vụ quốc phòng và an ninh theo Hiến pháp và pháp luật.", en: "Performs defence and security duties under the Constitution and law." },
    { viTitle: "Quan hệ với tổ chức xung quanh", enTitle: "Relations with surrounding organizations", vi: "Tách rõ lãnh đạo, thống lĩnh, quản lý nhà nước, tổ chức và chỉ huy.", en: "Clearly separates leadership, command-in-chief, state management, organization and command." },
    { viTitle: "Điều dễ nhầm lẫn", enTitle: "Common misconception", vi: "Quân đội và Công an là lực lượng; Bộ Quốc phòng và Bộ Công an là cơ quan thuộc Chính phủ.", en: "The Army and Public Security are forces; their ministries are Government bodies." },
  ],
  army: [
    { viTitle: "Đây là gì?", enTitle: "What is it?", vi: "Quân đội nhân dân là lực lượng vũ trang, nòng cốt trong thực hiện nhiệm vụ quốc phòng.", en: "The People's Army is an armed force and a core component in national defence." },
    { viTitle: "Vị trí trong hệ thống", enTitle: "Position in the system", vi: "Một thành phần của lực lượng vũ trang nhân dân.", en: "A component of the People's Armed Forces." },
    { viTitle: "Vai trò chính", enTitle: "Main roles", vi: "Bảo vệ Tổ quốc và thực hiện nhiệm vụ quốc phòng theo pháp luật.", en: "Protects the country and performs national-defence duties under law." },
    { viTitle: "Quan hệ với tổ chức xung quanh", enTitle: "Relations with surrounding organizations", vi: "Bộ Quốc phòng thực hiện quản lý nhà nước và tổ chức chỉ huy theo pháp luật.", en: "The Ministry of National Defence performs state management and organizes command under law." },
    { viTitle: "Điều dễ nhầm lẫn", enTitle: "Common misconception", vi: "Bộ Quốc phòng là cơ quan thuộc Chính phủ; Quân đội nhân dân là lực lượng vũ trang.", en: "The Ministry is a Government body; the People's Army is an armed force." },
  ],
  "public-security": [
    { viTitle: "Đây là gì?", enTitle: "What is it?", vi: "Công an nhân dân là lực lượng vũ trang nòng cốt bảo vệ an ninh quốc gia, trật tự và an toàn xã hội.", en: "The People's Public Security is a core armed force protecting national security and public order." },
    { viTitle: "Vị trí trong hệ thống", enTitle: "Position in the system", vi: "Một thành phần của lực lượng vũ trang nhân dân.", en: "A component of the People's Armed Forces." },
    { viTitle: "Vai trò chính", enTitle: "Main roles", vi: "Bảo vệ an ninh quốc gia, bảo đảm trật tự, an toàn xã hội và phòng, chống tội phạm.", en: "Protects national security, ensures public order and safety, and combats crime." },
    { viTitle: "Quan hệ với tổ chức xung quanh", enTitle: "Relations with surrounding organizations", vi: "Bộ Công an thực hiện quản lý nhà nước, tổ chức và chỉ huy theo pháp luật.", en: "The Ministry of Public Security performs state management, organization and command under law." },
    { viTitle: "Điều dễ nhầm lẫn", enTitle: "Common misconception", vi: "Bộ Công an là cơ quan thuộc Chính phủ; Công an nhân dân là lực lượng vũ trang.", en: "The Ministry is a Government body; the People's Public Security is an armed force." },
  ],
};

const forceSubjects: Record<ForceSubjectId, {
  archiveId: string;
  introduction: LocalizedText;
  name: LocalizedText;
  order: string;
  parentOverrides?: Record<string, string | undefined>;
  roleLabel: LocalizedText;
  rootNodeId: string;
  routeSlug: Record<Locale, string>;
  structureLabel: LocalizedText;
  summary: LocalizedText;
  timelineLabel: LocalizedText;
  treeNodeIds: string[];
}> = {
  army: {
    archiveId: "minister-national-defence",
    introduction: t("Trang này phân biệt Quân đội nhân dân, Bộ Quốc phòng và chức danh Bộ trưởng Bộ Quốc phòng.", "This page distinguishes the People's Army, the Ministry of National Defence and the office of Minister of National Defence."),
    name: t("Quân đội nhân dân", "People's Army"),
    order: "04.1",
    roleLabel: t("Lực lượng vũ trang", "Armed force"),
    rootNodeId: "peoples-army",
    routeSlug: { vi: "quan-doi-nhan-dan", en: "peoples-army" },
    structureLabel: t("Cơ cấu lực lượng", "Force structure"),
    summary: t("Tìm hiểu vị trí của Quân đội nhân dân và quan hệ với cơ quan quản lý nhà nước về quốc phòng.", "Explore the People's Army and its relationship with the state body responsible for national defence."),
    timelineLabel: t("Bộ trưởng Bộ Quốc phòng qua các thời kỳ", "Ministers of National Defence through history"),
    treeNodeIds: ["peoples-army", "ministry-national-defence", "minister-national-defence"],
  },
  "public-security": {
    archiveId: "minister-public-security",
    introduction: t("Trang này phân biệt Công an nhân dân, Bộ Công an, các lực lượng chuyên môn và chức danh Bộ trưởng Bộ Công an.", "This page distinguishes the People's Public Security, the Ministry, specialized forces and the office of Minister of Public Security."),
    name: t("Công an nhân dân", "People's Public Security"),
    order: "04.2",
    parentOverrides: { "ministry-public-security": "public-security-forces" },
    roleLabel: t("Lực lượng vũ trang", "Armed force"),
    rootNodeId: "public-security-forces",
    routeSlug: { vi: "cong-an-nhan-dan", en: "peoples-public-security" },
    structureLabel: t("Cơ cấu tổ chức", "Organization structure"),
    summary: t("Tìm hiểu cơ cấu Công an nhân dân và phân biệt lực lượng với cơ quan quản lý nhà nước.", "Explore the People's Public Security structure and distinguish the force from its state-management body."),
    timelineLabel: t("Bộ trưởng Bộ Công an qua các thời kỳ", "Ministers of Public Security through history"),
    treeNodeIds: [
      "public-security-forces",
      "ministry-public-security",
      "minister-public-security",
      "public-security-specialized-forces",
      "people-security-force",
      "people-police-force",
      "public-security-provincial",
      "public-security-commune",
    ],
  },
};

const partyTreeNodeIds = [
  "party",
  "national-party-congress",
  "central-committee",
  "politburo",
  "secretariat",
  "central-inspection-commission",
  "general-secretary",
  "party-central-advisory-bodies",
  "party-direct-affiliates",
  "party-local-organizations",
];

const armedForcesTreeNodeIds = [
  "armed-forces",
  "peoples-army",
  "public-security-forces",
  "militia-self-defence",
];

function relationshipsFor(subjectId: PageSubjectId): RelationshipItem[] {
  if (subjectId === "party") return [
    { source: t("Đảng", "The Party"), label: t("Lãnh đạo", "Leads"), target: t("Nhà nước và xã hội", "The State and society"), description: t("Quan hệ lãnh đạo không làm các chủ thể trở thành một tổ chức duy nhất.", "Leadership does not make the subjects a single organization.") },
  ];
  if (subjectId === "front") return [
    { source: t("Đảng", "The Party"), label: t("Lãnh đạo", "Leadership"), target: t("Mặt trận Tổ quốc Việt Nam", "Vietnam Fatherland Front"), description: t("Mặt trận là một bộ phận của hệ thống chính trị do Đảng lãnh đạo.", "The Front is part of the political system under Party leadership.") },
    { source: t("Mặt trận Tổ quốc Việt Nam", "Vietnam Fatherland Front"), label: t("Đại diện", "Representation"), target: t("Nhân dân", "The People"), description: t("Đại diện, bảo vệ quyền và lợi ích hợp pháp, chính đáng của Nhân dân.", "Represents and protects the lawful and legitimate rights and interests of the People.") },
    { source: t("Mặt trận Tổ quốc Việt Nam", "Vietnam Fatherland Front"), label: t("Giám sát", "Supervision"), target: t("Hoạt động công quyền", "Public authorities"), description: t("Thực hiện giám sát xã hội theo quy định.", "Conducts social supervision under applicable provisions.") },
    { source: t("Mặt trận Tổ quốc Việt Nam", "Vietnam Fatherland Front"), label: t("Phản biện", "Social criticism"), target: t("Chính sách, pháp luật", "Policy and law"), description: t("Thực hiện phản biện xã hội theo quy định.", "Conducts social criticism under applicable provisions.") },
  ];
  if (subjectId === "armed-forces") return [
    { source: t("Đảng", "The Party"), label: t("Lãnh đạo tuyệt đối, trực tiếp về mọi mặt", "Absolute and direct leadership in every aspect"), target: t("Lực lượng vũ trang nhân dân", "People's Armed Forces"), description: t("Quan hệ lãnh đạo được ghi rõ, không thể hiện bằng mũi tên không nhãn.", "The leadership relationship is explicitly labeled.") },
    { source: t("Chủ tịch nước", "State President"), label: t("Thống lĩnh", "Commander-in-chief"), target: t("Lực lượng vũ trang nhân dân", "People's Armed Forces"), description: t("Chủ tịch nước thống lĩnh lực lượng vũ trang nhân dân.", "The State President is commander-in-chief of the People's Armed Forces.") },
    { source: t("Chính phủ", "Government"), label: t("Quản lý nhà nước", "State management"), target: t("Lực lượng vũ trang nhân dân", "People's Armed Forces"), description: t("Chính phủ thực hiện quản lý nhà nước theo Hiến pháp và pháp luật.", "The Government performs state management under the Constitution and law.") },
  ];
  if (subjectId === "army") return [
    { source: t("Bộ Quốc phòng", "Ministry of National Defence"), label: t("Quản lý nhà nước", "State management"), target: t("Lĩnh vực quốc phòng", "National defence"), description: t("Bộ Quốc phòng là cơ quan thuộc Chính phủ thực hiện quản lý nhà nước về quốc phòng.", "The Ministry is a Government body performing state management of national defence.") },
    { source: t("Bộ Quốc phòng", "Ministry of National Defence"), label: t("Tổ chức và chỉ huy", "Organization and command"), target: t("Quân đội nhân dân", "People's Army"), description: t("Quan hệ tổ chức và chỉ huy được trình bày tách khỏi khái niệm lực lượng.", "Organization and command are shown separately from the concept of the force.") },
  ];
  if (subjectId === "public-security") return [
    { source: t("Bộ Công an", "Ministry of Public Security"), label: t("Quản lý nhà nước", "State management"), target: t("An ninh, trật tự", "Security and public order"), description: t("Bộ Công an là cơ quan thuộc Chính phủ thực hiện quản lý nhà nước về an ninh, trật tự.", "The Ministry is a Government body performing state management of security and public order.") },
    { source: t("Bộ Công an", "Ministry of Public Security"), label: t("Tổ chức và chỉ huy", "Organization and command"), target: t("Công an nhân dân", "People's Public Security"), description: t("Quan hệ tổ chức và chỉ huy được trình bày tách khỏi khái niệm lực lượng.", "Organization and command are shown separately from the concept of the force.") },
  ];
  return [];
}

function RelationshipDiagram({ locale, subjectId }: { locale: Locale; subjectId: PageSubjectId }) {
  const items = relationshipsFor(subjectId);
  if (!items.length) return null;

  return (
    <section className="relationship-diagram" aria-labelledby={`relationship-${subjectId}`}>
      <header>
        <p className="section-label">{locale === "vi" ? "Quan hệ giữa các bộ phận" : "Relationships between components"}</p>
        <h2 id={`relationship-${subjectId}`}>{locale === "vi" ? "Vai trò giữa các bộ phận" : "Roles of the various departments?"}</h2>
        <p>{locale === "vi" ? "Bên thực hiện ở trên, loại quan hệ ở giữa và bên liên quan ở dưới." : "The acting party is shown above, the relationship in the middle, and the related party below."}</p>
      </header>
      <div className="relationship-diagram__list">
        {items.map((item) => (
          <article key={`${item.source.vi}-${item.label.vi}-${item.target.vi}`}>
            <strong className="relationship-diagram__entity">{localize(item.source, locale)}</strong>
            <div className="relationship-diagram__connector">
              <i aria-hidden="true" />
              <span>{localize(item.label, locale)}</span>
              <i aria-hidden="true" />
            </div>
            <strong className="relationship-diagram__entity relationship-diagram__entity--target">{localize(item.target, locale)}</strong>
            <p>{localize(item.description, locale)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PortalOverview({
  introduction,
  locale,
  subjectId,
  summary,
}: {
  introduction: LocalizedText;
  locale: Locale;
  subjectId: PageSubjectId;
  summary: LocalizedText;
}) {
  const cards = overviewCards[subjectId];

  return (
    <>
      <section className="portal-intro" id="tong-quan">
        <div>
          <p className="section-label">{locale === "vi" ? "Tổng quan" : "Overview"}</p>
          <h2>{locale === "vi" ? "Nội dung tổng quát" : "General Overview"}</h2>
        </div>
        <p>{localize(summary, locale)} {localize(introduction, locale)}</p>
      </section>

      <section className="portal-overview-grid" aria-label={locale === "vi" ? "Các điểm tổng quan" : "Overview points"}>
        {cards.map((card, index) => (
          <article key={card.viTitle}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{locale === "vi" ? card.viTitle : card.enTitle}</h3>
            <p>{locale === "vi" ? card.vi : card.en}</p>
          </article>
        ))}
      </section>

      <RelationshipDiagram locale={locale} subjectId={subjectId} />

      {subjectId === "state" ? (
        <section className="state-institution-gateway">
          <header>
            <p className="section-label">{locale === "vi" ? "Ba thiết chế trung tâm" : "Three central institutions"}</p>
          </header>
          <div>
            {institutionPages.map((page) => (
              <Link href={institutionPath(page, locale)} key={page.id}>
                <span>{page.order}</span><strong>{localize(page.title, locale)}</strong><p>{localize(page.summary, locale)}</p><small>{locale === "vi" ? "Khám phá thiết chế" : "Explore institution"} →</small>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

function PortalStructure({
  initialNodeId,
  locale,
  parentOverrides,
  portal,
  visibleNodeIds,
}: {
  initialNodeId: string;
  locale: Locale;
  parentOverrides?: Record<string, string | undefined>;
  portal: PoliticalSystemPortal;
  visibleNodeIds?: string[];
}) {
  return (
    <section id="co-cau" className="portal-explorer-section">
      <header className="portal-structure-heading">
        <p className="section-label">{locale === "vi" ? "Cơ cấu tổ chức và nội dung chi tiết" : "Organization structure and details"}</p>
        <h2>{locale === "vi" ? "Vai trò và quan hệ" : "Roles and relationships"}</h2>
        <p>{locale === "vi" ? "Chọn một mục trong cơ cấu để xem vai trò, chức năng và các mối quan hệ ở phần bên cạnh." : "Choose an item in the structure to view its role, functions, and relationships alongside it."}</p>
      </header>
      <SystemTreeExplorer
        initialNodeId={initialNodeId}
        locale={locale}
        nodes={politicalSystemNodes}
        parentOverrides={parentOverrides}
        portalId={portal.id}
        visibleNodeIds={visibleNodeIds}
      />
    </section>
  );
}

function ForceRelatedContent({ locale, portal, subjectId }: { locale: Locale; portal: PoliticalSystemPortal; subjectId: ForceSubjectId }) {
  return (
    <nav className="portal-next" aria-label={locale === "vi" ? "Nội dung liên quan" : "Related content"}>
      <p>{locale === "vi" ? "Nội dung liên quan" : "Related content"}</p>
      <div>
        <Link className="portal-next__item portal-next__item--armed-forces" href={portalPath(portal, locale)}>
          <span>04</span><strong>{localize(portal.name, locale)}</strong><small>{locale === "vi" ? "Xem tổng quan lực lượng" : "View the forces overview"}</small>
        </Link>
        {(Object.entries(forceSubjects) as Array<[ForceSubjectId, (typeof forceSubjects)[ForceSubjectId]]>)
          .filter(([id]) => id !== subjectId)
          .map(([id, subject]) => (
            <Link className="portal-next__item portal-next__item--armed-forces" href={`${portalPath(portal, locale)}/${subject.routeSlug[locale]}`} key={id}>
              <span>{subject.order}</span><strong>{localize(subject.name, locale)}</strong><small>{localize(subject.roleLabel, locale)}</small>
            </Link>
          ))}
      </div>
    </nav>
  );
}

export function SystemPortalPage({
  locale,
  portal,
  subjectId,
}: {
  locale: Locale;
  portal: PoliticalSystemPortal;
  subjectId?: ForceSubjectId;
}) {
  const subject = subjectId ? forceSubjects[subjectId] : null;
  const pageSubjectId: PageSubjectId = subjectId ?? portal.id;
  const name = subject?.name ?? portal.name;
  const roleLabel = subject?.roleLabel ?? portal.roleLabel;
  const summary = subject?.summary ?? portal.summary;
  const introduction = subject?.introduction ?? portal.introduction;
  const initialNodeId = subject?.rootNodeId ?? portal.rootNodeId;
  const themeImage = portalThemeImages[pageSubjectId];
  const visibleNodeIds = subject?.treeNodeIds
    ?? (portal.id === "party" ? partyTreeNodeIds : portal.id === "armed-forces" ? armedForcesTreeNodeIds : undefined);
  const overview = <PortalOverview introduction={introduction} locale={locale} subjectId={pageSubjectId} summary={summary} />;
  const structure = (
    <PortalStructure
      initialNodeId={initialNodeId}
      locale={locale}
      parentOverrides={subject?.parentOverrides}
      portal={portal}
      visibleNodeIds={visibleNodeIds}
    />
  );
  let tabs: DetailTab[];

  if (subject) {
    tabs = [
      { id: "tong-quan", label: locale === "vi" ? "Tổng quan" : "Overview", content: overview },
      { id: "co-cau", label: localize(subject.structureLabel, locale), content: structure },
      { id: "lanh-dao", label: localize(subject.timelineLabel, locale), content: <LeadershipArchiveSection archive={leadershipArchives[subject.archiveId]} locale={locale} /> },
    ];
  } else if (portal.id === "party") {
    tabs = [
      { id: "tong-quan", label: locale === "vi" ? "Tổng quan" : "Overview", content: overview },
      { id: "co-cau", label: locale === "vi" ? "Cơ cấu tổ chức" : "Organization structure", content: structure },
      { id: "tong-bi-thu", label: locale === "vi" ? "Tổng Bí thư qua các thời kỳ" : "General Secretaries through history", content: <LeadershipArchiveSection archive={leadershipArchives["general-secretary"]} locale={locale} /> },
    ];
  } else if (portal.id === "front") {
    tabs = [
      { id: "tong-quan", label: locale === "vi" ? "Tổng quan" : "Overview", content: overview },
      { id: "co-cau", label: locale === "vi" ? "Cơ cấu tổ chức" : "Organization structure", content: structure },
      { id: "lanh-dao", label: locale === "vi" ? "Chủ tịch qua các thời kỳ" : "Chairs through history", content: <LeadershipArchiveSection archive={leadershipArchives["front-central-committee-chair"]} locale={locale} /> },
    ];
  } else if (portal.id === "armed-forces") {
    tabs = [
      { id: "tong-quan", label: locale === "vi" ? "Tổng quan" : "Overview", content: overview },
      { id: "co-cau", label: locale === "vi" ? "Cơ cấu lực lượng" : "Force structure", content: structure },
      { id: "co-che", label: locale === "vi" ? "Cơ chế lãnh đạo, thống lĩnh, quản lý và chỉ huy" : "Leadership, command-in-chief, management and command", content: <RelationshipDiagram locale={locale} subjectId="armed-forces" /> },
    ];
  } else {
    tabs = [
      { id: "tong-quan", label: locale === "vi" ? "Tổng quan" : "Overview", content: overview },
      { id: "co-cau", label: locale === "vi" ? "Cơ cấu tổ chức" : "Organization structure", content: structure },
    ];
  }

  return (
    <article className={`portal-page portal-page--${portal.id} portal-page--subject-${pageSubjectId}${subject ? " portal-page--force-branch" : ""}`}>
      <div className="shell">
        <nav className="portal-breadcrumb" aria-label={locale === "vi" ? "Đường dẫn trang" : "Breadcrumb"}>
          <Link href={`/${locale}`}>{locale === "vi" ? "Trang chủ" : "Home"}</Link><span aria-hidden="true">/</span>
          {subject ? <><Link href={portalPath(portal, locale)}>{localize(portal.name, locale)}</Link><span aria-hidden="true">/</span></> : null}
          <span>{localize(name, locale)}</span>
        </nav>

        <header className={`portal-hero${themeImage ? " portal-hero--themed" : ""}`}>
          {themeImage ? (
            <Image
              alt=""
              className={`portal-hero__theme-image${themeImage.fit === "contain" ? " portal-hero__theme-image--contain" : ""}`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1200px"
              src={themeImage.src}
              unoptimized
            />
          ) : null}
          {themeImage ? <span aria-hidden="true" className="portal-hero__theme-veil" /> : null}
          <div className="portal-hero__content">
            <p className="portal-kicker"><span>{subject?.order ?? portal.order}</span>{localize(roleLabel, locale)}</p>
            <h1>{localize(name, locale)}</h1>
            <p>{localize(introduction, locale)}</p>
          </div>
          <div className="portal-hero__mark"><PortalEmblem className="portal-hero__emblem" portal={portal} sizes="(max-width: 700px) 84px, 170px" /></div>
          {themeImage?.credit && themeImage.sourceHref ? (
            <a className="portal-hero__theme-credit" href={themeImage.sourceHref} rel="noreferrer" target="_blank">
              {localize(themeImage.credit, locale)} ↗
            </a>
          ) : null}
        </header>

        <DetailTabs ariaLabel={locale === "vi" ? "Nội dung trang" : "Page sections"} defaultTab="tong-quan" tabs={tabs} />

        {subject && subjectId ? <ForceRelatedContent locale={locale} portal={portal} subjectId={subjectId} /> : (
          <nav className="portal-next" aria-label={locale === "vi" ? "Khám phá thành phần khác" : "Explore another component"}>
            <p>{locale === "vi" ? "Tiếp tục khám phá" : "Keep exploring"}</p>
            <div>
              {politicalSystemPortals.filter((item) => item.id !== portal.id).map((item) => (
                <Link className={`portal-next__item portal-next__item--${item.id}`} href={portalPath(item, locale)} key={item.id}><span>{item.order}</span><strong>{localize(item.name, locale)}</strong><small>{localize(item.roleLabel, locale)}</small></Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </article>
  );
}
