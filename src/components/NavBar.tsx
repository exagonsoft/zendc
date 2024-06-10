import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const NavBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transitions-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="flex z-40 font-semibold items-center">
            <img src="/logo.png" alt="ZendC" className="w-10 h-10" />
            <span className="text-[hsl(var(--primary))] font-bold">ZendC</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href={"/api/auth/logout"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </Link>
                {isAdmin && (
                  <Link
                    href={"/api/auth/logout"}
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                )}
                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <Link
                  href={"/api/auth/logout"}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Start Shopping <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/api/auth/register"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>
                <Link
                  href={"/api/auth/register"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <Link
                  href={"/api/auth/logout"}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Start Shopping <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
