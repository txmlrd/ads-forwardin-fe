import React from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  yearly: string;
  button: string;
  cardClassName?: string;
  buttonClassName?: string;
  showYearly?: boolean;
  month: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, yearly, button, cardClassName = "", buttonClassName = "", showYearly = false, month }) => {
  return (
    <div className={`flex flex-col max-w-[244.81px] p-4 rounded-xl ${cardClassName}`}>
      <h1 className="text-[20.26px] font-bold">{title}</h1>
      <p className="text-[10.13px] font-bold mt-2">{description}</p>
      <h1 className="text-[20.26px] font-bold mt-2">
        {price}
        <span className="text-[11.92px] font-normal"> {month}</span>
      </h1>
      {showYearly && yearly && <h2 className="mb-2 text-[11.82px] font-inter text-gray-400 font-bold">{yearly}</h2>}
      <button className={`bg-biru text-[14px] py-2 text-white rounded-md ${buttonClassName}`}>{button}</button>
      <div className="flex flex-col font-inter font-bold text-[11.82px] space-y-2 mt-5">
        <div className="flex items-center space-x-2">
          <img src="/svg/autoreply.svg" alt="Auto Reply" />
          <span className="text-black">100 Auto Reply</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/svg/broadcast.svg" alt="Broadcast" />
          <span className="text-black">500 Broadcast</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/svg/campaign.svg" alt="Campaign" />
          <span className="text-black">50 Campaign</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/svg/contact.svg" alt="Contact" />
          <span className="text-black">500 Contact</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/svg/device.svg" alt="Device" />
          <span className="text-black">50 Device</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/svg/excel.svg" alt="Excel" />
          <span className="text-black">Excel / CSV Contact Import</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/svg/sync.svg" alt="Sync" />
          <span className="text-black">Google Contact Sync</span>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
