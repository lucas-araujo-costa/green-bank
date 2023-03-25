import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, HeroButton, ArrowForward, ArrowRight } from './HeroElements'


const HeroSection = () => {

    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <>
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Seu Banco Virtual</HeroH1>
                <HeroP>
                    Abra sua conta agora e receba até R$250 de bônus no seu próximo depósito.
                </HeroP>
                <HeroBtnWrapper>
                    <HeroButton to='/signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={550} spy={true} exact='true' offset={-80}>
                        Abrir conta {hover ? <ArrowForward /> : <ArrowRight />}
                    </HeroButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </>
  )
}

export default HeroSection