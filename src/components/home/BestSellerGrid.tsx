"use client"

import { cn, splitArray } from '@/lib/utils';
import { bestSellers } from '@/mocks/bestseller';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import BestSellerCard from '../shared/BestSellerCard';

const ReviewColumn = ({ reviews, className, reviewClassName, msPerPixel = 0 }: { reviews: { image: string, sales: number }[], className?: string,  reviewClassName?: (reviewIndex: number) => string, msPerPixel?: number }) => {
    const columnRef = useRef<HTMLDivElement>(null);
    const [columnHeight, setColumnHeight] = useState(0);
    const duration = `${columnHeight * msPerPixel}ms`

    useEffect(() => {
        if (!columnRef.current) return;
        const resizeObserver = new window.ResizeObserver(() => {
            setColumnHeight(columnRef.current?.offsetHeight ?? 0);
        });

        resizeObserver.observe(columnRef.current);

        return () => {
            resizeObserver.disconnect();
        }
    }, [])

    return <div ref={columnRef} className={cn("animate-marquee space-y-8 py-4", className)} style={{ '--marquee-duration': duration } as React.CSSProperties}>
        {reviews.concat(reviews)[0]?.image && reviews.concat(reviews).concat(reviews).concat(reviews).map((bestSeller, index) => (
            <BestSellerCard key={index} image={bestSeller?.image} sales={bestSeller?.sales} className={reviewClassName?.(index % reviews.length)} />
        ))}
    </div>
}

const BestSellerGrid = () => {
    const _products = bestSellers;
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.4 });
    const columns = splitArray(_products, 3);

    const column1 = columns[0];
    const column2 = columns[1];
    const column3 = columns[2];

    return (
        <div ref={containerRef} className='relative -mx-4 mt-8 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-12 md:grid-cols2 lg:grid-cols-3'>
            {isInView && <>
                <ReviewColumn reviews={[...column1, ...column3, ...column2]}  msPerPixel={10} />
                <ReviewColumn reviews={[...column2, ...column3, ...column1]} className='hidden md:block'  msPerPixel={15} />
                <ReviewColumn reviews={[...column1, ...column3, ...column2]} className='hidden lg:block'  msPerPixel={13} />
            </>}
            <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100'/>
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100'/>
        </div>
    )
}

export default BestSellerGrid
