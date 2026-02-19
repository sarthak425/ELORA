import React from "react";
import CardLayout from "../../Common/CardLayout";

const RecommendationItem = ({ data }) => {
  const lines = data?.view
    ? data.view.split("\n").map((line) => line.trim()).filter(Boolean)
    : [];

  return (
    <CardLayout className="h-full w-full">
      <div className="w-full p-4 md:p-8 bg-gradient-to-r from-[#fdf2e9] via-[#f7e8d8] to-[#f2dcc8] border border-[#f3e2c9] rounded-xl shadow-sm">
        <div className="md:flex md:items-start md:gap-6">
          <div className="md:flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-DarkGray/30 pb-4">
              <img
                src={data?.image}
                alt={data?.name}
                className="w-20 h-20 shrink-0 rounded-full border-2 border-red object-cover"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-amber-900">{data?.name}</h3>
                <p className="text-sm text-[#6a4b2a] italic mt-1">{data?.designation}</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="inline-block rounded-md bg-amber-100/80 px-3 py-1 text-xs font-semibold text-amber-900 shadow-sm">
                ABOUT ELORA
              </div>
              <div className="mt-4 space-y-3 text-[#5a3c1a] leading-relaxed text-base">
                {lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block md:w-2/4 lg:w-2/4 pt-12">
            <img
              src="/images/soapimage.jpeg"
              alt="soap"
              className="w-full rounded-lg shadow-md object-cover border border-white/40"
            />
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default RecommendationItem;
