import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const reasonsData = [
  {
    icon: "/moral-18121424-1.png",
    title: "Expertise You Can Trust",
    description:
      "Years of hands-on experience and continuous learning ensure we deliver solutions that are practical, reliable, and effective.",
  },
  {
    icon: "/problem-solving-12056609-1.png",
    title: "Problem-Solving Mindset",
    description:
      "We turn challenges into opportunities with resilience, precision, and a commitment to finding the best outcome every time.",
  },
  {
    icon: "/partnership-12708685-1.png",
    title: "Supportive Partnership",
    description:
      "Beyond just services, we work alongside you—guiding, supporting, and ensuring your growth and success.",
  },
];

export const EmpowermentReasonsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1129px] mx-auto items-center gap-8 px-4 md:px-6 lg:px-4 py-8 md:py-12">
      <h2 className="relative self-stretch bg-[linear-gradient(143deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-64-bold font-[number:var(--64-bold-font-weight)] text-transparent text-3xl md:text-5xl lg:text-[length:var(--64-bold-font-size)] text-center tracking-[var(--64-bold-letter-spacing)] leading-[var(--64-bold-line-height)] [font-style:var(--64-bold-font-style)]">
        Why Choose Us!
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px] w-full">
        <div className="relative w-full max-w-[478px] h-[300px] md:h-[400px] lg:h-[435px] flex-shrink-0">
          <img
            className="absolute top-[-3px] left-[20px] md:left-[39px] w-[300px] md:w-[400px] lg:w-[443px] h-[310px] md:h-[410px] lg:h-[450px]"
            alt="Ellipse"
            src="/ellipse-1.png"
          />

          <img
            className="absolute top-0 -left-1.5 w-[100px] md:w-[130px] lg:w-[152px] h-[100px] md:h-[130px] lg:h-[152px] border-4 md:border-[6px] border-solid border-transparent object-cover"
            alt="Ellipse"
            src="/ellipse-2.png"
          />
        </div>

        <div className="flex flex-col gap-8 w-full max-w-[542px]">
          {reasonsData.map((reason, index) => (
            <Card
              key={index}
              className="relative w-full rounded-[54px] border-b-2 border-[#0072e9] border-t-0 border-l-0 border-r-0 bg-transparent"
            >
              <CardContent className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 p-5 md:p-[27px]">
                <div className="flex w-[60px] h-[60px] md:w-[75px] md:h-[75px] items-center justify-center gap-2.5 p-[10px] md:p-[13px] flex-shrink-0 rounded-[30px] md:rounded-[37.5px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[30px] md:before:rounded-[37.5px] before:[background:linear-gradient(141deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <img
                    className="relative w-10 h-10 md:w-12 md:h-12 object-cover"
                    alt={reason.title}
                    src={reason.icon}
                  />
                </div>

                <div className="flex flex-col flex-1 gap-2 md:gap-3 text-center sm:text-left">
                  <h3 className="font-18-semi font-[number:var(--18-semi-font-weight)] text-[#ffffff] text-base md:text-[length:var(--18-semi-font-size)] tracking-[var(--18-semi-letter-spacing)] leading-[var(--18-semi-line-height)] [font-style:var(--18-semi-font-style)]">
                    {reason.title}
                  </h3>

                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0] leading-[normal]">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
