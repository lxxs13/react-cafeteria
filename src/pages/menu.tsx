import React, { useState } from "react";
import Card from "./card";
import { CoffeeModel } from "@/model/Coffee.model";

export default function Menu({ coffeesList }: { coffeesList: CoffeeModel[] }) {
  const [coffees, setCoffees] = useState(coffeesList);
  const [originalCoffees] = useState(coffeesList);

  const changeList = (option: string) => {
    switch (option) {
      case "option1":
        setCoffees(originalCoffees); // Mostrar todos los productos
        break;

      case "option2":
        setCoffees(originalCoffees.filter((coffee) => coffee.available)); // Mostrar solo los productos disponibles
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="bg-image-menu">
        <span className="span-title">Our Collection</span>
        <p className="p-introduction">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="div-options">
          <input
            type="radio"
            id="option1"
            name="options"
            className="option-radio"
            onClick={() => changeList("option1")}
            defaultChecked
          />
          <label htmlFor="option1" className="button-option">
            All Products
          </label>

          <input
            type="radio"
            id="option2"
            name="options"
            className="option-radio"
            onClick={() => changeList("option2")}
          />
          <label htmlFor="option2" className="button-option">
            Available Now
          </label>
        </div>

        <div className="div-list-coffees">
          {coffees.map((coffee) => (
            <div className="item-carta" key={coffee.id}>
              <Card coffeesList={coffee} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
