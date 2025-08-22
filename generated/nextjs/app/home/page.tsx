import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomeFinalPage() {
  return (
    <main className="figma-HOME_FINAL mx-auto w-full max-w-[393px] bg-[#f7fafc]">
      {/* TOP BAR */}
      <header className="figma-TOP sticky top-0 z-10 h-[72px] bg-[#fafafa]">
        <div className="mx-auto flex h-full max-w-[390px] items-center justify-center px-4">
          <h1 className="figma-Home text-[18px] font-bold leading-[23px] text-[#121a0f]">Home</h1>
        </div>
      </header>

      {/* CONTENT WRAPPER (auto-layout vertical) */}
      <div className="mx-auto max-w-[362px] space-y-4 px-4 pb-8 pt-4">
        {/* HOME_TOP */}
        <section className="figma-HOME_TOP rounded-[10px] bg-[#e6f2ff] p-4">
          <div className="figma-NAME space-y-1">
            <h2 className="figma-Creative-Problem-Solver text-[18px] font-bold leading-[22px] tracking-[-0.05em] text-[#0058b5]">
              Creative Problem Solver,
            </h2>
            <div className="figma-name h-6 w-[100px] rounded border border-[#373737] bg-white" aria-hidden />
            <p className="figma-Welcome-Back text-center text-[18px] font-light leading-[22px] tracking-[-0.05em] text-[#212837]">
              Welcome Back!
            </p>
          </div>

          {/* Character placeholder */}
          <div className="figma-character mt-4 overflow-hidden rounded-[10px]">
            <Image
              src="/hero/character.png"
              alt="character"
              width={362}
              height={205}
              className="h-[205px] w-full object-cover"
            />
          </div>
        </section>

        {/* CTA BUTTON */}
        <section className="figma-btn-study">
          <Button className="w-full rounded-[10px] bg-[#0058b5] text-white hover:bg-[#004c9e]">
            Let’s Jump into Studying!
          </Button>
        </section>

        {/* PERFORMANCE CARD */}
        <section className="figma-홈-성과 rounded-[10px] border border-[#0058b5] bg-white p-4">
          <div className="figma-title">
            <div className="figma-name mx-auto h-6 w-[100px] rounded border border-[#373737] bg-white" aria-hidden />
            <h3 className="figma-among-the-rare text-center text-[18px] font-bold leading-[32px] tracking-[-0.05em] text-[#0058b5]">
              among the rare creative 21.57%!
            </h3>
          </div>
          <div className="figma-detail mt-2 space-y-1 text-[13px] font-medium leading-[19px] tracking-[-0.03em] text-[#1d1d1d]">
            <p>This week, you averaged 2.5 tries per correct answer!</p>
            <p>You solved the latest lesson in 16 minutes!</p>
          </div>
        </section>

        {/* COURSE PROGRESS */}
        <section className="figma-HOME_BOTTOM rounded-[10px] bg-[#e6f2ff] p-4">
          <header className="space-y-1">
            <h3 className="figma-Lastest-Course text-[20px] font-extrabold leading-[24px] text-[#0058b5]">
              Latetest Course
            </h3>
            <p className="figma-Last-study text-[11px] font-medium leading-[13px] text-[#1d1d1d]">
              Last study: 03/08/2025
            </p>
            <p className="figma-First-Step text-[13px] font-medium leading-[16px] text-[#1d1d1d]">
              First Step In Coding (Level 3)
            </p>
          </header>

          {/* dots row (simplified) */}
          <div className="figma-dots mt-4 grid grid-cols-5 gap-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`h-[42px] w-[42px] rounded-full border ${i < 4 ? 'border-[#0058b5]' : 'border-[#b5b5b5]'}`} />
                <span className={`h-[36px] w-[36px] rounded-full ${i < 4 ? 'bg-[#0058b5]' : 'bg-[#b5b5b5]'}`} />
              </div>
            ))}
          </div>

          {/* progress bar */}
          <div className="figma-Group-2 mt-6 w-full rounded-[15px] bg-white p-[2px]">
            <div className="h-4 w-[240px] rounded-[15px] bg-[#1285ff]" />
          </div>

          {/* tooltip */}
          <div className="figma-Frame-10 mx-auto mt-3 w-[97px] text-center">
            <div className="text-[18px] leading-none text-[#373737]">🎉</div>
            <div className="text-[11px] leading-none text-[#373737]">you are almost here!</div>
          </div>

          {/* halfway marker */}
          <div className="figma-Halfway mx-auto mt-3 w-[76px] text-center">
            <div className="text-[18px] font-black leading-[22px]">🎁</div>
            <div className="text-[11px] leading-none text-[#373737]">Halfway reward</div>
          </div>
        </section>
      </div>

      {/* NAV BAR */}
      <nav className="figma-NEVI-BAR sticky bottom-0 w-full bg-[#f7fafc]">
        <div className="mx-auto flex h-[75px] max-w-[390px] items-center justify-around border-t border-[#e8edf2]">
          <div className="text-center">
            <div className="text-[12px] font-medium text-[#303030]">Home</div>
          </div>
          <div className="text-center">
            <div className="text-[12px] font-medium text-[#0058b5]">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-[12px] font-medium text-[#303030]">Goal Setting</div>
          </div>
          <div className="text-center">
            <div className="text-[12px] font-medium text-[#303030]">Web</div>
          </div>
        </div>
      </nav>
    </main>
  );
}


