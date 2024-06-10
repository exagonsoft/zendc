import React from "react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Icons } from "../shared/Icons";
import { mockTestimonials } from "@/mocks/testimonials";
import Carousel from "../shared/Carousel/Carousel";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowDown, VoteIcon } from "lucide-react";
import ScrollTo from "../shared/ScrollTo/ScrollTo";

const TestimonialSection = () => {
  const testimonials = mockTestimonials;
  return (
    <section id="testimonials" className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl md:text-5xl text-gray-900">
            What our{" "}
            <span className="relative px-2">
              customers{" "}
              <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-[hsl(var(--primary))]" />
            </span>{" "}
            say
          </h2>
          <img
            src="/logo.webp"
            alt="ZendC"
            className="w-24 order-0 lg:order-2"
          />
        </div>
        <Carousel slides={testimonials} />
        <div className="flex justify-between items-center mt-8 gap-4">
            <Link
              href={"/api/auth/logout"}
              className={buttonVariants({
                size: "sm",
                className: "flex items-center gap-1",
              })}
            >
              Rate your experience <VoteIcon className="ml-1.5 h-5 w-5" />
            </Link>
            <ScrollTo
              to={"popular"}
              smooth={true}
              offset={50}
              classes={buttonVariants({
                size: "sm",
                className: "flex items-center gap-1 font-bold",
                variant: "link",
              })}
              text="Continue bellow"
            >
              <div className="">
                Continue bellow{" "}
                <ArrowDown className="ml-1.5 h-5 w-5 updown font-bold" />
              </div>
            </ScrollTo>
          </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TestimonialSection;
