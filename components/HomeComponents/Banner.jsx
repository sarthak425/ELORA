// =====================
// Profile Constants
// =====================


// =====================
// Banner Component
// =====================

import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import BannerLayout from '../Common/BannerLayout';

const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-start py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
          <div className="flex items-center justify-start w-full px-4 xl:px-8 2xl:px-16">
            <div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl text-black font-bold">
                ELORA
              </h1>

              <div className="py-4 font-cascadia-normal text-black text-xs h-20 lg:h-auto">
                <span>
                  <span className="font-bold sm:text-xl xl:text-2xl">
                    <Typewriter
                      options={{
                        strings: ['Naturally Better Skin'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </span>
              </div>
              <Link href="/portfolio" className="button">
                Explore
              </Link>
              
            </div>

            <div className="w-48 h-52 relative hidden md:block">
          </div>
        </div>

        {/* Stats Row */}
        <div className="md:flex gap-4 items-center justify-between w-full px-4 xl:px-8 2xl:px-16 text-Black ">
          <Stat value="250+" label="Customers" />
          <Stat value="50+" label="Return Purchases" />
          <Stat value="600+" label="Product Sold Out" />
          <Stat value="14" label="Categories" />
        </div>
      </div>
    </BannerLayout>
  );
};

const Stat = ({ value, label }) => (
  <div className="flex items-center gap-x-2">
    <span className="text-lg md:text-xl xl:text-2xl text-Green font-bold">{value}</span>
    <span className="text-sm md:text-base xl:text-lg text-black">{label}</span>
  </div>
);

export default Banner;
