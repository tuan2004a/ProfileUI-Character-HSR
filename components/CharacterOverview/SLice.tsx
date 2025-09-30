//SLice.tsx

import React, { useEffect, useRef } from 'react';
import { FaLocationArrow, FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Character } from "@/types/CharacterTypes";
import BtnArrowAlt from "@/components/common/BtnArrowAlt";
import { gsap } from "gsap";

interface SLiceData {
	itemData: Character;
}

const SLice: React.FC<SLiceData> = ({ itemData }) => {

	return (
		<div className="max-w-full h-75 rounded-4xl relative bg-cover bg-center overflow-hidden">
			<div className="absolute -left-50 translate-y-5 size-full z-0 after:absolute after:bg-white after:size-[2000px] after:translate-x-50 after:-translate-y-10 after:opacity-90 after:inset-0 after:z-10">
				<img className="scale-200 object-cover -translate-x-55" src={itemData?.character} alt="" />
			</div>

			{/* bg-dark */}
			<div className="absolute right-40 top-0 h-full w-45 bg-black -skew-x-33">{/* <img className="absolute -right-40 h-full object-contain object-center" src="/img/bg.png" alt="" /> */}</div>

			{/* char */}
			<img loading="lazy" className="absolute right-20 h-full -translate-y-5.5 scale-115 z-40" src={itemData?.character} alt="" />

			{/* deco */}
			<img loading="lazy" className="absolute h-4/5 right-2 top-1/2 -translate-y-1/2 z-10" src="#" alt="" />

			{/* information */}
			<div className="absolute left-25 top-1/2 -translate-y-1/2 font-Tahoma z-50">
				<h2 className="text-6xl leading-none font-HYWenHei font-normal">{itemData?.name}</h2>
				<p className="max-w-sm font-medium pt-4 pb-3.5 ">"{itemData?.description}"</p>
				<button className="flex items-center gap-1 px-0.5 !font-semibold relative after:absolute after:bottom-0 after:left-0  after:h-0.5 after:w-[60%] after:bg-black hover:after:w-full after:transition-all after:duration-300">
					Read More
					<FaLocationArrow />
				</button>
			</div>
		</div>
	);
};

export default SLice
