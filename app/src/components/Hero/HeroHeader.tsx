import React from 'react'

interface HeroHeaderProps {
    primaryText: string;
    secondaryText: string;
}

const style = {
    secondaryText: {
        webkitTextStroke: '1px white'
    }
}

const HeroHeader = ({ primaryText, secondaryText }: HeroHeaderProps) => {
    return (
        <>
            <h1 className="m-0 font-bold text-center text-7xl clash-display">{primaryText}</h1>
            <h2 className="font-bold text-center text-fill-none text-7xl clash-display">{secondaryText}</h2>
        </>
    )
}

export default HeroHeader