import { Mail as MailIcon, MapPin as MapPinIcon, Phone as PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

const contactInfo = [
  {
    icon: MailIcon,
    text: "info@charityempoweryouth.org",
  },
  {
    icon: PhoneIcon,
    text: "(242) 123-4567",
  },
  {
    icon: MapPinIcon,
    text: "243, Community Yt, UK, 4567",
  },
];

const quickLinks = ["About Us", "Our Programs", "Success Stories", "Contact"];

const programs = [
  "Youth Mentorship",
  "Community Projects",
  "Career Support",
  "Leadership Development",
];

const footerLinks = ["Privacy Policy", "Terms and condition"];

export const FoundersJourneyMilestonesSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#0a2f5c]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-10">
        <div className="flex flex-col gap-[13px]">
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start gap-8 md:gap-[42px] mb-4">
            <div className="flex flex-col w-full md:w-full lg:w-auto lg:max-w-[385px] gap-6 md:gap-8">
              <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="bg-[linear-gradient(141deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_19%,rgba(204,102,0,1)_47%,rgba(250,192,21,1)_78%,rgba(250,192,21,1)_91%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Saira_Stencil_One',Helvetica] font-normal text-2xl md:text-3xl lg:text-4xl tracking-[-0.72px] leading-normal">
                  Allan L Roberts
                </h2>

                <p className="font-16-medium font-[number:var(--16-medium-font-weight)] text-white text-sm md:text-[length:var(--16-medium-font-size)] tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] [font-style:var(--16-medium-font-style)]">
                  Empowering the next generation through mentorship, skills
                  development and community support, together, we&apos;re
                  building tomorrow&apos;s leaders.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                    <span className="[font-family:'Roboto',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-normal break-all">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-8 md:gap-12">
              <nav className="flex flex-col w-full sm:w-[119px] gap-4">
                <h3 className="font-16-semi font-[number:var(--16-semi-font-weight)] text-white text-sm md:text-[length:var(--16-semi-font-size)] tracking-[var(--16-semi-letter-spacing)] leading-[var(--16-semi-line-height)] [font-style:var(--16-semi-font-style)]">
                  Quick Links
                </h3>

                <ul className="flex flex-col gap-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="font-16-medium font-[number:var(--16-medium-font-weight)] text-white text-sm md:text-[length:var(--16-medium-font-size)] tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] [font-style:var(--16-medium-font-style)] hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col w-full sm:w-[186px] gap-4">
                <h3 className="font-16-semi font-[number:var(--16-semi-font-weight)] text-white text-sm md:text-[length:var(--16-semi-font-size)] tracking-[var(--16-semi-letter-spacing)] leading-[var(--16-semi-line-height)] [font-style:var(--16-semi-font-style)]">
                  Our Programs
                </h3>

                <ul className="flex flex-col gap-2">
                  {programs.map((program, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="font-16-medium font-[number:var(--16-medium-font-weight)] text-white text-sm md:text-[length:var(--16-medium-font-size)] tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] [font-style:var(--16-medium-font-style)] hover:underline"
                      >
                        {program}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex flex-col w-full lg:w-auto lg:max-w-[361px] gap-6 md:gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h3 className="font-16-semi font-[number:var(--16-semi-font-weight)] text-white text-sm md:text-[length:var(--16-semi-font-size)] tracking-[var(--16-semi-letter-spacing)] leading-[var(--16-semi-line-height)] [font-style:var(--16-semi-font-style)]">
                    Stay Connected
                  </h3>

                  <p className="font-16-medium font-[number:var(--16-medium-font-weight)] text-white text-sm md:text-[length:var(--16-medium-font-size)] tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] [font-style:var(--16-medium-font-style)]">
                    Get updates on our programs and success stories.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="w-full sm:w-[217px] h-[46px] bg-[#ffffffcc] rounded-lg font-14-regular font-[number:var(--14-regular-font-weight)] text-black text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]"
                  />

                  <Button className="w-full sm:w-32 h-[46px] bg-[linear-gradient(138deg,rgba(255,255,255,1)_0%,rgba(204,102,0,1)_52%,rgba(250,192,21,1)_89%)] rounded-lg font-16-semi font-[number:var(--16-semi-font-weight)] text-white text-[length:var(--16-semi-font-size)] tracking-[var(--16-semi-letter-spacing)] leading-[var(--16-semi-line-height)] [font-style:var(--16-semi-font-style)] hover:opacity-90">
                    Subscribe
                  </Button>
                </div>
              </div>

              <div className="flex flex-col w-full sm:w-[168px] gap-4">
                <h3 className="font-16-semi font-[number:var(--16-semi-font-weight)] text-white text-sm md:text-[length:var(--16-semi-font-size)] tracking-[var(--16-semi-letter-spacing)] leading-[var(--16-semi-line-height)] [font-style:var(--16-semi-font-style)]">
                  Follow us:
                </h3>

                <img
                  className="w-full max-w-[168px]"
                  alt="Social media links"
                  src="/frame-1410552652.svg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Separator className="bg-white/20" />

            <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 w-full">
                <p className="font-14-semi font-[number:var(--14-semi-font-weight)] text-white text-xs md:text-[length:var(--14-semi-font-size)] tracking-[var(--14-semi-letter-spacing)] leading-[var(--14-semi-line-height)] [font-style:var(--14-semi-font-style)] text-center md:text-left">
                  © 2025 Charity empower youth organization. All rights
                  reserved.
                </p>

                <div className="flex items-center gap-4">
                  {footerLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-14-semi font-[number:var(--14-semi-font-weight)] text-white text-xs md:text-[length:var(--14-semi-font-size)] tracking-[var(--14-semi-letter-spacing)] leading-[var(--14-semi-line-height)] [font-style:var(--14-semi-font-style)] hover:underline whitespace-nowrap"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <Separator className="bg-white/20 md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
