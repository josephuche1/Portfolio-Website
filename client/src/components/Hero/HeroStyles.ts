import styled from 'styled-components';

export const HeroContainer = styled.div`
    background-image: url("/assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 25%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 1);
    

    @media (max-width: 900px) and (min-width: 600px) and (orientation: portrait) {
        background-position: 50% 30%;
    }
    @media (max-width: 900px) and (min-width: 600px) and (orientation: landscape) {
        background-size: 70%;
    }
    @media (max-width: 1200px) and (min-width: 900px) and (orientation: portrait) {
        background-position: 50% 50%;
    }
    @media (max-width: 1200px) and (min-width: 900px) and (orientation: landscape) {
        background-size: 70%;
    }
    @media (min-width: 1200px) and (orientation: portrait) {
        background-size: 45%;
    }

    @media (min-width: 1200px) and (orientation: landscape) {
        background-size: 50%;
    }

`;

export const InnerBox = styled.div`
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;

`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 100vh;
    width: 100%;
    box-shadow: inset 0px -20px 150px 20px rgba(0,0,0,0.9), inset 0px 20px 150px 10px rgba(0,0,0,1);

    @media (max-width: 900px) and (min-width: 600px){
        box-shadow: inset 90px 80px 100px 10px rgba(0,0,0,0.9), inset -90px -80px 100px 10px rgba(0,0,0,1);
    }
    @media (max-width: 1200px) and (min-width: 900px){
        box-shadow: inset 100px 90px 300px 10px rgba(0,0,0,0.9), inset -100px -150px 300px 10px rgba(0,0,0,1);
    }
    @media (min-width: 1200px) {
        box-shadow: inset 350px 20px 200px 10px rgba(0,0,0,0.9), inset -350px -50px 100px 10px rgba(0,0,0,1);
    }
`
