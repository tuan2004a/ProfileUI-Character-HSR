import React from 'react';
import { FaPlus } from "react-icons/fa";

const AvatarChibi = () => {
    return (
		<div className="flex flex-col justify-between gap-y-5">
			<div className="size-40 rounded-3xl bg-red-500 relative">
				<div className="absolute top-0 left-0 -translate-4 bg-white size-10 rounded-full flex-center">
					<FaPlus className='text-xl'/>
				</div>
			</div>
			<div className="size-40 rounded-3xl bg-red-500 relative">
				<div className="absolute top-0 left-0 -translate-4 bg-white size-10 rounded-full flex-center">
					<FaPlus className='text-xl'/>
				</div>
			</div>
		</div>
	);
}

export default AvatarChibi
