import React from 'react'

const SkillSet = () => {
    return (
		<div className="w-75 flex flex-col justify-between ">
			<div className="w-full h-23 bg-white rounded-2xl flex items-center space-x-3 pl-3">
				<img loading="lazy" className="h-2/3 object-contain" src="#" alt="" />
				<div>
					<h4 className="text-xl !font-medium">Skill 1</h4>
					<p>Comming soon</p>
				</div>
			</div>

			<div className="w-full h-23 bg-white rounded-2xl flex items-center space-x-3 pl-3">
				<img loading="lazy" className="h-2/3 object-contain" src="#" alt="" />
				<div>
					<h4 className="text-xl !font-medium">Skill 2</h4>
					<p>Comming soon</p>
				</div>
			</div>

			<div className="w-full h-23 bg-white rounded-2xl flex items-center space-x-3 pl-3">
				<img loading="lazy" className="h-2/3 object-contain" src="#" alt="" />
				<div>
					<h4 className="text-xl !font-medium">Skill 3</h4>
					<p>Comming soon</p>
				</div>
			</div>
		</div>
	);
}

export default SkillSet
