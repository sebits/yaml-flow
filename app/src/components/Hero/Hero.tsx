import React from 'react'

interface HeroProps {
    children: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
    return (
        <div className="flex flex-col items-center justify-center max-w-2xl max-h-screen m-5 mx-auto text-center mt-36">
            {children}
        </div>
    )
}

export default Hero