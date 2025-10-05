import React from "react";
import { Button } from "../../../../components/ui/button";

export const TogetherWeBuildBrighterFuturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-12 py-8 md:py-12 px-4 md:px-8">
      <h2 className="relative w-full bg-[linear-gradient(141deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-64-bold font-[number:var(--64-bold-font-weight)] text-transparent text-3xl md:text-5xl lg:text-[length:var(--64-bold-font-size)] text-center tracking-[var(--64-bold-letter-spacing)] leading-[var(--64-bold-line-height)] [font-style:var(--64-bold-font-style)] px-4">
        Founder&apos;s Journey Milestones
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 w-full max-w-[1184px]">
        <div className="flex flex-col w-full lg:w-[653px] items-start gap-6 md:gap-8">
          <div className="flex flex-col items-start gap-4 w-full">
            <p className="font-16-medium font-[number:var(--16-medium-font-weight)] text-[#ffffff] text-sm md:text-[length:var(--16-medium-font-size)] tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] [font-style:var(--16-medium-font-style)]">
              Our journey begins with curiosity and discovery — a moment where
              young hearts awaken to their purpose. In this phase, we help
              participants unveil their passions, explore possibilities, and set
              a direction for growth. As they advance, they engage in learning
              and practice — building competencies, sharpening mindsets, and
              gaining confidence through guided experiences in real settings.
            </p>

            <p className="font-16-medium font-[number:var(--16-medium-font-weight)] text-[#ffffff] text-sm md:text-[length:var(--16-medium-font-size)] tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] [font-style:var(--16-medium-font-style)]">
              Then comes transformation through leadership and impact. Youth
              step into roles where they lead, innovate, and contribute
              meaningfully to their communities. At every turn, they&apos;re
              supported to thrive — turning individual growth into collective
              change, and creating a legacy that inspires others.
            </p>
          </div>

          <Button className="h-12 px-6 md:px-[23px] py-[13px] rounded-lg bg-[linear-gradient(138deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] font-16-semi font-[number:var(--16-semi-font-weight)] text-[#ffffff] text-[length:var(--16-semi-font-size)] tracking-[var(--16-semi-letter-spacing)] leading-[var(--16-semi-line-height)] [font-style:var(--16-semi-font-style)] hover:opacity-90">
            Learn More
          </Button>
        </div>

        <img
          className="w-full lg:w-[476px] h-auto max-h-[250px] md:max-h-[280px] lg:h-[296px] rounded-[20px] object-cover"
          alt="Rectangle"
          src="/rectangle-21.png"
        />
      </div>
    </section>
  );
};
