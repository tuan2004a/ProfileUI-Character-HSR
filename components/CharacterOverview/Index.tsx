import React from 'react';
import SLice from './SLice';
import ArtWorks from './ArtWorks';
import RecentSeachs from './RecentSeachs';
import AvatarChibi from './AvatarChibi';
import SkillSet from './SkillSet';

const Index = () => {
    return (
		<div className="h-full max-w-[1200px] mx-auto">
			<SLice />
			<div className="mt-12 flex gap-x-15">
				<ArtWorks />
				<RecentSeachs />
				<AvatarChibi/>
				<SkillSet/>
			</div>
		</div>
	);
}

export default Index
