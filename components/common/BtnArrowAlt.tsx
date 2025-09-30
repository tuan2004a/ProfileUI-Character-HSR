import React from 'react';

interface BtnArrowAltProps {
    className?: string | undefined;
    children: React.ReactNode;
    onClick?: () => void;
}

const BtnArrowAlt: React.FC<BtnArrowAltProps> = ({className, onClick, children}) => {
    return <div onClick={onClick} className={`${className} absolute top-1/2 -translate-y-1/2 size-13 rounded-full flex-center `}>{children}</div>;
}

export default BtnArrowAlt
