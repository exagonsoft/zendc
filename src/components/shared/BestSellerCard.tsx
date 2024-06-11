import { cn } from '@/lib/utils'
import { Star, Trophy } from 'lucide-react'
import React, { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    image: string,
    sales: number
}

const BestSellerCard = ({ image, sales, className, ...props }: CardProps) => {
    const POSSIBLE_ANIMATION_DELAYS = [
        '0s',
        '0.1s',
        '0.2s',
        '0.3s',
        '0.4s',
        '0.5s',
    ]

    const animationDelay = POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)];
    return (
        <div className={cn('animate-fade-in rounded-md bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5 relative', className)} style={{ animationDelay }} {...props}>
            <div className="absolute left-3 shadow-lg top-4 flex justify-center bg-green-500 items-center gap-3 rounded-lg px-4 py-1">{sales}<Trophy className={`${sales > 500 ? (sales > 1000 ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-200 text-slate-200') : 'fill-yellow-700 text-yellow-700'}`} /></div>
            <img src={image} alt="product" className="" />
        </div>
    )
}

export default BestSellerCard
