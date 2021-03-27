import React, { useState, useEffect } from 'react';
import DogIndex from './DogIndex';
import {Container} from 'reactstrap';
 
const Dogs = () => {


  return (
    <Container className="App">
      <br />
      {/* <h1 className="App-intro">
        For this challenge, write the logic to accomplish the following:
      </h1>
      <hr/>
      <ul>
        <li>Fetch a random image from this api: <a href="https://dog.ceo/dog-api/">here</a></li>
        <li>Save this image URL to the state of the DogIndex component</li>
        <li>Render the image to the screen</li>
        <li>Have a button that fetches a new image</li>
        <li>Make sure to include some good practice error handling</li>
      </ul> */}
      <DogIndex/>
      <hr />
    </Container>
  );

}
 
export default Dogs;