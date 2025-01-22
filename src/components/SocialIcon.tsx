import React from "react";

export default function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="bg-[#F7ECE4] rounded-[4px] w-[34px] h-[34px] grid place-items-center cursor-pointer">{icon}</div>
  );
}
