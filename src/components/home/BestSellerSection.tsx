import React from 'react'
import MaxWidthWrapper from '../shared/MaxWidthWrapper'
import BestSellerGrid from './BestSellerGrid'

const BestSellerSection = () => {
  return (
    <section id="popular" className="bg-slate-100 py-24 overflow-hidden">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-full">
          <h2 className="mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl md:text-5xl text-gray-900">
            Best seller Products
          </h2>
          <p className="text-lg w-full max-w-prose text-center text-balance md:text-wrap">
            Some of the most requested products for our clients
          </p>
        </div>
        <BestSellerGrid />
      </MaxWidthWrapper>
    </section>
  )
}

export default BestSellerSection
