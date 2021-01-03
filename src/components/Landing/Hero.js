import React from 'react'
import { HeroContainer } from './style';
import { Wrapper } from '../../common';
import Dog from '../../illustration/Dog.jpg';
import Cat from '../../illustration/Cat.jpg';

const Hero = ({ children, image }) => {

    const handleImage = () => {
        switch (image) {
            case 'Dogs':
                return Dog;
            case 'Cats':
                return Cat;
            default: return null;
        }
    }

    return (
        <HeroContainer image={handleImage()} as={Wrapper}>
            <div id="container">
                {children}
            </div>
        </HeroContainer>
    )
}


export default Hero;