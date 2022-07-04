import React from 'react'
import Button from '../Buttons/Button';

interface HeroButtonGroupProps {
    primaryButtonText: string;
    secondaryButtonText: string;
}

const HeroButtonGroup = ({ primaryButtonText, secondaryButtonText }: HeroButtonGroupProps) => {
    return (
        <div className="flex flex-row items-center justify-center space-x-5">
            <Button text={primaryButtonText} type={'primary'} />
            <Button text={secondaryButtonText} type={'secondary'} />
        </div>
    )
}

export default HeroButtonGroup