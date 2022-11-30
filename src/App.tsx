import React from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: {
        city: "Gwenborough",
        street: "Kulas Light",
        zipcode: "92998-3874",
      },
    },
  ];

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
      <UserList users={users} />
    </div>
  );
};

export default App;
