// app/ranking/page.tsx
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Tailwind mapping notes:
// - Colors: #1285ff → text-[#1285ff] / bg-[#1285ff]; #ededed → border-[#ededed]/bg-[#ededed]; #373737/#444/#4b4b → text-[#373737]/[#444444]/[#4b4b4b]
// - Typography: Inter weights mapped to font-semibold/font-bold/font-black as appropriate
// - Spacing approximations use px-4/py-3/gap-* to reflect relative spacing from Figma
// - Auto-layout: Flex rows/cols with justify-between, items-center; mobile-first, container width ~393px

export default function RankingPage() {
  return (
    <main className="figma-랭킹 mx-auto min-h-screen w-full max-w-[393px] bg-white">
      {/* 상단 바 */}
      <header className="figma-상단-바 sticky top-0 z-10 border-b border-[#ededed] bg-white">
        <div className="flex h-12 items-center justify-between px-4">
          <div className="figma-Depth-3-Frame-0 flex h-12 w-12 items-center justify-center">
            <div className="h-6 w-6 rounded bg-[#e5e7eb]" aria-hidden />
          </div>
          <h1 className="figma-Ranking-of-Learning-Time text-[15px] font-black leading-[18px] tracking-[-0.03em] text-[#1285ff]">
            Ranking  of  Learning  Time
          </h1>
          <div className="figma-Depth-3-Frame-1 flex h-12 w-12 items-center justify-center">
            <div className="h-12 w-6 rounded-full bg-[#e5e7eb]" aria-hidden />
          </div>
        </div>
      </header>

      {/* 섹션_카테고리 */}
      <section className="figma-섹션_카테고리 px-4 py-3">
        <div className="flex items-center justify-between rounded-[10px] border border-[#1285ff] px-3 py-2">
          <div className="figma-일간 text-[15px] font-bold leading-[18px] tracking-[-0.07em] text-[#373737]">
            일간
          </div>
          <div className="figma-주간 text-[15px] font-bold leading-[18px] tracking-[-0.07em] text-[#1285ff]">
            주간
          </div>
          <div className="figma-월간 text-[15px] font-bold leading-[18px] tracking-[-0.07em] text-[#373737]">
            월간
          </div>
        </div>
        {/* Active underline (주간) */}
        <div className="mt-1 flex justify-center">
          <div className="h-px w-12 bg-[#1285ff]" aria-hidden />
        </div>
      </section>

      {/* 상단 CTA / 카드 버튼들 */}
      <section className="px-4">
        <div className="figma-Group-59 grid grid-cols-3 gap-2">
          <Button className="figma-Keep-Learning rounded-[10px] bg-[#4da3ff] text-white hover:bg-[#3a95fb]">
            Keep Learning
          </Button>
          <Button className="figma-Mini-Game rounded-[10px] bg-[#4da3ff] text-white hover:bg-[#3a95fb]">
            Mini Game
          </Button>
          <Button className="figma-1-1-Match rounded-[10px] bg-[#4da3ff] text-white hover:bg-[#3a95fb]">
            1:1 Match
          </Button>
        </div>
      </section>

      {/* 안내 문구 */}
      <section className="px-4 py-4">
        <p className="figma-안내문구 text-center text-[11px] font-medium leading-[17px] tracking-[-0.03em] text-[#373737]">
          이번 주 USER 님의 학습 순위는 3위 네요! 비슷한 랭킹의 @Bot2345 님과 일주일 간의 매치를 신청해보는 건 어떨까요?
        </p>
      </section>

      {/* 순위 리스트 */}
      <section className="figma-섹션_순위 space-y-3 px-4 pb-4">
        <RankingCard
          className="figma-1위"
          rank="1"
          name="헥사곤"
          time="3:23:20"
          progressPct={90}
          accent="#1285ff"
          frameStroke="#373737"
        />
        <RankingCard
          className="figma-2위"
          rank="2"
          name="Bot2345"
          time="1:50:23"
          progressPct={77}
          accent="#1285ff"
          frameStroke="#373737"
        />
        <RankingCard
          className="figma-3위 bg-[#e6f2ff]"
          rank="3"
          name="USER"
          time="28:21"
          progressPct={85}
          accent="#1285ff"
          frameStroke="#e6f2ff"
        />
        <RankingCard
          className="figma-4위"
          rank="4"
          name="Bot6789"
          time="9:55"
          progressPct={61}
          accent="#1285ff"
          frameStroke="#373737"
        />
      </section>

      {/* 하단 네비게이션 */}
      <nav className="figma-하단-네비게이션 sticky bottom-0 border-t border-[#ededed] bg-white">
        <div className="mx-auto flex h-16 max-w-[393px] items-center justify-between px-6">
          <div className="flex flex-col items-center gap-1">
            <div className="h-[69px] w-[69px] rounded-full bg-[#4a709c]" aria-hidden />
            <span className="figma-홈-버튼 sr-only">홈</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-6 text-center text-[10px] font-semibold leading-3 tracking-[-0.08em] text-[#4a709c]">
            <span className="figma-Mini-game block">Mini game</span>
            <span className="figma-Learning-map block">Learning map</span>
            <span className="figma-Ranking block">Ranking</span>
            <span className="figma-My block">My</span>
          </div>
        </div>
      </nav>
    </main>
  );
}

// A small presentational card reflecting Figma structure semantically
function RankingCard({
  className = "",
  rank,
  name,
  time,
  progressPct,
  accent = "#1285ff",
  frameStroke = "#373737",
}: {
  className?: string;
  rank: string;
  name: string;
  time: string;
  progressPct: number; // 0..100
  accent?: string;
  frameStroke?: string;
}) {
  return (
    <article
      className={`rounded-[10px] border px-4 py-3 ${className}`}
      style={{ borderColor: frameStroke }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="figma-순위 text-[20px] font-semibold leading-6 tracking-[-0.07em]"
            style={{ color: accent }}
          >
            {rank}
          </span>
          <div className="figma-프로필 relative h-[54px] w-[54px]">
            <div className="h-full w-full rounded-full border" style={{ borderColor: "#373737" }} />
            {/* Placeholder image path as requested */}
            {/* <Image src="/assets/profile.png" alt="" fill className="rounded-full object-cover" /> */}
          </div>
        </div>

        <div className="figma-이름-시간 text-right">
          <div className="figma-이름 text-[15px] font-bold leading-[18px] tracking-[-0.05em] text-[#373737]">
            {name}
          </div>
          <div className="figma-시간 mt-1 text-[10px] font-medium leading-3 tracking-[-0.07em] text-[#848484]">
            {time}
          </div>
        </div>
      </div>

      <div className="figma-진도율 mt-3">
        <div className="h-[11px] w-full rounded-full bg-[#ededed]" />
        <div
          className="mt-[-11px] h-[11px] rounded-full"
          style={{ width: `${progressPct}%`, backgroundColor: accent }}
          aria-hidden
        />
      </div>
    </article>
  );
}
