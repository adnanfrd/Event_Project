import CTASection from "@/components/CTASection";
import FeaturedEvents from "@/components/FeaturedEvents";
import HeroHome from "@/components/HeroHome";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <div>
      <HeroHome/>
     <FeaturedEvents/>
     <PopularCategories/>
     <CTASection/>
    </div>
  );
}
