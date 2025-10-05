import { Star as StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Jemes Robinson",
    image: "/image-5.png",
    imageClass: "object-cover",
    quote:
      '"EmpowerYouth didn\'t just teach me skills – they helped me discover my voice. Today, I run my own organization helping other young women in STEM."',
  },
  {
    name: "Penny Johnson",
    image: "/image-1.png",
    imageClass: "",
    quote:
      '"The mentorship I received changed everything. I went from struggling in school to launching my first business at 19."',
  },
  {
    name: "Hermione Granger",
    image: "/image-2.png",
    imageClass: "object-cover",
    quote:
      '"Working with EmpowerYouth has shown me the incredible potential when young people are given the right support and opportunities."',
  },
];

const bottomImages = [
  { src: "/image-3.png", left: "left-0" },
  { src: "/image-4.png", left: "left-6" },
  { src: "/image-5.png", left: "left-12" },
  { src: "/image-6.png", left: "left-[72px]" },
];

export const GuestExperiencesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-12 relative py-8 md:py-12 px-4">
      <div className="flex flex-col items-center gap-3 relative w-full">
        <h2 className="relative w-fit bg-[linear-gradient(141deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-64-bold font-[number:var(--64-bold-font-weight)] text-transparent text-3xl md:text-5xl lg:text-[length:var(--64-bold-font-size)] tracking-[var(--64-bold-letter-spacing)] leading-[var(--64-bold-line-height)] [font-style:var(--64-bold-font-style)]">
          Testimonials
        </h2>

        <p className="relative max-w-[785px] px-4 text-center font-28-bold font-[number:var(--28-bold-font-weight)] text-[#ffffff] text-xl md:text-2xl lg:text-[length:var(--28-bold-font-size)] tracking-[var(--28-bold-letter-spacing)] leading-[var(--28-bold-line-height)] [font-style:var(--28-bold-font-style)]">
          Our guests speak for us — check out their experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1182px]">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col items-start justify-center gap-2.5 p-6 bg-[#ffffff80] rounded-xl border-[none] before:content-[''] before:absolute before:inset-0 before:p-[3px] before:rounded-xl before:[background:linear-gradient(141deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="flex flex-col items-start gap-3 p-0 w-full">
              <div className="flex flex-col items-start gap-1.5 relative">
                <img
                  className={`relative w-[38px] h-[38px] ${testimonial.imageClass}`}
                  alt={testimonial.name}
                  src={testimonial.image}
                />

                <div className="relative [font-family:'Poppins',Helvetica] font-semibold text-[#000000] text-sm tracking-[0] leading-[normal]">
                  {testimonial.name}
                </div>

                <img
                  className="absolute top-[33px] left-0 w-12 h-12"
                  alt="Double quotes"
                  src="/double-quotes-l--streamline-remix-1.svg"
                />
              </div>

              <p className="relative font-14-medium font-[number:var(--14-medium-font-weight)] text-black text-[length:var(--14-medium-font-size)] tracking-[var(--14-medium-letter-spacing)] leading-[var(--14-medium-line-height)] [font-style:var(--14-medium-font-style)]">
                {testimonial.quote}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-6 relative">
        <div className="flex items-center gap-3 relative">
          <div className="relative w-[104px] h-8">
            {bottomImages.map((img, index) => (
              <img
                key={index}
                className={`absolute top-0 ${img.left} w-8 h-8 border border-solid border-[#ffffff] object-cover rounded-full`}
                alt="Profile"
                src={img.src}
              />
            ))}
          </div>

          <div className="inline-flex items-center gap-2 relative">
            <div className="inline-flex items-center gap-1 relative">
              {[...Array(4)].map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-[15.22px] h-[14.47px] fill-[#fac215] text-[#fac215]"
                />
              ))}
            </div>

            <div className="relative w-fit font-14-medium font-[number:var(--14-medium-font-weight)] text-[#fac215] text-[length:var(--14-medium-font-size)] tracking-[var(--14-medium-letter-spacing)] leading-[var(--14-medium-line-height)] [font-style:var(--14-medium-font-style)]">
              4.5 on Review
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="h-auto px-6 md:px-[94px] py-[9px] rounded-md border-2 border-solid border-[#ffffff] bg-transparent hover:bg-[#ffffff1a] [font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-sm tracking-[0] leading-[normal]"
        >
          Join Our Community
        </Button>
      </div>
    </section>
  );
};
