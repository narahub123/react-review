import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    // initial state
    selectedProjectId: undefined,
    // used to either store the id of the project that was selected
    // or null if we want to add a new project
    // or undefined if we're not adding to a new project
    projects: [], // a project array where we'll later add the projects that are created by the user
  });

  // selectedProject property should be changed if we click add project button to null
  // a function that is triggered once one of two buttons is clicked
  function handleStartAddProject() {
    // get the previous state and return the updated state
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  // if you wanna add a new project
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
    // no project selected
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
