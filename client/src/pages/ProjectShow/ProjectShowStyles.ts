import styled from 'styled-components';
import { maincolor, fontFamily } from '../../globalVars';

export const Container = styled.div`
    background-image: url("https://via.placeholder.com/150");
    background-size: 80%;
    background-position: 100% 50%;
    height: 100vh;
    background-repeat: no-repeat;
    background-color: black;
    box-shadow: inset 500px -270px 300px 0px rgba(0, 0, 0, 1);
    margin-bottom: -100px;

    @media (max-width: 600px){
        background-size: cover;
        box-shadow: inset 0px -180px 200px 0px rgba(0, 0, 0, 1);
        background-position: 50% 50%;
        padding-top: 40px;
    }

    @media (max-width: 900px) and (min-width: 600px) {
        background-size: cover;
        background-position: 50% 50%;
        box-shadow: inset 0px -280px 300px 0px rgba(0, 0, 0, 1);
        height: 90vh;
    }
    @media (max-width: 1200px) and (min-width: 900px) and (orientation: portrait) {
        background-size: cover;
        background-position: 50% 50%;
        box-shadow: inset 0px -280px 300px 0px rgba(0, 0, 0, 1);
        height: 90vh;
    
    }
`;

export const HeroSection = styled.div`
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    height: 94%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid ${maincolor};

    @media (max-width: 900px){
        background-color: rgba(0, 0, 0, 0.5);
    }

`;

export const Title = styled.h1`
    width: 40%;
    font-family: ${fontFamily};
    color: ${maincolor};
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: capitalize;

    @media (max-width: 600px){
        width: 90%;
    }

    @media (max-width: 900px) and (min-width: 600px) {
        width: 90%;
    }

    @media (max-width: 1200px) and (min-width: 900px) and (orientation: portrait){
        width: 90%;
    }
`;

export const ShortDesc = styled.p`
    width: 40%;
    text-align: justify;
    color: white;
    font-size: 1.2rem;

    @media (max-width: 600px){
        width: 90%;
    }
    @media (max-width: 900px) and (min-width: 600px) {
        width: 90%;
    }
    @media (max-width: 1200px) and (min-width: 900px) and (orientation: portrait) {
        width: 90%;
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
    width: 30%;
    // border: 1px solid ${maincolor};

    @media (max-width: 900px){
        width: 90%;
        flex-wrap: wrap;
    }

    @media (max-width: 600px){
        width: 90%;
        flex-wrap: wrap;
    }

    @media (max-width: 1200) and (orientation: portrait) {
        width: 90%;
        flex-wrap: wrap;
    }
`;

export const FullDescriptionTitle = styled.h1`
    padding: 20px;
    font-family: ${fontFamily};
    color: ${maincolor};
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    margin-top: -5px;
`;