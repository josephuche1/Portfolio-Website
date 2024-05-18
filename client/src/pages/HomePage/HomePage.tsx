import React from 'react';
import Hero from '../../components/Hero/Hero';
import AboutMe from '../../components/AboutMe/AboutMe';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Hello, I'm Joseph"
        body="A Software Developer"
      />
      <AboutMe 
        description="lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus"
      />
    </div>
  )
}

export default HomePage
