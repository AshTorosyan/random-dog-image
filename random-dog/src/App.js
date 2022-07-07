import React, { useState } from "react";
import Button from "./Components/Button/Button";
import Image from "./Components/Image/Image";
import List from "./Components/List/List";
import ListItem from "./Components/ListItem/ListItem";
import Text from "./Components/Text/Text";
import Wrapper from "./UserInterface/Wrapper/Wrapper";
import Card from "./UserInterface/Card/Card";
import classes from "./UserInterface/Global.module.css"


function App() {

const [dog, setDog] = useState({});

const findDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(data => data.json())
  .then(result => {
    console.log(result);
    setDog({
      picture: result.message
    });
  });
}

  return (
    <Wrapper>
    <Text>Find Dog Image</Text>
    <br></br>
    <Button onClick={findDog}>find dog</Button>
    <br></br>
    <Image width="200px" height="200px" src={dog.picture}>
    </Image>
  </Wrapper>
  );
}

export default App;
