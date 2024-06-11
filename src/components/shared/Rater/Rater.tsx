"use client"

import { Star } from 'lucide-react'
import React, { useEffect } from 'react'

const Rater = ({value = 0, onRate}: {value?: number, onRate(target: string, value: any): void}) => {

  useEffect(() => {}, [value])

  return (
    <div className='w-full flex justify-start items-center px-a gap-a'>
      <Star className={`${value >= 1 && 'fill-yellow-300 text-yellow-300'} cursor-pointer`} onClick={() => onRate('rate', 1)}/>
      <Star className={`${value >= 2 && 'fill-yellow-300 text-yellow-300'} cursor-pointer`} onClick={() => onRate('rate', 2)}/>
      <Star className={`${value >= 3 && 'fill-yellow-300 text-yellow-300'} cursor-pointer`} onClick={() => onRate('rate', 3)}/>
      <Star className={`${value >= 4 && 'fill-yellow-300 text-yellow-300'} cursor-pointer`} onClick={() => onRate('rate', 4)}/>
      <Star className={`${value >= 5 && 'fill-yellow-300 text-yellow-300'} cursor-pointer`} onClick={() => onRate('rate', 5)}/>
    </div>
  )
}

export default Rater
