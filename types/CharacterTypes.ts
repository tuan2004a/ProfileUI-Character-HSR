//types/charactertypes.ts

export type Character = {
    id: number;
    name: string;
    description: string;
    character: string;
    banner: string;
    img: {
        ArtWords: {
            art1: string;
            art2: string;
        };
        chibi: {
            chibi1: string;
            chibi2: string;
        };
    };
    color: {
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color5: string;
        textColor: string;
    };
    ComboSkill: {
        skill1: {
            color: string;
            icon: string;
            title: string;
            desc: string;
        };
    };
}