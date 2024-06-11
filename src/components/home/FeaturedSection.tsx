import React from 'react'
import MaxWidthWrapper from '../shared/MaxWidthWrapper'
import { featuredProducts } from '@/mocks/products'
import FeaturedCard from '../shared/FeaturedCard'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { ArrowDown, ArrowRight } from 'lucide-react'
import ScrollTo from '../shared/ScrollTo/ScrollTo'

const FeaturedSection = () => {
  return (
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
            <div className="w-full flex justify-center lg:justify-end px-4 lg:px-8 items-center gap-4">
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
                to={"testimonials"}
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
        </MaxWidthWrapper>
      </section>
  )
}

export default FeaturedSection
