import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {maincolor, fontFamily} from "../../globalVars";
import styled from 'styled-components';
import  LinkItem from '../../components/LinkItem/LinkItem';

const Title = styled.h1`
    font-family: ${fontFamily};
    color: ${maincolor};
    text-align: center;
`;

const LinkTree: React.FC = () => {
  return (
    <Box style={{
        paddingTop: '50px',
        backgroundColor: "black",
        height: '100vh',
    }}>
        <Title>
            LinkTree
        </Title>
        <Grid container spacing={2} style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            // border: "1px solid green",
        }}>
            <Grid item>
                <LinkItem url="https://www.google.com" title="Google" />
            </Grid>
            <Grid item>
                <LinkItem url="https://www.github.com" title="GitHub" />
            </Grid>
            <Grid item>
                <LinkItem url="https://www.linkedin.com" title="LinkedIn" />
            </Grid>
        </Grid>
    </Box>
  )
}

export default LinkTree
