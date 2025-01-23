import { MenuCardProps } from "../interface/NavItem";

export default function MenuCard({
  title,
  image,
  category,
  likes,
  price,
}: MenuCardProps) {
  return (
    <div className="bg-white rounded-[13px] shadow-md p-2 border-[0.58px] border-white w-[244px]">
      <div className="bg-[#F4F3E8] grid place-items-center rounded-[32px] h-[161px]">
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-2 w-[110px] h-[110px] object-cover"
        />
      </div>
      <h3 className="text-[13px] font-[700] leading-[18px] tracking-[1.5px] mt-3">
        {title}
      </h3>
      <span className="bg-[#D6D5CA] p-[4px] rounded-[14px] text-[7px] tracking-[0.1%]">
        🍲 {category}
      </span>
      <div className="flex items-center my-4">
        <svg
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.60048 6.72895H6.63071C6.91016 6.72895 7.14921 6.5606 7.25022 6.31818L8.26703 3.94451C8.29733 3.86707 8.31417 3.78626 8.31417 3.69872V3.02534C8.31417 2.65498 8.01114 2.35196 7.64078 2.35196H5.51626L5.83612 0.813278L5.84622 0.705536C5.84622 0.567493 5.78898 0.43955 5.69807 0.348643L5.34118 -0.00488281L3.12238 2.21391C3.00117 2.33512 2.9271 2.50347 2.9271 2.68865V6.05556C2.9271 6.42593 3.23012 6.72895 3.60048 6.72895ZM3.60048 2.68865L5.06173 1.22741L4.61056 3.02534H7.64078V3.69872L6.63071 6.05556H3.60048V2.68865ZM0.906952 2.68865H2.25372V6.72895H0.906952V2.68865Z"
            fill="#858786"
          />
        </svg>

        <p className="text-[#858786] text-[8px] mr-2"> {likes} picks</p>
        <svg
          width="4"
          height="3"
          viewBox="0 0 4 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.04017" cy="1.69874" r="1.15437" fill="#858786" />
        </svg>
        <p className="text-[#858786] text-[8px] ml-2">{`Approx. ${price}`}</p>
      </div>
    </div>
  );
}
