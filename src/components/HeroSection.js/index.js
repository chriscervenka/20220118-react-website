import React, {useState} from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowFoward,
    ArrowRight

} from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive 250$ in credit towards your next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter = {onHover} onMouseLeave = {onHover}>
                        Get started {hover ? <ArrowFoward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection