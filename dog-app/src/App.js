// import { ExchangeRates } from "./ExchangeRates";

import { Increment } from "./Increment";

// import { useState } from "react";
// import { DelayedQuery } from "./DelayedQueue";
// import { DogPhoto } from "./DogPhoto";
// import { Dogs } from "./Dogs";

export default function App() {
  // const [dog, setDog] = useState("bulldog");

  // const dogChangeHandler = (event) => {
  //   setDog(event.target.value);
  // };

  return (
    <div>
      {/* <ExchangeRates /> */}
      {/* <div>
        <h2>My first Apollo app 🚀</h2>
        <Dogs onDogSelected={dogChangeHandler} />
        <DogPhoto breed={dog} />
      </div>
      <div>
        <DelayedQuery />
      </div> */}
      <Increment />
    </div>
  );
}
