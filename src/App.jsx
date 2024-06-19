import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Addfunction from "./Addfunction";
import Todolist from "./Todolist";
import Contener from "./Contener";

function App() {
  let intodoitem = [
    {
      name: "Buy Milk",
      duedate: "04/05/2024",
    },
    {
      name: "Go to Collage",
      duedate: "04/05/2024",
    },
  ];

  const [todoitem, settodoitem] = useState(intodoitem);

  const handlenewitem = (itemname, duedate) => {
    const newItems = [
      ...todoitem,
      {
        name: itemname,
        duedate: duedate,
      },
    ];
    settodoitem(newItems);
  };

  const handleDelete = (deleteteditem) => {
    let newTodoList = todoitem.filter((item) => deleteteditem != item.name);
    settodoitem(newTodoList);
  };

  return (
    <Contener>
      <Header></Header>
      <br />
      <Addfunction onNewitem={handlenewitem}></Addfunction>
      {intodoitem.length === 0 && <h3>Enjoy your day</h3>}
      <br />
      <Todolist items={todoitem} handleDelete={handleDelete}></Todolist>
    </Contener>
  );
}

export default App;
