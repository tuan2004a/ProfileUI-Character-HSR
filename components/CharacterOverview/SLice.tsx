import React from 'react';
import { FaLocationArrow } from "react-icons/fa";



const SLice = () => {
    return (
		<div className="size-full h-75 rounded-4xl shadow-lg relative bg-cover bg-center" style={{ backgroundImage: `url("/img/themeChar/bg-Berenica.png")` }}>
			<img className="absolute right-0 -translate-x-10 h-full object-contain object-center brightness-75" src="/img/bg-dark.png" alt="" />
			<img className="absolute right-0 h-full -translate-y-9.5 -translate-x-13 scale-125" src="/img/bgChar/Berenica.png" alt="" />
			<div className="absolute left-25 top-1/2 -translate-y-1/2">
				<h2 className="text-5xl leading-none">Berenica</h2>
				<p className="max-w-sm font-medium pt-5 pb-3.5">"Wishes? I... can't think of any. Your smile in the morning is already the greatest pick-me-up of all."</p>
				<button className="flex items-center gap-1 px-0.5 !font-semibold relative after:absolute after:bottom-0 after:left-0  after:h-0.5 after:w-[60%] after:bg-black hover:after:w-full after:transition-all after:duration-300">
					Read More
					<FaLocationArrow />
				</button>
			</div>
		</div>
	);
}

export default SLice
