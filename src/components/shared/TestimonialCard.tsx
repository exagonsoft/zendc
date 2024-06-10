"use client";
import React, { useEffect, useState } from "react";

const TestimonialCard = ({
  name,
  picture,
  location,
  testimonial,
  rate = 0,
}: {
  name: string;
  picture: string;
  location: string;
  testimonial: string;
  rate?: number;
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
    <div
      className={`w-full bg-white relative rounded-md shadow-md transition-all flex flex-col gap-4 p-4 min-h-[14rem] h-max hover:shadow-lg hover:scale-[1.05]`}
    >
      <div className="w-full flex justify-start items-center gap-4 transition-all">
        <img src={picture} alt="User" className="w-12 h-12 rounded-full transition-all" />
        <div className="w-full flex flex-col justify-center items-start transition-all">
          <h2 className={`font-bold transition-all`}>{name ? name : ""}</h2>
          <span className={`text-[.8rem] transition-all`}>{location}</span>
        </div>
      </div>
      <p className={`text-[.8rem] min-h-[6rem] transition-all`}>{`"${testimonial ? testimonial : ""}"`}</p>
      <div className="w-full flex gap-0.5 items-center min-h-4">
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
