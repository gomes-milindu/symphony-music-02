import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/headercontent/cont";

import GridOverlay from "./layout/GridOverlay";
import ClassCart from "./components/body/joinOurClasses/classCart";
import ClassCartSet from "./components/body/joinOurClasses/classCartSet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <GridOverlay />
    </>
  );
}

export default App;
