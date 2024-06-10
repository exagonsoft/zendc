import FeaturedCard from "@/components/shared/FeaturedCard";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ScrollTo from "@/components/shared/ScrollTo/ScrollTo";
import { buttonVariants } from "@/components/ui/button";
import { featuredProducts } from "@/mocks/products";
import { ArrowDown, ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50 ">
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
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                    Hight-quality products
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                    100% Warantied Delivery
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                    100% Cash back on delays
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                    Market lower pricess
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt="user image"
                    src="/users/user-1.png"
                  />
                  <img
                    className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt="user image"
                    src="/users/user-2.png"
                  />
                  <img
                    className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt="user image"
                    src="/users/user-3.png"
                  />
                  <img
                    className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt="user image"
                    src="/users/user-4.jpg"
                  />
                  <img
                    className="inline-4 h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt="user image"
                    src="/users/user-5.jpg"
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
                    className: "flex items-center gap-1",
                    variant: "link",
                  })}
                  text="Continue bellow"
                >
                  <div className="">
                    Continue bellow{" "}
                    <ArrowDown className="ml-1.5 h-5 w-5 updown" />
                  </div>
                </ScrollTo>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/logo.png" alt="ZendC" className=" w-80 select-none" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section id="featured" className="">
        <MaxWidthWrapper className="pb-24 pt-4 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-8 xl:pt-16 lg:pb-52">
          <div className="w-full flex flex-col gap-4 px-6 lg:px-0 lg:pt-4">
            <div className="w-full flex flex-col gap-2 justify-start items-center">
              <h1 className="relative w-fit tracking-tight text-balance text-center mt-6 font-bold !leading-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl">
                Featured Products for Cuba
              </h1>
              <p className="text-lg lg:pr-10 max-w-prose text-center text-balance md:text-wrap">
                Discover our latest collection of high-quality products that can
                be shipped directly to your loved ones in Cuba.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {featuredProducts.map((product, index) => (
                <FeaturedCard
                key={`product-${index}`}
                  title={product.title}
                  picture={product.image}
                  price={product.price}
                  rate={product.rate}
                />
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
