import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { IHeroProps } from './HeroInterfaces';
import { HeroContainer, InnerBox, Overlay } from './HeroStyles';


const Hero: React.FC<IHeroProps> = (props) => {
    return (
        <HeroContainer>
            <InnerBox>
                <Typography variant="h1" style={{ fontFamily: "Oswald, sans-serif", fontSize: '3rem', margin: '0', fontWeight: 'bold' }}>
                    {props.title}
                </Typography>
                <Typography variant="body1" style={{ fontFamily: "Rubik, sans-serif", fontSize: '1.5rem' }}>
                    {props.body}
                </Typography>
            </InnerBox>
            <Overlay />
        </HeroContainer>
    );
}

export default Hero;