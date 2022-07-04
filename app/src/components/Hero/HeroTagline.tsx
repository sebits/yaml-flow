import React from 'react'

interface HeroTaglineProps {
    text: string;
}

const HeroTagline = ({ text }: HeroTaglineProps) => {
    return (
        <p className="max-w-lg m-4 text-xl work-sans">{text}</p>
    )
}

export default HeroTagline