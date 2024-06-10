"use client";

import { Eye, LucideShoppingCart, ShoppingCart, ShoppingCartIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Icons } from "./Icons";

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
      <div className="w-full flex flex-col gap-0.5 items-start justify-center px-1 mt-2 relative">
        <span className="absolute p-1 px-2 rounded-lg text-[.7rem]  gap-0.5 justify-center items-center bg-slate-100 shadow-sm -mt-10 top-0 left-2 cursor-pointer hidden group-hover:flex transition-all hover:shadow-lg hover:bg-slate-300">
          <Eye className="h-5 w-5" />
          Quick look
        </span>
        <span className="font-bold text-[.9rem] overflow-hidden text-ellipsis block text-nowrap w-full">
          {title}
        </span>
        <span className="text-[.9rem]">{`$ ${price}`}</span>
        <div className="w-full flex gap-0.5 items-center">
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
        <button title="Add to Bascket" type="button" className="absolute right-2 bottom-2 hover:shadow-xl hover:bg-slate-300 transition-all rounded-full p-1.5"><Icons.addToCard className="w-6 h-6" /></button>
      </div>
    </div>
  );
};

export default FeaturedCard;
