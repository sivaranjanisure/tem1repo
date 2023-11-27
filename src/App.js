import React from "react";
import SlideShow from "./SlideShow";
import Header from "./Header";

function App() {
  const slides = [
    <div key={1}>
      <div>CRYPTO CURRENCY</div>
      <div>
        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
        fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
        molestias, veniam, vel architecto veritatis delectus repellat modi
        impedit sequi.
      </div>
      <button>Read more</button>
    </div>,
    <div key={2}>Slide 2 Content</div>,
    <div key={3}>Slide 3 Content</div>,
  ];
  return (
    <div>
      <Header />
      <div>
        <h1>React Slide Show</h1>
        <SlideShow slides={slides} />
      </div>
    </div>
  );
}

export default App;
