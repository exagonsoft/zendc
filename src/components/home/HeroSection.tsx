import Image from 'next/image'
import React from 'react'
import MaxWidthWrapper from '../shared/MaxWidthWrapper'
import { ArrowDown, ArrowRight, Check, Star } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import ScrollTo from '../shared/ScrollTo/ScrollTo'

const HeroSection = () => {
  return (
    <section id="hero" className="">
    <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
      <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="relative w-fit tracking-tight text-balance mt-6 font-bold !leading-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl">
            Shop with <span className="font-bold">ZendC</span> and Send{" "}
            <span className="bg-[hsl(var(--primary))] px-2 rounded-md text-white">
              Directly
            </span>{" "}
            to Cuba
          </h1>
          <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
            Discover our carefully curated selection of high-quality
            products that can be{" "}
            <span className="font-semibold">shipped directly</span> to your
            loved ones in Cuba at low prices.
          </p>
          <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
            <li className="flex gap-1.5 items-center text-left w-full">
              <Check className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
              Hight-quality products
            </li>
            <li className="flex gap-1.5 items-center text-left w-full">
              <Check className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
              100% Warrantied Delivery
            </li>
            <li className="flex gap-1.5 items-center text-left w-full">
              <Check className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
              100% Cash back on delays
            </li>
            <li className="flex gap-1.5 items-center text-left w-full">
              <Check className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
              Market lowest prices
            </li>
          </ul>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="flex -space-x-4">
              <img
                width={10}
                height={10}
                className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                alt="user image"
                src="/users/user-1.webp"
              />
              <img
                width={10}
                height={10}
                className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                alt="user image"
                src="/users/user-2.webp"
              />
              <img
                width={10}
                height={10}
                className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                alt="user image"
                src="/users/user-3.webp"
              />
              <img
                width={10}
                height={10}
                className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                alt="user image"
                src="/users/user-4.webp"
              />
              <img
                width={10}
                height={10}
                className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                alt="user image"
                src="/users/user-5.webp"
              />
            </div>
            <div className="flex flex-col justify-between items-center sm:items-start h-auto lg:h-10">
              <div className="flex gap-0.5 items-center justify-center h-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="">
                <span className="font-semibold">+1.250</span> happy
                customers
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8 gap-4">
            <Link
              href={"/api/auth/logout"}
              className={buttonVariants({
                size: "sm",
                className: "flex items-center gap-1",
              })}
            >
              Start Shopping <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
            <ScrollTo
              to={"featured"}
              smooth={true}
              offset={50}
              classes={buttonVariants({
                size: "sm",
                className: "flex items-center gap-1 font-bold",
                variant: "link",
              })}
              text="Continue"
            >
              <div className="">
                Continue{" "}
                <ArrowDown className="ml-1.5 h-5 w-5 updown font-bold" />
              </div>
            </ScrollTo>
          </div>
        </div>
      </div>
      <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
        <div className="relative md:max-w-xl">
          <img
            src="/logo.webp"
            alt="ZendC"
            width={320}
            height={320}
            className=" w-80 select-none"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
  )
}

export default HeroSection
