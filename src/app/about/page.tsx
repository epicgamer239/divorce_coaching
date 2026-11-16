import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import { assetPath } from "@/lib/assetPath";
import { katePinkBg } from "@/lib/katePinkBg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alecia Pazant, Certified Divorce Coach® — structured, steady, attorney-aligned divorce support providing virtual divorce coaching services to clients nationwide.",
};

export default function AboutPage() {
  return (
    <>
      {/* About hero */}
      <section
        className="relative flex min-h-[62svh] items-center overflow-x-hidden py-10 md:min-h-[68svh] md:py-12"
        style={katePinkBg}
      >
        <HeroPattern />
        <div className="relative mx-auto grid w-full max-w-[75rem] items-center gap-8 px-6 py-10 md:grid-cols-2 md:gap-12 md:px-[5rem] md:py-12 lg:gap-14">
          <div className="relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-[2rem] sm:max-w-[20rem] md:mx-0 md:max-w-[22rem] lg:max-w-[24rem]">
            <Image
              src={assetPath("/about-hero-v3.jpg")}
              alt="Calm shoreline at dusk"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 80vw, 384px"
            />
          </div>
          <div>
            <h1 className="font-display text-[2.1rem] font-normal leading-[1.2] tracking-normal text-plum md:text-[3.25rem]">
              About Insightful Divorce Coaching™
            </h1>
            <p className="mt-5 font-body text-[1.05rem] font-medium leading-[1.6] text-plum md:text-[1.15rem]">
              A Structured, Steady, Attorney-Aligned Approach to Divorce Support
            </p>
            <p className="mt-4 font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem] md:leading-[1.75]">
              Divorce is one of the most complex transitions a person can face.
              It demands clarity, emotional steadiness, and informed
              decision-making — especially when the stakes are high. Insightful
              Divorce Coaching™ provides the structured, trauma-informed support
              clients need to navigate the process with intention rather than
              reactivity.
            </p>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="grid md:grid-cols-2">
        <div className="bg-white px-6 py-14 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto max-w-xl md:ml-auto md:mr-0 md:max-w-lg lg:max-w-xl">
            <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
              My Role
            </h2>
            <p className="mt-2 font-display text-2xl font-normal text-plum md:text-3xl">
              Alecia Pazant
            </p>
            <p className="mt-3 font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
              Certified Divorce Coach® · Structured Decision Support ·
              Mediation &amp; Attorney Preparation
            </p>
            <div className="mt-6 space-y-4 font-body text-base font-light leading-relaxed text-ink md:text-lg">
              <p>
                I am a Certified Divorce Coach® who specializes in helping
                clients stay grounded, organized, and decision-ready throughout
                the divorce process. My work strengthens the entire professional
                team — especially attorneys — by reducing conflict, improving
                communication, and preparing clients to participate effectively
                in mediation and legal discussions.
              </p>
              <p>
                I do not provide legal advice, therapy, or mediation. Instead, I
                provide the structured preparation and emotional steadiness that
                make legal guidance easier to follow and legal outcomes easier
                to achieve.
              </p>
            </div>
            <Image
              src={assetPath("/cdc-logo.jpg")}
              alt="CDC Certified Divorce Coach® — The Professional Standard for Personal Divorce Coaching®"
              width={220}
              height={122}
              className="mt-8 h-auto w-[12rem] rounded-md bg-white object-contain p-3 shadow-sm md:w-[14rem]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center bg-pink px-6 py-10 md:px-10 md:py-16">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
            <Image
              src={assetPath("/alecia-headshot.jpg")}
              alt="Alecia Pazant"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Why This Approach Is Different */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:max-w-4xl md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Why This Approach Is Different
          </h2>
          <div className="mt-5 space-y-4 font-body text-base font-light leading-relaxed text-ink md:text-lg">
            <p>
              Divorce is often described as an emotional journey, but it is also
              a period filled with important decisions that can shape the future
              for years to come. Questions about family, finances, housing,
              co-parenting, and personal identity often arise simultaneously,
              making it difficult to know where to focus and how to move forward
              with confidence.
            </p>
            <p>
              Before becoming a Certified Divorce Coach®, I spent my career
              helping leaders and organizations navigate complex decisions,
              competing priorities, uncertainty, and significant change. Drawing
              on a professional background in organizational effectiveness,
              governance, and strategic decision support, I help clients bring
              structure, clarity, and thoughtful decision-making to one of the
              most challenging transitions of their lives.
            </p>
            <p>
              My understanding of divorce is informed not only by professional
              experience but also by personal experience. Having experienced
              divorce&apos;s impact both as a child and later as an adult, I
              developed a deep appreciation for how profoundly life transitions
              can affect individuals, families, and future aspirations. I
              understand that beyond the legal process are deeply personal
              questions about relationships, priorities, stability, and what
              comes next.
            </p>
            <p>
              Those experiences, combined with decades of helping people
              navigate change and complexity, inspired me to establish Insightful
              Divorce Coaching™. My role is not to tell clients what decisions to
              make, but to provide the structure, perspective, and support that
              help them organize information, evaluate options, prepare for
              important conversations, and move forward with greater clarity,
              confidence, and intention.
            </p>
            <p>
              Insightful Divorce Coaching™ is built on a simple belief: better
              decisions create better outcomes, both during divorce and beyond
              it.
            </p>
          </div>
        </div>
      </section>

      {/* Why Insightful Divorce Coaching Exists */}
      <section className="bg-pink py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:max-w-4xl md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Why Insightful Divorce Coaching™ Exists
          </h2>
          <div className="mt-5 space-y-4 font-body text-base font-light leading-relaxed text-ink md:text-lg">
            <p>
              Divorce can overwhelm even the most capable individuals. Important
              decisions often must be made while navigating stress, uncertainty,
              grief, conflict, and competing priorities. During these periods,
              communication can break down, decision fatigue can set in, and
              progress can stall.
            </p>
            <p>
              Insightful Divorce Coaching™ exists to provide the practical
              support that helps clients move forward more effectively.
            </p>
            <p>
              When clients are more organized, informed, and emotionally
              grounded, they are often better positioned to work productively
              with the professionals supporting their divorce process and to
              make decisions aligned with their long-term goals.
            </p>
            <p>
              If you are navigating divorce and seeking a thoughtful, structured
              approach to decision-making, communication, and future planning, I
              invite you to schedule a{" "}
              <Link
                href="/contact"
                className="font-medium text-plum underline underline-offset-4 hover:text-gold-deep"
              >
                Discovery Session
              </Link>{" "}
              to learn how Insightful Divorce Coaching™ can support your goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-14 md:py-16" style={katePinkBg}>
        <HeroPattern />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Ready to Move Forward with Clarity?
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-[4px] bg-gold px-6 py-3.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep"
            >
              Request a Discovery Session
            </Link>
            <Link
              href="/services"
              className="border border-plum/25 bg-white px-6 py-3.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-plum transition-colors hover:bg-white/80"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
