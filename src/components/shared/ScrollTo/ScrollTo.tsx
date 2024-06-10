"use client";

import React, { ReactNode } from "react";
import "./scrollto.css";

const ScrollTo = ({
  to,
  text,
  smooth = false,
  classes = "",
  onNavigate,
  children = null,
  offset = 0,
  onClick,
}: {
  to: string;
  text: string;
  smooth?: boolean;
  classes?: string;
  onNavigate?: (id: string) => {};
  children?: ReactNode;
  offset?: number;
  onClick?: () => {};
}) => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (section) {
      if(offset < 0)
         console.log(offset);
         
      const offsetTop = section.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: smooth ? "smooth" : "instant",
      });
    }
    if (onNavigate) {
      onNavigate(id);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href="/"
      className="min-w-[6rem] flex sm:justify-center justify-start items-center text-glow gap-2"
      onClick={(e) => handleScroll(e, to)}
    >
      {children ? (
        children
      ) : (
        <span
          className={`${classes} underline-offset-4 scroll-transitions font-extrabold`}
        >
          {text}
        </span>
      )}
    </a>
  );
};

export default ScrollTo;
