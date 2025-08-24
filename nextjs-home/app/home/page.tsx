import * as React from "react"
import Image from "next/image"
import { Button } from "../../components/ui/button"

export default function HomeFinalPage() {
  return (
    <main className="figma-HOME_FINAL mx-auto w-full max-w-[393px] bg-background-primary">
      {/* TOP BAR */}
      <header className="figma-TOP sticky top-0 z-10 h-[72px] bg-background-secondary">
        <div className="mx-auto flex h-full max-w-[390px] items-center justify-center px-4">
          <h1 className="figma-Home text-[18px] font-bold leading-[23px] text-text-primary">Home</h1>
        </div>
      </header>

      {/* CONTENT WRAPPER (auto-layout vertical) */}
      <div className="mx-auto max-w-[362px] space-y-4 px-4 pb-8 pt-4">
        {/* HOME_TOP */}
        <section className="figma-HOME_TOP rounded-[10px] bg-white p-4 shadow-sm">
          <div className="space-y-3">
            <h2 className="figma-Welcome-Back text-center text-[18px] font-light leading-[22px] tracking-[-0.05em] text-text-secondary">
              Welcome Back
            </h2>
            <p className="figma-Continue-your-learning text-center text-[14px] font-normal leading-[17px] text-text-muted">
              Continue your learning journey
            </p>
          </div>
        </section>

        {/* HOME_MIDDLE */}
        <section className="figma-HOME_MIDDLE rounded-[10px] bg-white p-4 shadow-sm">
          <div className="space-y-4">
            <h3 className="figma-Quick-Actions text-[16px] font-semibold leading-[19px] text-text-primary">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Button className="figma-Start-Learning h-12 w-full">
                Start Learning
              </Button>
              <Button variant="outline" className="figma-View-Progress h-12 w-full">
                View Progress
              </Button>
            </div>
          </div>
        </section>

        {/* HOME_BOTTOM */}
        <section className="figma-HOME_BOTTOM rounded-[10px] bg-white p-4 shadow-sm">
          <div className="space-y-3">
            <h3 className="figma-Recent-Activity text-[16px] font-semibold leading-[19px] text-text-primary">
              Recent Activity
            </h3>
            <div className="space-y-2">
              <div className="figma-Activity-Item flex items-center justify-between rounded-md bg-gray-50 p-3">
                <span className="text-sm text-text-secondary">Last lesson completed</span>
                <span className="text-xs text-text-muted">2 hours ago</span>
              </div>
              <div className="figma-Activity-Item flex items-center justify-between rounded-md bg-gray-50 p-3">
                <span className="text-sm text-text-secondary">Quiz score</span>
                <span className="text-xs text-text-muted">85%</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
