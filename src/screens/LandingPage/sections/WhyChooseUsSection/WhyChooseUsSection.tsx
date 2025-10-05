import { ArrowRight as ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Our Program", href: "#" },
  { label: "Blog", href: "#" },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <header className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12 py-4 gap-4">
        <div className="bg-[linear-gradient(141deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_20%,rgba(204,102,0,1)_49%,rgba(250,192,21,1)_82%,rgba(250,192,21,1)_98%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Saira_Stencil_One',Helvetica] font-normal text-transparent text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-[normal]">
          Allan L Roberts
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="[font-family:'Poppins',Helvetica] font-semibold text-[#fac215] text-base tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="h-9 gap-2.5 px-4 md:px-6 py-[9px] rounded-md bg-[linear-gradient(141deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] hover:opacity-90 transition-opacity">
          <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-sm tracking-[0] leading-[normal]">
            Connect Now
          </span>
          <ArrowRightIcon className="w-[18px] h-[18px]" />
        </Button>
      </header>

      <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:h-[553px] flex bg-[url(/rectangle-11.png)] bg-[100%_100%] bg-cover bg-center">
        <div className="flex mt-8 md:mt-16 lg:mt-[125px] w-full max-w-[710px] mx-4 md:mx-8 lg:ml-12 flex-col items-start gap-6 md:gap-8 mb-8">
          <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
            <h1 className="font-64-bold font-[number:var(--64-bold-font-weight)] text-primary-blue text-3xl md:text-5xl lg:text-[length:var(--64-bold-font-size)] tracking-[var(--64-bold-letter-spacing)] leading-[var(--64-bold-line-height)] [font-style:var(--64-bold-font-style)]">
              Empowering youth to architect their own tomorrow.
            </h1>

            <p className="w-full max-w-[630px] font-22-semi font-[number:var(--22-semi-font-weight)] text-[#754b05] text-base md:text-lg lg:text-[length:var(--22-semi-font-size)] tracking-[var(--22-semi-letter-spacing)] leading-[var(--22-semi-line-height)] [font-style:var(--22-semi-font-style)]">
              Youth empowerment is the act of handing our youngest generation
              not a map, but a compass and the confidence to chart a new course
              for the world.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 w-full sm:w-auto">
            <Button className="h-[42px] px-6 py-[9px] rounded-lg bg-[linear-gradient(149deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] hover:opacity-90 transition-opacity">
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-sm tracking-[0] leading-[normal]">
                Donate
              </span>
            </Button>

            <Button className="h-[42px] px-6 py-[9px] bg-primary-blue rounded-lg hover:opacity-90 transition-opacity">
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-sm tracking-[0] leading-[normal]">
                Learn More
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
