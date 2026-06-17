import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import giftCard from "@/assets/giftcard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$500 Target Gift Card Reward — Rewards Program" },
      {
        name: "description",
        content:
          "Claim your $500 Target Gift Card reward. Complete a short 5-minute verification to receive yours. Available in US, UK, AU, and CA.",
      },
      { property: "og:title", content: "$500 Target Gift Card Reward" },
      {
        property: "og:description",
        content:
          "Complete a short 5-minute verification to receive your $500 Target Gift Card reward.",
      },
    ],
  }),
  component: Index,
});

const STEPS = [
  {
    title: "Click the button below",
    detail: "Start your secure $500 Target Gift Card claim in one click.",
  },
  {
    title: "Enter your email & basic info",
    detail: "We only use this to deliver your Target Gift Card reward.",
  },
  {
    title: "Complete 3 to 5 partner deals",
    detail: "Quick partner offers — most are completed in just a few minutes.",
  },
  {
    title: "Receive your $500 Target Gift Card",
    detail: "Your Target Gift Card code is emailed to you once verified.",
  },
];

const NAMES = [
  "Sarah M.", "James L.", "Emily R.", "Michael B.", "Olivia T.",
  "Daniel K.", "Sophia P.", "Liam W.", "Ava H.", "Noah C.",
  "Mia G.", "Ethan S.", "Charlotte D.", "Lucas F.", "Amelia J.",
  "Henry O.", "Isla N.", "Mason V.", "Zoe A.", "Jack R.",
];
const LOCATIONS = [
  "New York, US", "London, UK", "Sydney, AU", "Toronto, CA",
  "Los Angeles, US", "Manchester, UK", "Melbourne, AU", "Vancouver, CA",
  "Chicago, US", "Birmingham, UK", "Brisbane, AU", "Montreal, CA",
  "Austin, US", "Leeds, UK", "Perth, AU", "Ottawa, CA",
];

type Notif = { id: number; name: string; location: string; minutes: number };

function BullseyeMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={
        "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#CC0000] " +
        className
      }
      aria-hidden
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
        <span className="h-2.5 w-2.5 rounded-full bg-[#CC0000]" />
      </span>
    </span>
  );
}

function Index() {
  const [notif, setNotif] = useState<Notif | null>(null);

  useEffect(() => {
    let idCounter = 0;
    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    const schedule = (delay: number) => {
      nextTimer = setTimeout(() => {
        const n: Notif = {
          id: ++idCounter,
          name: NAMES[Math.floor(Math.random() * NAMES.length)],
          location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
          minutes: Math.floor(Math.random() * 28) + 2,
        };
        setNotif(n);
        hideTimer = setTimeout(() => setNotif(null), 6500);
        schedule(35000 + Math.random() * 20000);
      }, delay);
    };

    schedule(25000);

    return () => {
      clearTimeout(nextTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      {/* Top promo bar */}
      <div className="w-full bg-[#CC0000] text-white">
        <div className="mx-auto flex h-10 w-full max-w-[500px] items-center justify-center px-4 text-center text-[11.5px] font-bold uppercase tracking-[0.12em] sm:text-xs">
          Rewards Program <span className="mx-2 opacity-70">•</span> $500 Target Gift Card
        </div>
      </div>

      {/* Brand bar */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-14 w-full max-w-[500px] items-center justify-between px-5">
          <div className="flex items-center gap-2.5">
            <BullseyeMark />
            <span className="text-[15px] font-bold tracking-tight text-neutral-900">
              Target Gift Card <span className="text-[#CC0000]">Rewards</span>
            </span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Secure
          </span>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[500px] flex-col items-center px-5 py-8 sm:py-12">
        {/* Offer badge */}
        <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#CC0000]/20 bg-[#CC0000]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#CC0000]">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 6.96H22l-6.18 4.49L18.18 22 12 17.27 5.82 22l2.36-8.55L2 8.96h7.61z"/></svg>
          Official Reward Offer
        </span>

        {/* Gift card image */}
        <div className="w-full max-w-[280px] sm:max-w-[320px]">
          <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-[0_25px_60px_-25px_rgba(204,0,0,0.35)] ring-1 ring-neutral-200/70">
            <img
              src={giftCard}
              alt="$500 Target Gift Card reward"
              width={1024}
              height={1024}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-center text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          Get your <span className="text-[#CC0000]">$500 Target</span> Gift Card
        </h1>
        <p className="mt-3 text-center text-[15px] leading-relaxed text-neutral-600">
          Join thousands who already received their Target Gift Card reward.
          Claim yours in just 5 min.
        </p>

        {/* Trust row */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-neutral-600">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-[#CC0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
            47,800+ claimed
          </span>
          <span className="h-3 w-px bg-neutral-300" />
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-[#CC0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            Only 5 minutes
          </span>
        </div>

        {/* Trust badges + How it works heading */}
        <div className="mt-5 w-full">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[12px] font-medium text-neutral-700">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-[#CC0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 9.3 8 11 4.5-1.7 8-6 8-11V5l-8-3Z"/></svg>
              256-bit SSL secure
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-[#CC0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V8a5 5 0 0 1 10 0v3"/></svg>
              No credit card needed
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-[#CC0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              Verified partner offer
            </span>
          </div>
          <h2 className="mt-3 text-center text-xl font-bold tracking-tight text-neutral-900">
            How it works
          </h2>
          <p className="mt-1 text-center text-[13px] text-neutral-600">
            Four simple steps to your $500 reward.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-4 w-full space-y-2.5">
          {STEPS.map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CC0000] text-base font-bold text-white shadow-[0_6px_14px_-6px_rgba(204,0,0,0.7)]">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[15px] font-semibold text-neutral-900">
                  {step.title}
                </p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-neutral-500">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA */}
       <a href="https://giftclick.org/aff_c?offer_id=317&aff_id=157998"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#CC0000] px-6 py-4 text-lg font-bold text-white no-underline"
>
  Claim My $500 Target Gift Card
  <svg
    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
</a>

        <p className="mt-4 text-center text-xs text-neutral-500">
          Available in selected countries — US, UK, AU, CA
        </p>

        {/* Reassurance card */}
        <div className="mt-8 w-full rounded-2xl border border-neutral-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <BullseyeMark />
            <p className="text-[13px] font-semibold text-neutral-900">
              How your Target Gift Card reward works
            </p>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">
            To keep the Target Gift Card rewards program fair and fraud-free,
            every participant completes a short verification through our partner
            offers. Once verified, your $500 Target Gift Card code is delivered
            to your email — most users finish in about 5 minutes.
          </p>
          <ul className="mt-4 space-y-2 text-[12.5px] text-neutral-700">
            {[
              "Your information is encrypted and never sold",
              "You choose which partner offers to complete",
              "Target Gift Card code delivered straight to your inbox",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#CC0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>


      {/* Live notifications */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-4 left-1/2 z-50 w-[min(92vw,340px)] -translate-x-1/2 sm:left-4 sm:translate-x-0"
      >
        {notif && (
          <div
            key={notif.id}
            className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-3 pr-4 shadow-[0_18px_45px_-15px_rgba(0,0,0,0.25)] animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CC0000]/10 text-[#CC0000]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-neutral-900">
                {notif.name} claimed a $500 Target Gift Card
              </p>
              <p className="truncate text-xs text-neutral-500">
                {notif.location} · {notif.minutes} min ago
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
