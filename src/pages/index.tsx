import Menu from "./menu";
import { useState } from "react";
import coffeData from "../assets/data.json";
import { CoffeeModel } from "@/model/Coffee.model";

export default function Home() {
  const [coffees, setCoffees] = useState(coffeData);

  return (
    <>
      <div className="main">
        <div className="bg-image">
          <Menu coffeesList={coffees} />
        </div>
      </div>
    </>
  );
}
