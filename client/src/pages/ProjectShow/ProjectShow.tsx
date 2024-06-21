import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { maincolor, fontFamily} from "../../globalVars";
import Tags from '../../components/Tags/Tags';
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Container, HeroSection, Title, ShortDesc, TagsContainer, FullDescriptionTitle } from './ProjectShowStyles';


const ProjectShow:React.FC = () => {
  const { id } = useParams();
  return (
    <Container>
       <HeroSection>
            <Title>
                Weather web Application
            </Title>
            <ShortDesc>
                orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum 
            </ShortDesc>
            <TagsContainer>
                <Tags name="React" />
                <Tags name="Node" />
                <Tags name="Express" />
                <Tags name="MongoDB" />
                <Tags name="Typescript" />
            </TagsContainer>
            <Link to="/projects" style={{
                textDecoration: "none",
                backgroundColor: maincolor,
                cursor: "pointer",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "fit-content",
                marginTop: "20px",
                borderRadius: "5px",
            }}>
                <Typography variant="body1" color={"white"} style={{
                    fontFamily: fontFamily,
                    color: "black",
                }}>
                    View Project
                </Typography>
                <OpenInNewIcon 
                    style={{
                        color: "black",
                    }}
                />
            </Link>
       </HeroSection>
       <Box style={{
            backgroundColor: 'black',
       }}>
            <FullDescriptionTitle>
                    Description
            </FullDescriptionTitle>
            <Typography variant="body1" style={{
                    color: 'white',
                    padding: '50px',
                    paddingTop: '0px',
                    textAlign: 'justify',
            }}>
                    orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in
            </Typography>
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '50px',
                paddingBottom: '50px',
            }}>
                <img src="https://via.placeholder.com/150" alt="project" style={{
                    width: "80%",
                    height: "auto",
                    borderRadius: "10px",
                }} />
            </Box>
       </Box>
    </Container>
  )
}

export default ProjectShow
