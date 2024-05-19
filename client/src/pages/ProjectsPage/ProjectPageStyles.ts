import { maincolor, fontFamily } from "../../globalVars";
import styled from "styled-components";
export const Title  = styled.h1`
    font-family: ${fontFamily};
    color: ${maincolor};
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    font-size: 2.5rem;
    margin-bottom: -10px;

    @media (max-width: 600px) {
        font-size: 1.5rem;
        padding-bottom: 5px;
        margin-bottom: -20px;
    }
    @media (max-width: 900px) and (min-width: 600px) {
        font-size: 2rem;
        padding-bottom: 5px;
        margin-bottom: -20px;
    }
`;

export const Container = styled.div`
    padding-top: 60px;
    background-image: url("https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-color: rgba(0, 0, 0, 1);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 20%;

    @media (max-width: 600px) {
        padding-bottom: 20%;
        background-position: 50% 30%;
    }
    @media (max-width: 900px) and (min-width: 600px) {
        padding-bottom: 20%;
        background-position: 50% 30%;
    }
    @media (max-width: 1200px) and (min-width: 900px) {
        padding-bottom: 10%;
        background-position: 50% 30%;
    }
`;