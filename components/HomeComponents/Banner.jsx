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
      <div className="absolute inset-0 z-20 flex flex-col w-full h-full">
        <div className="w-full max-w-6xl px-4 xl:px-8 2xl:px-16 flex flex-col gap-12 pt-16 pb-12 justify-between h-full">
          <div className="flex items-start justify-between w-full">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text- xl:text-8xl text-white font-bold font-cascadia-normal">
                ELORA
              </h1>

              <div className="font-cascadia-normal text-black text-xs sm:text-2 lg:text-base min-h-[5rem] flex items-center">
                <span className="font-bold sm:text-3xl xl:text-3xl">
                  <Typewriter
                    options={{
                      strings: ['Naturally Better Skin'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <Link href="/portfolio" className="button !bg-rose-500 hover:!bg-red-500 w-fit sm:text-2xl xl:text-2xl min-h-[6rem]">
                Explore
              </Link>
            </div>

            <div className="w-48 h-52 relative hidden md:block" />
          </div>

          {/* Stats Row */}
          <div className="flex flex-nowrap gap-11 items-start justify-between w-full text-Black text-left  pb-2 text-52px">
            <Stat value="250+" label="Customers" />
            <Stat value="50+" label="Return Purchases" />
            <Stat value="600+" label="Product Sold Out" />
            <Stat value="14" label="Categories" />
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

const Stat = ({ value, label }) => (
  <div className="flex items-center gap-x-2">
    <span className="text-lg md:text-xl xl:text-2xl text-red-400 font-bold">{value}</span>
    <span className="text-sm md:text-base xl:text-lg text-black">{label}</span>
  </div>
);

export default Banner;
