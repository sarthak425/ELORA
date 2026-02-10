import React from "react";

const RecommendationItem = ({ data }) => {
  
  return (
    <div className="relative w-full flex gap-4 pb-6 border-b border-white/10 last:border-none">
      
      {/* Avatar */}
      <img
        src={data?.image}
        alt={data?.name}
        className="w-20 h-20 shrink-0 rounded-full border-2 border-Green"
      />

      {/* Content */}
      <div className="w-full">
        
          {data?.name}
        

        <div className="text-xs text-LightGray italic mt-1">
          {data?.designation}
        </div>

        {/* MAIN TEXT */}
<p className="whitespace-pre-line text-sm text-LightGray mt-2 leading-relaxed">
  {data?.view}
</p>


      </div>
    </div>
  );
};

export default RecommendationItem;
