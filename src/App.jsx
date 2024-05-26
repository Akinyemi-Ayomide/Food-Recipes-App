import { useState } from "react";
import Search from "./component/Search";
import Navbar from "./component/Navbar";
import Foodlist from "./component/Foodlist";
import Container from "./component/Container";
import InnerContainer from "./component/InnerContainer";

import "./App.css";
import FoodDetail from "./component/FoodDetail";

function App() {
  const [count, setCount] = useState(0);
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(["632485"]);

  return (
    <div className="App">
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist
            setFoodId={setFoodId}
            foodData={foodData}
            setFoodData={setFoodData}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
