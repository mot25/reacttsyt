import React, { FC } from "react";
import Card, { CardVariant } from "./Card";

const Home: FC = () => {
  return (
    <div>
      <Card
        width="200px"
        height="200px"
        onClick={() => console.log("click on card")}
        variant={CardVariant.outlined}
      />
    </div>
  );
};
export default Home;
