"use client";

import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Icons } from "../shared/Icons";
import { mockTestimonials } from "@/mocks/testimonials";
import Carousel from "../shared/Carousel/Carousel";
import { buttonVariants } from "../ui/button";
import { ArrowDown, VoteIcon } from "lucide-react";
import ScrollTo from "../shared/ScrollTo/ScrollTo";
import Rater from "../shared/Rater/Rater";
import { Testimonial } from "@/types/testimonal";

const FeedBackDialog = ({
  onSubmitResponse,
  onCancelResponse,
}: {
  onSubmitResponse: Function;
  onCancelResponse: Function;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [testimonialData, setTestimonialData] = useState<Testimonial>();

  const updateTestimonialData = (target: string, value: any) => {
    setTestimonialData((prevData) => ({...prevData!, [target]: value}));
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    unFreezeScreen();
    onSubmitResponse();
  };

  const onCancel = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    unFreezeScreen();
    onCancelResponse();
  };

  const freezeScreen = () => {
    document.body.style.overflowY = "hidden";
  };

  const unFreezeScreen = () => {
    document.body.style.overflowY = "visible";
  };

  useEffect(() => {
    freezeScreen();
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 h-screen z-[200] flex items-center justify-center transition-all">
      <div className="absolute top-0 left-0 z-30 backdrop-blur-md w-screen h-screen" ></div>
      <div className="bg-white relative z-40 rounded-lg shadow-sm p-6 dark:bg-gray-950 flex h-max w-[90%] lg:w-[30%]">
        <form
          className="space-y-4 gap-0 flex flex-col w-full"
          onSubmit={onSubmit}
          ref={formRef}
        >
          <div className="grid gap-2">
            <label htmlFor="name">Username/Email</label>
            <input id="name" placeholder="Enter your username" required/>
          </div>
          <div className="grid gap-2">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Enter your location"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="rating">Rating</label>
            <Rater value={testimonialData?.rate} onRate={(target, value) => updateTestimonialData(target, value)}/>
          </div>
          <div className="grid gap-2">
            <label htmlFor="feedback">Feedback</label>
            <textarea id="feedback" placeholder="Share your feedback" required/>
          </div>
          <div className="flex justify-between items-center w-full">
            <button
              type="button"
              className={buttonVariants({
                size: "sm",
                className: "flex items-center gap-1 bg-red-900 min-w-[8rem]",
              })}
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={buttonVariants({
                size: "sm",
                className: "flex items-center gap-1 min-w-[8rem]",
              })}
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = mockTestimonials;
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (): void => {
    setShowDialog(false);
  };

  const handleCancel = (): void => {
    setShowDialog(false);
  };

  return (
    <section id="testimonials" className="bg-slate-100 py-24">
      {showDialog && (
        <FeedBackDialog
          onSubmitResponse={handleSubmit}
          onCancelResponse={handleCancel}
        />
      )}
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
          <button
            className={buttonVariants({
              size: "sm",
              className: "flex items-center gap-1",
            })}
            onClick={() => setShowDialog(true)}
          >
            Rate your experience <VoteIcon className="ml-1.5 h-5 w-5" />
          </button>
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
