import Header from "./layouts/Header";
import "./Home.css";
import React from "react";
import cry from "../assets/cry.jpg";
import Service from "./layouts/Service";

function Home() {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Header />

      <div className="grid-container">
        <div className="grid-item grid-item-content">
          <div className="h1">CRYPTO CURRENCY</div>

          <div className="p">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </div>

          <div>
            <button className="button"> Read more</button>
          </div>
        </div>
      </div>

      <div className="grid-item grid-item-image">
        <img src={cry} alt="Description" />
      </div>
      <Service />
      {/* <About /> */}
    </div>
  );
}

export default Home;
