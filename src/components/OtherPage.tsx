import React from "react";
import Card from "./Card";
import EventsExample from "./EventsExample";
import { CardVariant } from "./Card";

const OtherPage = () => {
  return (
    <div>
      <Card
        onClick={(num: number) => console.log(`Нажали на карточку, ${num}`)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Кнопка</button>
        <h1>Start</h1>
      </Card>
      <EventsExample />
    </div>
  );
};

export default OtherPage;
