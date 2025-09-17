import React from 'react';

interface BtnArrowAltProps {
    className?: string | undefined;
    children: React.ReactNode;
    onClick?: () => void;
}

const BtnArrowAlt: React.FC<BtnArrowAltProps> = ({className, onClick, children}) => {
    return <button onClick={onClick} className={`${className} absolute top-1/2 -translate-y-1/2 size-13 rounded-full bg-red-500 flex-center `}>{children}</button>;
}

export default BtnArrowAlt
