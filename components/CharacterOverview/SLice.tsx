import React from 'react';
import { FaLocationArrow } from "react-icons/fa";



const SLice = () => {
    return (
		<div className="size-full h-75 rounded-4xl shadow-lg relative bg-cover bg-center" style={{ backgroundImage: `url("/img/banner/bg-Psyche.png")` }}>
			{/* bg-dark */}
			<img className="absolute right-15 h-full object-contain object-center brightness-75" src="/img/bg-dark.png" alt="" />

			{/* char */}
			<img className="absolute right-20 h-full -translate-y-5.5 scale-115" src="/img/character/Berenica.png" alt="" />

			{/* deco */}
			<img className="absolute h-4/5 right-2 top-1/2 -translate-y-1/2" src="/img/deco01.png" alt="" />

			{/* information */}
			<div className="absolute left-25 top-1/2 -translate-y-1/2">
				<h2 className="text-5xl leading-none">Psyche</h2>
				<p className="max-w-sm font-medium pt-5 pb-3.5">"The courtyard at the Hypnos' House looked a bit barren with just a few trees, so I planted some white flowers there."</p>
				<button className="flex items-center gap-1 px-0.5 !font-semibold relative after:absolute after:bottom-0 after:left-0  after:h-0.5 after:w-[60%] after:bg-black hover:after:w-full after:transition-all after:duration-300">
					Read More
					<FaLocationArrow />
				</button>
			</div>
		</div>
	);
}

export default SLice
