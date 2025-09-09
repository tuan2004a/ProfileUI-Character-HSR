import React from 'react';
import { BsSearch } from "react-icons/bs";


const RecentSeachs = () => {
    return (
		<div className="space-y-3 flex flex-col justify-between">
			<h1 className="wordSpacing !text-2xl !font-semibold mb-4 wordSpacing">Recent Seachs</h1>
			<ul className="h-full flex flex-col justify-between *:!font-medium">
				<li className="rounded-full w-full bg-white px-2 py-2.5 flex items-center gap-x-1.5 text-center !font-medium">
					<BsSearch className="text-[22px]" />
					Berenica Build
				</li>
				<li className="rounded-full w-full bg-white px-2 py-2.5 flex items-center gap-x-1.5 text-center !font-medium">
					<BsSearch className="text-[22px]" />
					Berenica Build
				</li>
				<li className="rounded-full w-full bg-white px-2 py-2.5 flex items-center gap-x-1.5 text-center !font-medium">
					<BsSearch className="text-[22px]" />
					Berenica Build
				</li>
				<li className="rounded-full w-full bg-white px-2 py-2.5 flex items-center gap-x-1.5 text-center !font-medium">
					<BsSearch className="text-[22px]" />
					Berenica Build
				</li>
				<li className="rounded-full w-full bg-white px-2 py-2.5 flex items-center gap-x-1.5 text-center !font-medium">
					<BsSearch className="text-[22px]" />
					Berenica Build
				</li>
			</ul>
		</div>
	);
}

export default RecentSeachs
