import React from 'react';
import Box from '@mui/material/Box';
import Hero from '../../components/Hero/Hero';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';

const HomePage: React.FC = () => {
  return (
    <Box style={{
      width: '100%',
    }}
    >
      <Hero 
        title="Hello, I'm Joseph"
        body="A Software Developer"
      />
      <AboutMe 
        description="leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi "
      />
      <Projects />
    </Box>
  )
}

export default HomePage
