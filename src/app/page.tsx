import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div className="bg-slate-50 ">
      <HeroSection />
      <FeaturedSection />
      {/* value proposition section */}
      <TestimonialSection />
    </div>
  );
}
