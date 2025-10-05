import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const empowermentData = [
  {
    id: "competence",
    title: "Competence",
    subtitle: "Skill Development & Education",
    description: "Building Practical skills for real-world success",
    icon: "/creative-mind-5430680-1.png",
    iconBg:
      "bg-[linear-gradient(90deg,rgba(46,142,238,0.8)_0%,rgba(16,172,218,0.8)_88%)]",
    topBg: "bg-[#e8f6fb]",
    bottomBg: "bg-[#d1ebf4]",
    items: [
      "Workshop & Vocation Training",
      "Financial Literacy Programs",
      "Digital Skills & Technology",
      "Problem-Solving & Critical Thinking",
      "Entrepreneurship Development",
    ],
  },
  {
    id: "confidence",
    title: "Confidence",
    subtitle: "Personal Growth & Resilience",
    description: "Nurturing self-belief and emotional intelligence",
    icon: "/outline---heart.svg",
    iconBg:
      "bg-[linear-gradient(90deg,rgba(237,71,144,0.8)_0%,rgba(243,64,101,0.8)_88%)]",
    topBg: "bg-[#fef3f5]",
    bottomBg: "bg-[#f7e3e8]",
    items: [
      "One-on-One Mentorship Pairing",
      "Leadership Development Summits",
      "Emotional Intelligence Training",
      "Mental Health Awareness",
      "Public Speaking & Communication",
    ],
  },
  {
    id: "connection",
    title: "Connection",
    subtitle: "Community & Support Networks",
    description: "Creating lasting bonds and civic engagement",
    icon: "/connections-295592-1.png",
    iconBg:
      "bg-[linear-gradient(90deg,rgba(156,88,246,0.8)_0%,rgba(111,99,242,0.8)_88%)]",
    topBg: "bg-[#f0f1fe]",
    bottomBg: "bg-[#dfe1fb]",
    items: [
      "Civic Engagement Projects",
      "Peer-to-Peer Collaboration",
      "Professional Networking Events",
      "Community Service Opportunities",
      "Alumni Support Networks",
    ],
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-[50.5px] py-8 md:py-12 px-4">
      <h2 className="max-w-[742.48px] mx-auto self-center rotate-[0.38deg] bg-[linear-gradient(143deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-64-bold font-[number:var(--64-bold-font-weight)] text-transparent text-3xl md:text-5xl lg:text-[length:var(--64-bold-font-size)] text-center tracking-[var(--64-bold-letter-spacing)] leading-[var(--64-bold-line-height)] [font-style:var(--64-bold-font-style)]">
        Our 3 C&apos;s Empowerment Model
      </h2>

      <div className="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 justify-center items-stretch">
        {empowermentData.map((item) => (
          <div key={item.id} className="w-full md:w-[calc(50%-12px)] lg:w-full max-w-[378px] mx-auto flex flex-col">
            <Card
              className={`${item.topBg} rounded-2xl border-t-8 [border-top-style:solid] shadow-[2px_6px_4px_#ffffff40] border-[none] before:content-[''] before:absolute before:inset-0 before:p-2 before:rounded-2xl before:[background:linear-gradient(141deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative`}
            >
              <CardContent className="flex flex-col items-center gap-4 pt-6 pb-6">
                <div
                  className={`flex w-[52px] h-[52px] items-center justify-center gap-2.5 p-2.5 rounded-[26px] ${item.iconBg}`}
                >
                  <img
                    className={`w-8 h-8 ${item.id === "competence" ? "object-cover" : ""} ${item.id === "connection" ? "object-cover" : ""}`}
                    alt={item.title}
                    src={item.icon}
                  />
                </div>

                <div className="flex flex-col items-center gap-3 w-full">
                  <h3 className="font-22-semi font-[number:var(--22-semi-font-weight)] text-[#000000] text-lg md:text-[length:var(--22-semi-font-size)] text-center tracking-[var(--22-semi-letter-spacing)] leading-[var(--22-semi-line-height)] [font-style:var(--22-semi-font-style)]">
                    {item.title}
                  </h3>

                  <p className="font-16-medium font-[number:var(--16-medium-font-weight)] text-[#333333] text-sm md:text-[length:var(--16-medium-font-size)] text-center tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] [font-style:var(--16-medium-font-style)] px-4 font-semibold">
                    {item.subtitle}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`${item.bottomBg} rounded-2xl mt-[-36px] relative z-0`}
            >
              <CardContent className="flex flex-col items-start gap-6 pt-[57px] pb-8 px-6 md:px-11">
                <p className="w-full [font-family:'Roboto',Helvetica] font-semibold text-[#111111] text-sm text-center tracking-[0] leading-[normal]">
                  {item.description}
                </p>

                <ul className="flex flex-col items-start gap-4 w-full mx-auto max-w-[247px]">
                  {item.items.map((listItem, index) => (
                    <li
                      key={index}
                      className={`[font-family:'Roboto',Helvetica] font-medium text-[#111111] text-sm tracking-[0] leading-[normal] ${
                        index === 3 && item.id === "competence"
                          ? "text-center w-full"
                          : index === 3 && item.id === "confidence"
                            ? "text-center w-[185px]"
                            : index === 3 && item.id === "connection"
                              ? "text-center w-[237px]"
                              : ""
                      }`}
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
