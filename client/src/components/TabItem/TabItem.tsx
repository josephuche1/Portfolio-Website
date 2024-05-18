import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { fontFamily } from '../../globalVars'
import styled from 'styled-components'

interface ITabItemProps {
    title: string;
    linkto: string;
}

const TabItemContainer = styled.div`
    margin: 0 20px;

    &:hover {
        border-bottom: 3px solid #FF9F66;
    }

    @media (max-width: 768px) {
        margin: 0 10px;
    }
`;

const TitleContainer = styled.div`
    color: white;
    font-family: ${fontFamily};
    text-transform: uppercase;
    font-weight: 300;
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TabItem: React.FC<ITabItemProps> = ({title, linkto}) => {
  return (
    <TabItemContainer>
      <Link to={linkto} style={{textDecoration: 'none'}}>
        <TitleContainer>
            {title}
        </TitleContainer>
      </Link>
    </TabItemContainer>
  )
}

export default TabItem
