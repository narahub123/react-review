import { useState } from "react";

import Header from "../src/components/Header/Header.jsx";
import CoreConcepts from "../src/components/CoreConcepts.jsx";
import Examples from "../src/components/Examples.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
