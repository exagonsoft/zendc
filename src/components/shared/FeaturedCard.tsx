"use client";

import React, { useEffect, useState } from "react";

const FeaturedCard = ({
  title,
  picture,
  price,
  rate = 0,
}: {
  title: string;
  picture: string;
  price: number;
  rate: number;
}) => {
  const [stars, setStars] = useState<Array<string>>([]);

  useEffect(() => {
    const fillStars = () => {
      const newStars = [];
      for (let index = 0; index < rate; index++) {
        newStars.push("⭐");
      }
      setStars(newStars);
    };

    fillStars();
  }, [rate]);

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-950 gap-4">
      <img
        src={picture}
        alt="Product"
        width="300"
        height="300"
        className="h-[300px] w-full object-cover object-center transition-all group-hover:scale-105"
      />
      <div className="w-full flex flex-col gap-0.5 items-start justify-center px-1 mt-2">
        <span className="font-bold text-[.9rem] overflow-hidden text-ellipsis block text-nowrap w-full">{title}</span>
        <span className="text-[.9rem]">{`$ ${price}`}</span>
        <div className="w-full flex gap-0.5 items-center">
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
