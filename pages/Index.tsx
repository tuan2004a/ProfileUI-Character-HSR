import React from "react";
import ExpandCardEffect from "@/components/ExpandCardEffect/Index";
import ClipPathCard3D from "@/components/ClipPathCard3D/Index";
import CharacterOverview from "@/components/CharacterOverview/Index";


const Index = () => {
	return (
		<main className="h-screen max-w-full overflow-hidden overflow-y-scroll snap-y snap-mandatory !scroll-smooth">
			{/* Expand Card Effect */}
			<section className="h-screen max-w-full snap-start hidden">
				<ExpandCardEffect />
			</section>
			{/* Expand Card Effect */}

			{/* Card ClipPath Effect 3D*/}
			<section className="h-screen max-w-full bg-blue-500 snap-start hidden">
				<ClipPathCard3D />
			</section>
			{/* Card ClipPath Effect 3D */}

			<section className="h-screen max-w-full snap-start bg-[#e4dfe3] p-10">
				<CharacterOverview />
			</section>
		</main>
	);
};

export default Index;