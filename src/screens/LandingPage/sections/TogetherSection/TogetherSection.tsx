import React from "react";
import { Button } from "../../../../components/ui/button";

export const TogetherSection = (): JSX.Element => {
  const buttons = [
    {
      text: "Join The Movement",
      className:
        "bg-[linear-gradient(149deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] text-[#111111]",
    },
    {
      text: "Donate",
      className: "bg-[#f34065] text-[#ffffff]",
    },
  ];

  const images = [
    {
      src: "/rectangle-22.png",
      alt: "Rectangle",
    },
    {
      src: "/rectangle-23.png",
      alt: "Rectangle",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-12 py-8 md:py-12 px-4 md:px-8">
      <h2 className="relative w-full bg-[linear-gradient(141deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-64-bold font-[number:var(--64-bold-font-weight)] text-transparent text-3xl md:text-5xl lg:text-[length:var(--64-bold-font-size)] text-center tracking-[var(--64-bold-letter-spacing)] leading-[var(--64-bold-line-height)] [font-style:var(--64-bold-font-style)] px-4">
        Together, We Build Brighter Futures
      </h2>

      <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-8 lg:gap-12 max-w-[1184px] mx-auto">
        <div className="flex flex-col w-full lg:w-[611px] items-start gap-6 md:gap-8 relative">
          <p className="relative self-stretch [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-lg md:text-xl lg:text-2xl tracking-[0] leading-[normal]">
            Your contribution sparks confidence, opportunities, and impact for
            young people striving to make a difference.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 relative w-full sm:w-auto">
            {buttons.map((button, index) => (
              <Button
                key={index}
                className={`${button.className} h-12 items-center justify-center gap-2.5 px-6 md:px-[94px] py-[9px] rounded-lg font-16-semi font-[number:var(--16-semi-font-weight)] text-[length:var(--16-semi-font-size)] tracking-[var(--16-semi-letter-spacing)] leading-[var(--16-semi-line-height)] [font-style:var(--16-semi-font-style)]`}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative w-full lg:w-auto justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              className="relative w-full sm:w-[200px] md:w-[240px] lg:w-[263px] h-auto sm:h-[218px] md:h-[260px] lg:h-[286px] rounded-[30px_0px_30px_30px] border-4 border-solid border-[#ffffff] object-cover"
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
