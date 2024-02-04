import { useState } from "react";
// react hook must only be called inside of react component functions or
// inside of other react hooks

import { CORE_CONCEPTS } from "../src/data.js";
import Header from "../src/components/Header/Header.jsx";
import CoreConcept from "../src/components/CoreConcept/CoreConcept.jsx";
import TabButton from "../src/components/TabButton.jsx";

function App() {
  // let tabContent = "Please click a button";
  // const stateArray = useState("Please click a button"); // react hook function , must be called on the top level
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");
  // useState(arguement); argument : default state
  // useState() return a value which you can store in a variable or constant
  // useState() yields an array with two elements
  // first element of array : the current data snapshot for this component execution cycle
  // second element of array : a function provided by react that can be executed to update this state
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // tabContent = selectedButton;
    console.log(selectedTopic); // old state is shown bcos updated value will only be available
    // after this app component function executed again
  }

  console.log("APP COMPONENT EXECUTING");
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
