import React from 'react';

//COMPONENTS
import Button from './Components/Button';
import Hero from './Components/Hero';
import Shutter from './Components/Shutter';

const Home = () => (

 <>
  <Button class="button link_right fixed" linkTo="/about" btnText="About" /> 
  <Button class="button link_left fixed" linkTo="/projects" btnText="Work" />  

  <Hero />     
  <Shutter />      
</> 

)

export default Home;