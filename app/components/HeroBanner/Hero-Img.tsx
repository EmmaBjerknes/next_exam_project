"use client";
import Image from "next/image";
import heroBannerImg from "@/public/heroBannerImg.jpg";

const HeroImage = () => {
  return (
    <div className="relative">
      <div className="bg-[var(--badge-primary)] flex justify-center text-center items-center absolute rounded-full right-3 top-3 h-14 w-14 text-sm md:h-32 md:w-32 md:text-2xl">
        <span>Vår-Rea!</span>
      </div>

      <Image
        src={heroBannerImg}
        alt="Descriptive text for image"
        width={1694}
        height={1920}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
        priority
      />
    </div>
  );
};

export default HeroImage;
