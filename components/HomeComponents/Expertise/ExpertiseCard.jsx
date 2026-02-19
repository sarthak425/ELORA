import CardLayout from "../../Common/CardLayout";
import {
  FaStar,
  FaBullseye,
  FaUsers,
  FaGem,
  FaBoxOpen,
  FaChartLine,
  FaSeedling,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const uspImage = "/images/background.png";
const salesMarketImage = "/images/sales-market-potential.jpeg";
const futureGrowthImage = "/images/Future plan.jpeg";
const target  = "/images/target customers.jpeg";
const iconMap = {
  "Business Overview": FaSeedling,
  "Problem We Solve": FaBullseye,
  "Target Customers": FaUsers,
  "Unique Selling Proposition (USP)": FaStar,
  "Branding & Packaging Strategy": FaBoxOpen,
  "Sales & Market Potential": FaChartLine,
  "Future Growth Plan": TbTargetArrow,
  "Why Invest in ELORA": FaHandHoldingHeart,
  "Vision & Mission": FaGem,
  "Our Product Range": FaBoxOpen,
};

const badgeColor = "bg-amber-100 text-amber-700 badge-glow";

const ExpertiseCard = ({ data }) => {
  const highlightedCardImages = {
    "Unique Selling Proposition (USP)": uspImage,
    "Sales & Market Potential": salesMarketImage,
    "Future Growth Plan": futureGrowthImage,
    "Target Customers": target,
  };

  

  const Icon = iconMap[data.title] || FaStar;
  const highlightImage = highlightedCardImages[data.title];

  if (highlightImage) {
    const imageSrc = highlightImage;
    return (
      <CardLayout className="relative overflow-hidden bg-gradient-to-br from-[#fdf5ec] via-[#f7e8d8] to-[#f2dcc8] border border-[#f3e2c9] shadow-lg rounded-2xl">
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#f6e7d3] blur-3xl opacity-65" />
        <div className="relative z-10 grid md:grid-cols-[1.2fr_0.9fr] items-center gap-4 p-6 md:p-7">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full shadow-inner ${badgeColor}`}>
                <Icon size={16} />
              </span>
              {data.title}
            </div>
            <div className="text-sm text-[#5a5146] leading-6">{data.desc}</div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-40 h-32 sm:w-44 md:w-48 md:h-36">
              <div className="absolute inset-1 rounded-xl bg-white/65 blur-xl" />
              <img
                src={imageSrc}
                alt={data.title}
                className="relative w-full h-full object-cover rounded-xl shadow-md border border-white/60"
              />
            </div>
          </div>
        </div>
      </CardLayout>
    );
  }

  // default style for other cards
  return (
    <CardLayout className="relative overflow-hidden bg-gradient-to-br from-[#fdf5ec] via-[#f7e8d8] to-[#f2dcc8] border border-[#f3e2c9] shadow-lg rounded-2xl">
      <div className="absolute -right-10 -bottom-12 w-40 h-40 bg-[#f6e7d3] blur-3xl opacity-55" />
      <div className="h-full space-y-2 p-8 relative z-10">
        <div className="flex items-center gap-2 text-amber-900 font-bold">
          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full shadow-inner ${badgeColor}`}>
            <Icon size={16} />
          </span>
          {data.title}
        </div>
        <div className="text-sm text-LightGray font-normal">{data.desc}</div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;
