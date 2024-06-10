import React from "react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Icons } from "../shared/Icons";
import { mockTestimonials } from "@/mocks/testimonials";
import Carousel from "../shared/Carousel/Carousel";

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
        <div className="mx-auto flex max-w-2xl px-4 lg:mx-0 lg:max-w-none  gap-y-16">
          <Carousel slides={testimonials} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TestimonialSection;
