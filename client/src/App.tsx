import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';


function App() {
  return (
    <div>
      <Hero 
        title="Hello, I'm Joseph"
        body="lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus"
      />
    </div>
  );
}

export default App;
