const SIDEBAR_ROWS = ["46px", "62px", "40px", "56px", "50px"];

const CHART_BARS = [42, 58, 36, 74, 52, 88, 64, 96, 70, 82, 60, 92, 76, 100];

const MINI_STATS = [
  { label: "ACTIVE USERS", value: "18,204", className: "text-white" },
  { label: "CONVERSION", value: "4.8%", className: "text-aqua-400" },
  { label: "CHURN", value: "1.2%", className: "text-mint-400" },
];

const PHONE_ROWS = [
  { gradient: "from-brand-600 to-aqua-400", width: "68%" },
  { gradient: "from-aqua-400 to-mint-400", width: "72%" },
];

/**
 * The floating product composition on the right of the hero: an analytics
 * dashboard, a phone, and two glass status cards. Purely decorative — every
 * element is aria-hidden and built from divs rather than screenshots so it
 * stays crisp at any size and costs no image bytes.
 */
export function HeroDevices() {
  return (
    <div
      aria-hidden="true"
      className="relative hidden h-[620px] [perspective:1800px] lg:block"
    >
      <DashboardCard />
      <PhoneCard />
      <CodeCard />
      <DeployCard />

      <svg
        viewBox="0 0 500 620"
        className="absolute inset-0 z-1 size-full opacity-55"
        fill="none"
      >
        <path
          d="M120 470 C 190 430, 250 380, 330 120"
          stroke="rgba(37,99,235,0.5)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          className="animate-dash"
        />
        <path
          d="M420 300 C 360 300, 330 260, 300 200"
          stroke="rgba(34,211,238,0.45)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          className="animate-dash [animation-duration:2.1s]"
        />
      </svg>
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="absolute top-24 left-[2%] w-[90%] animate-float [transform:rotateY(-17deg)_rotateX(9deg)_rotateZ(1.5deg)] [transform-style:preserve-3d]">
      <div className="rounded-[18px] bg-linear-[150deg,rgba(255,255,255,0.2),rgba(255,255,255,0.04)] p-3 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9),0_0_90px_-20px_rgba(37,99,235,0.45)]">
        <div className="overflow-hidden rounded-xl border border-white/7 bg-[#0B0D14]">
          <div className="flex items-center gap-1.5 border-b border-white/6 bg-white/2 px-3.5 py-2.5">
            <span className="size-2.5 rounded-full bg-[#FF5F57]" />
            <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="size-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 font-mono text-[10.5px] text-white/35">
              app.quicctech.io/dashboard
            </span>
          </div>

          <div className="grid min-h-[326px] grid-cols-[150px_1fr]">
            <div className="flex flex-col gap-1.5 border-r border-white/6 bg-white/1.5 px-3 py-4">
              <div className="flex items-center gap-2 rounded-lg border border-brand-600/30 bg-brand-600/15 px-2.5 py-2">
                <span className="size-3.25 rounded bg-linear-to-br from-brand-600 to-aqua-400" />
                <span className="h-1.5 w-14 rounded-full bg-white/55" />
              </div>
              {SIDEBAR_ROWS.map((width) => (
                <div key={width} className="flex items-center gap-2 px-2.5 py-2">
                  <span className="size-3.25 rounded bg-white/12" />
                  <span
                    className="h-1.5 rounded-full bg-white/13"
                    style={{ width }}
                  />
                </div>
              ))}
              <div className="mt-auto rounded-[9px] border border-white/9 bg-linear-[135deg,rgba(29,78,216,0.28),rgba(34,211,238,0.14)] p-2.5">
                <span className="mb-1.5 block h-1.5 w-[70%] rounded-full bg-white/40" />
                <span className="block h-1 w-[45%] rounded-full bg-white/20" />
              </div>
            </div>

            <div className="flex flex-col gap-3.5 p-4.5">
              <div className="flex items-end justify-between">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9.5px] tracking-[0.16em] text-white/32">
                    MONTHLY RECURRING
                  </span>
                  <span className="text-[27px] font-semibold tracking-tight text-white">
                    $248,910
                  </span>
                </div>
                <span className="rounded-md border border-mint-400/30 bg-mint-400/14 px-2 py-1 font-mono text-[10.5px] font-semibold text-mint-400">
                  +18.4%
                </span>
              </div>

              <div className="flex h-26 items-end gap-1.5 border-b border-white/6 py-3">
                {CHART_BARS.map((height, index) => (
                  <span
                    key={index}
                    className={`flex-1 rounded-t-sm ${index > 10
                      ? "bg-linear-to-t from-brand-600 to-aqua-400"
                      : "bg-white/12"
                      }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {MINI_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1.5 rounded-[9px] border border-white/6 bg-white/3 p-2.5"
                  >
                    <span className="font-mono text-[8.5px] tracking-[0.14em] text-white/30">
                      {stat.label}
                    </span>
                    <span
                      className={`text-[15px] font-semibold tracking-tight ${stat.className}`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-3.25 w-[64%] rounded-b-[14px] bg-linear-to-b from-white/20 to-white/5 shadow-[0_24px_40px_-18px_rgba(0,0,0,0.9)]" />
    </div>
  );
}

function PhoneCard() {
  return (
    <div className="absolute bottom-2 z-3 w-43 animate-float [animation-delay:0.8s] [animation-duration:7.5s] [transform:rotateY(-14deg)_rotateX(6deg)]">
      <div className="rounded-[26px] bg-linear-[150deg,rgba(255,255,255,0.24),rgba(255,255,255,0.05)] p-1.75 shadow-[0_40px_70px_-26px_rgba(0,0,0,0.95),0_0_60px_-18px_rgba(37,99,235,0.55)]">
        <div className="flex min-h-[300px] flex-col gap-2.75 overflow-hidden rounded-[20px] border border-white/7 bg-[#0B0D14] px-2.75 py-3">
          <div className="flex justify-center">
            <span className="h-1 w-11 rounded-full bg-white/18" />
          </div>
          <div className="flex items-center justify-between">
            <span className="h-1.75 w-13 rounded-full bg-white/35" />
            <span className="size-5 rounded-full bg-linear-to-br from-brand-700 to-aqua-400" />
          </div>

          <div className="flex flex-col gap-2 rounded-[14px] border border-white/10 bg-linear-[140deg,rgba(37,99,235,0.3),rgba(34,211,238,0.14)] p-3.25">
            <span className="font-mono text-[8px] tracking-[0.14em] text-white/50">
              BALANCE
            </span>
            <span className="text-[19px] font-semibold tracking-tight">
              $12,480
            </span>
            <svg viewBox="0 0 140 34" className="h-7 w-full" fill="none">
              <path
                d="M0 26L14 20L28 24L42 12L56 17L70 8L84 13L98 5L112 10L126 3L140 7"
                stroke="#22D3EE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {PHONE_ROWS.map((row) => (
            <div
              key={row.width}
              className="flex items-center gap-2.25 rounded-[11px] border border-white/5 bg-white/3.5 p-2.25"
            >
              <span
                className={`size-6 flex-none rounded-lg bg-linear-to-br ${row.gradient}`}
              />
              <span className="flex flex-1 flex-col gap-1.25">
                <span
                  className="h-1.25 rounded-full bg-white/28"
                  style={{ width: row.width }}
                />
                <span className="h-1 w-[42%] rounded-full bg-white/13" />
              </span>
            </div>
          ))}

          <div className="mt-auto flex items-center justify-center rounded-[11px] bg-white py-2.5 text-[10.5px] font-semibold text-ink-950">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeCard() {
  return (
    <div className="absolute top-3.5 -right-[4%] z-4 w-60 animate-float-sm [animation-delay:0.4s] rounded-[14px] border border-white/12 bg-[rgba(12,15,22,0.72)] p-3.5 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl">
      <div className="mb-2.5 flex items-center gap-1.75">
        <span className="size-1.75 rounded-full bg-mint-400 shadow-[0_0_8px_var(--color-mint-400)]" />
        <span className="font-mono text-[9.5px] tracking-[0.1em] text-white/42">
          POST /v1/checkout
        </span>
      </div>
      <pre className="font-mono text-[10.5px] leading-relaxed whitespace-pre-wrap text-white/72">
        <span className="text-brand-400">const</span> res ={" "}
        <span className="text-brand-400">await</span> quicc.
        <span className="text-aqua-400">deploy</span>
        {"({\n  region: "}
        <span className="text-mint-400">&apos;auto&apos;</span>
        {",\n  scale: "}
        <span className="text-mint-400">&apos;edge&apos;</span>
        {"\n})"}
      </pre>
    </div>
  );
}

function DeployCard() {
  return (
    <div className="absolute right-[2%] bottom-38 z-4 flex animate-float-sm items-center gap-2.75 rounded-xl border border-white/12 bg-[rgba(12,15,22,0.75)] px-3.75 py-2.75 shadow-[0_24px_50px_-22px_rgba(0,0,0,0.9)] backdrop-blur-xl [animation-delay:1.4s] [animation-duration:8s]">
      <svg viewBox="0 0 24 24" className="size-5" fill="none">
        <path
          d="M6.5 19a4.5 4.5 0 010-9 6 6 0 0111.5 1.5A3.75 3.75 0 0117.5 19z"
          stroke="#22D3EE"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col gap-0.75">
        <span className="text-xs font-semibold">Deployed to 14 regions</span>
        <span className="font-mono text-[9.5px] text-white/40">
          99.98% uptime · 42ms p95
        </span>
      </div>
    </div>
  );
}
