import Link from "next/link";
import Image from "next/image";
import type { Locale, LocalizedText } from "@/types/common";
import { localize } from "@/lib/i18n";
import {
  politicalSystemPortals,
  portalPath,
  type PortalId,
} from "@/data/political-system-portals";
import { PortalEmblem } from "@/components/ui/PortalEmblem";

const copy: Record<string, LocalizedText> = {
  eyebrow: { vi: "Nền tảng học và khám phá", en: "A learning and exploration platform" },
  title: { vi: "Hệ thống chính trị Việt Nam", en: "Vietnam's political system" },
  lead: {
    vi: "Khám phá vai trò, cơ cấu tổ chức và mối quan hệ giữa các thành phần trong hệ thống chính trị Việt Nam theo cách trực quan, dễ tiếp cận.",
    en: "Explore the roles, structures and relationships among components of Vietnam's political system in a clear, accessible way.",
  },
  primaryCta: { vi: "Bắt đầu khám phá", en: "Start exploring" },
  secondaryCta: { vi: "Xem sơ đồ tổng thể", en: "View the overview map" },
  heroNote: { vi: "Không cần đọc theo thứ tự. Chọn câu hỏi hoặc thành phần bạn quan tâm.", en: "No fixed reading order. Start with a question or component that interests you." },
  portalEyebrow: { vi: "Bốn bộ phận trong hệ thống", en: "Four components of the system" },
  portalTitle: { vi: "Bắt đầu từ đúng phạm vi", en: "Start with the right scope" },
  portalLead: { vi: "Mỗi bộ phận có vai trò pháp lý và chức năng khác nhau. Nhãn vai trò giúp tránh hiểu bốn thành phần là hoàn toàn ngang nhau.", en: "Each portal has a different legal position and function. Role labels prevent them from appearing fully equivalent." },
  openPortal: { vi: "Khám phá thành phần", en: "Explore component" },
  faqEyebrow: { vi: "Khám phá theo câu hỏi", en: "Explore by question" },
  faqTitle: { vi: "Có thể bạn đang muốn biết", en: "You may be wondering" },
};

const questions = [
  {
    vi: "Ai lãnh đạo Nhà nước và xã hội?",
    en: "Who leads the State and society?",
    href: { vi: "/vi/dang-cong-san-viet-nam?tab=tong-quan", en: "/en/communist-party-of-vietnam?tab=tong-quan" },
  },
  {
    vi: "Đảng được tổ chức như thế nào?",
    en: "How is the Party organized?",
    href: { vi: "/vi/dang-cong-san-viet-nam?tab=co-cau", en: "/en/communist-party-of-vietnam?tab=co-cau" },
  },
  {
    vi: "Quốc hội và Chính phủ khác nhau thế nào?",
    en: "How do the National Assembly and Government differ?",
    href: { vi: "/vi/nha-nuoc-chxhcn-viet-nam?tab=co-cau#node-national-assembly", en: "/en/state-of-vietnam?tab=co-cau#node-national-assembly" },
  },
  {
    vi: "Công an và Quân đội nằm ở đâu?",
    en: "Where do Public Security and the Army fit?",
    href: { vi: "/vi/luc-luong-vu-trang-nhan-dan?tab=co-cau", en: "/en/people-armed-forces?tab=co-cau" },
  },
];

const homepagePortalContent: Record<PortalId, {
  role: LocalizedText;
  description: LocalizedText;
  relationship?: LocalizedText;
}> = {
  party: {
    role: { vi: "Lực lượng lãnh đạo Nhà nước và xã hội.", en: "The force leading the State and society." },
    description: {
      vi: "Tìm hiểu vai trò lãnh đạo của Đảng đối với Nhà nước, Mặt trận Tổ quốc, lực lượng vũ trang và toàn bộ hệ thống chính trị.",
      en: "Explore the Party's leadership of the State, the Fatherland Front, the armed forces and the political system as a whole.",
    },
  },
  state: {
    role: { vi: "Tổ chức và thực hiện quyền lực nhà nước.", en: "Organizes and exercises state power." },
    description: {
      vi: "Tìm hiểu Quốc hội, Chủ tịch nước, Chính phủ, Tòa án, Viện kiểm sát, Kiểm toán nhà nước và chính quyền địa phương.",
      en: "Explore the National Assembly, State President, Government, courts, procuracies, State Audit and local government.",
    },
    relationship: {
      vi: "Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
      en: "Placed under the leadership of the Communist Party of Vietnam.",
    },
  },
  front: {
    role: { vi: "Tập hợp, đại diện, giám sát và phản biện xã hội.", en: "Unites, represents, supervises and provides social criticism." },
    description: {
      vi: "Tìm hiểu vai trò của Mặt trận Tổ quốc và các tổ chức chính trị – xã hội trong việc tập hợp Nhân dân, xây dựng khối đại đoàn kết và tham gia xây dựng Đảng, Nhà nước.",
      en: "Explore how the Fatherland Front and socio-political organizations unite the People, build national solidarity and participate in building the Party and State.",
    },
    relationship: {
      vi: "Là thành phần của hệ thống chính trị, hoạt động dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
      en: "A component of the political system operating under the leadership of the Communist Party of Vietnam.",
    },
  },
  "armed-forces": {
    role: {
      vi: "Bảo vệ Tổ quốc, an ninh quốc gia và trật tự, an toàn xã hội.",
      en: "Protects the country, national security, public order and safety.",
    },
    description: {
      vi: "Tìm hiểu Quân đội nhân dân, Công an nhân dân, Dân quân tự vệ và cơ chế lãnh đạo, thống lĩnh, quản lý, chỉ huy.",
      en: "Explore the People's Army, People's Public Security, Militia and Self-Defence Force, and the mechanisms of leadership, command-in-chief, management and command.",
    },
    relationship: {
      vi: "Đặt dưới sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng Cộng sản Việt Nam.",
      en: "Placed under the absolute and direct leadership of the Communist Party of Vietnam in every aspect.",
    },
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const mainPortals = politicalSystemPortals.slice(0, 3);
  const armedForcesPortal = politicalSystemPortals[3];

  return (
    <>
      <section className="civic-hero">
        <div className="shell civic-hero__grid">
          <div className="civic-hero__copy">
            <p className="section-label">{localize(copy.eyebrow, locale)}</p>
            <h1>{localize(copy.title, locale)}</h1>
            <p className="civic-hero__lead">{localize(copy.lead, locale)}</p>
            <div className="button-row">
              <a className="button button--primary" href="#kham-pha">{localize(copy.primaryCta, locale)} <span aria-hidden="true">↓</span></a>
              <a className="button button--secondary" href="#so-do-tong-the">{localize(copy.secondaryCta, locale)} <span aria-hidden="true">→</span></a>
            </div>
            <p className="civic-hero__note"><span aria-hidden="true">i</span>{localize(copy.heroNote, locale)}</p>
          </div>

          <figure className="civic-hero__visual">
            <Image
              alt={locale === "vi" ? "Không gian hội trường với Quốc kỳ Việt Nam" : "Assembly hall with the flag of Vietnam"}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              src="/images/home-hero-congress-crisp-v2.png"
              unoptimized
            />
            <figcaption>
              <span>01—04</span>
              {locale === "vi" ? "Một bản đồ trực quan để bắt đầu từ đúng thành phần." : "A visual guide for starting with the right component."}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="portal-section" id="kham-pha">
        <div className="shell">
          <div className="portal-overview-stage">
          <header className="section-intro">
            <div><p className="section-label">{localize(copy.portalEyebrow, locale)}</p><h2>{localize(copy.portalTitle, locale)}</h2></div>
            <p>{localize(copy.portalLead, locale)}</p>
          </header>

          <div className="portal-card-grid">
            {mainPortals.map((portal) => {
              const portalContent = homepagePortalContent[portal.id];
              return (
                <Link className={`portal-card portal-card--${portal.id}`} href={portalPath(portal, locale)} key={portal.id}>
                  <div className="portal-card__top">
                    <span>{portal.order}</span>
                    <PortalEmblem className="portal-card__emblem" portal={portal} sizes="96px" />
                  </div>
                  <h3>{localize(portal.name, locale)}</h3>
                  <p className="portal-card__role-line"><strong>{locale === "vi" ? "Vai trò:" : "Role:"}</strong> {localize(portalContent.role, locale)}</p>
                  <p className="portal-card__description">{localize(portalContent.description, locale)}</p>
                  {portalContent.relationship ? (
                    <p className="portal-card__relationship"><strong>{locale === "vi" ? "Quan hệ chính:" : "Main relationship:"}</strong> {localize(portalContent.relationship, locale)}</p>
                  ) : null}
                  <strong>{localize(copy.openPortal, locale)} <span aria-hidden="true">→</span></strong>
                </Link>
              );
            })}
          </div>

          <Link className="armed-portal" href={portalPath(armedForcesPortal, locale)}>
            <div className="armed-portal__number">
              <span>04</span>
              <PortalEmblem className="armed-portal__emblem" portal={armedForcesPortal} sizes="92px" />
            </div>
            <div className="armed-portal__copy">
              <h3>{localize(armedForcesPortal.name, locale)}</h3>
              <p className="portal-card__role-line"><strong>{locale === "vi" ? "Vai trò:" : "Role:"}</strong> {localize(homepagePortalContent["armed-forces"].role, locale)}</p>
              <p className="portal-card__description">{localize(homepagePortalContent["armed-forces"].description, locale)}</p>
              <p className="portal-card__relationship"><strong>{locale === "vi" ? "Quan hệ chính:" : "Main relationship:"}</strong> {localize(homepagePortalContent["armed-forces"].relationship!, locale)}</p>
            </div>
            <strong>{localize(copy.openPortal, locale)} <span aria-hidden="true">→</span></strong>
          </Link>
          </div>

          <section className="home-leadership-map" id="so-do-tong-the" aria-labelledby="home-leadership-title">
            <header className="section-intro">
              <div>
                <p className="section-label">{locale === "vi" ? "Quan hệ lãnh đạo" : "Leadership relationships"}</p>
                <h2 id="home-leadership-title">{locale === "vi" ? "Đảng lãnh đạo hệ thống chính trị như thế nào?" : "How does the Party lead the political system?"}</h2>
              </div>
              <p>{locale === "vi" ? "Bốn card phía trên là cổng điều hướng. Sơ đồ này thể hiện quan hệ bao trùm và nhãn cụ thể trên từng đường nối." : "The four cards above are navigation portals. This map shows the overarching relationships and labels every connection."}</p>
            </header>

            <div className="political-system-diagram">
              <div className="political-system-diagram__spine">
                <div className="political-system-diagram__node political-system-diagram__node--people">
                  <span>00</span><strong>{locale === "vi" ? "Nhân dân" : "The People"}</strong>
                </div>
                <div className="political-system-diagram__vertical-edge"><span>{locale === "vi" ? "Chủ thể trung tâm" : "Central subject"}</span></div>
                <div className="political-system-diagram__node political-system-diagram__node--system">
                  <span>HT</span><strong>{locale === "vi" ? "Hệ thống chính trị Việt Nam" : "Vietnam's political system"}</strong>
                </div>
                <div className="political-system-diagram__vertical-edge"><span>{locale === "vi" ? "Lực lượng lãnh đạo" : "Leading force"}</span></div>
                <div className="political-system-diagram__node political-system-diagram__node--party">
                  <span>01</span><strong>{locale === "vi" ? "Đảng Cộng sản Việt Nam" : "Communist Party of Vietnam"}</strong><small>{locale === "vi" ? "Lãnh đạo toàn diện" : "Provides comprehensive leadership"}</small>
                </div>
              </div>

              <div className="political-system-diagram__branches">
                <div className="political-system-diagram__branch">
                  <div className="political-system-diagram__branch-edge"><span>{locale === "vi" ? "Lãnh đạo" : "Leads"}</span></div>
                  <div className="political-system-diagram__node political-system-diagram__node--state"><span>02</span><strong>{locale === "vi" ? "Nhà nước CHXHCN Việt Nam" : "State of the Socialist Republic of Vietnam"}</strong></div>
                </div>
                <div className="political-system-diagram__branch">
                  <div className="political-system-diagram__branch-edge"><span>{locale === "vi" ? "Lãnh đạo" : "Leads"}</span></div>
                  <div className="political-system-diagram__node political-system-diagram__node--front"><span>03</span><strong>{locale === "vi" ? "Mặt trận Tổ quốc Việt Nam" : "Vietnam Fatherland Front"}</strong></div>
                </div>
                <div className="political-system-diagram__branch political-system-diagram__branch--armed">
                  <div className="political-system-diagram__branch-edge"><span>{locale === "vi" ? "Lãnh đạo tuyệt đối, trực tiếp về mọi mặt." : "Absolute and direct leadership in every aspect."}</span></div>
                  <div className="political-system-diagram__node political-system-diagram__node--armed"><span>04</span><strong>{locale === "vi" ? "Lực lượng vũ trang nhân dân" : "People's Armed Forces"}</strong></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="question-section section-space">
        <div className="shell question-section__grid">
          <header><p className="section-label">{localize(copy.faqEyebrow, locale)}</p><h2>{localize(copy.faqTitle, locale)}</h2><span></span></header>
          <ol>
            {questions.map((question, index) => {
              return (
                <li key={question.vi}>
                  <Link href={question.href[locale]}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{locale === "vi" ? question.vi : question.en}</strong>
                    <i aria-hidden="true">→</i>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

    </>
  );
}
