import { CoffeeModel } from "@/model/Coffee.model";
import logo from "../static/Star.svg";
import Image from "next/image";

export default function Card({ coffeesList }: { coffeesList: CoffeeModel }) {
  return (
    <div>
      <div className="card-content">
        <img src={coffeesList.image} alt="" />
        <div className="div-column-data">
          <span className="span-name-coffee">{coffeesList.name}</span>
          <button className="button-price">{coffeesList.price}</button>
        </div>

        <div>
          <div>
            <div className="div-raiting-available">
              <div className="div-raiting">
                <Image
                  src={`${
                    Number(!coffeesList.rating) > 0
                      ? "/Star.svg"
                      : "/Star_fill.svg"
                  }`}
                  alt={
                    !coffeesList.votes && +!coffeesList.votes > 0
                      ? "Star_Fill"
                      : "Star"
                  }
                  width={25}
                  height={25}
                />
                &nbsp;
                <span className="span-rating">
                  {coffeesList.rating && +coffeesList.rating > 0
                    ? coffeesList.rating + " "
                    : " "}
                </span>
                &nbsp;
                <span className="span-votes">
                  {coffeesList.votes && +coffeesList.votes > 0
                    ? " (" + coffeesList.votes + " votes)"
                    : " No rating"}
                </span>
              </div>
              <div>
                <span className="span-available">
                  {coffeesList.available ? "" : "Sold out"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
