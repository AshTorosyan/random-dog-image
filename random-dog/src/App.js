import React, { useState } from "react";
import Button from "./Components/Button/Button";
import Image from "./Components/Image/Image";
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
      <Card className={classes.card}>
    <Text className={classes.text}>Find Dog Image</Text>
    <br></br>
    <Button className={classes.button} onClick={findDog}>find dog</Button>
    <br></br>
    <Image className={classes.image} width="350px" height="350px" src={dog.picture}>
    </Image>
    </Card>
  </Wrapper>
  );
}

export default App;
