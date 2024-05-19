import React from 'react';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import { IconMap } from './IconMap';
import {maincolor, fontFamily} from "../../globalVars";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkItemProps {
    url: string;
    title: string;
}

const StyledLink = styled(Link)`
    background-color: ${maincolor};
    padding: 20px;
    border-radius: 10px;
    color: black;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;
    width: 500px;

    @media (max-width: 600px){
        width: 300px;
    }

`;

const LinkItem: React.FC<LinkItemProps> = ({url, title}) => {

    const getIcon = (url: string) => {
        const domain = Object.keys(IconMap).find(key => url.includes(key)); // Find the domain in the url
        if (domain) {
            const Icon = IconMap[domain];
            return <Icon  style={{width: '25px', height: '25px'}}/>;
        }
        return <LanguageIcon style={{width: '25px', height: '25px'}}/>;
    }

    return (
        <StyledLink to={url} target="_blank" >
                {getIcon(url)}
                <Typography style={{
                    fontFamily: fontFamily,
                    fontSize: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: 500,
                }}>
                    {title}
                </Typography>
        </StyledLink>
    )
}

export default LinkItem
