import About from "./About/About";
import TechStack from "./Skills/Skills";
import PersonalInfo from "./About/PersonalInfo";
// import image from "./Media/Me.jpg";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import { useState } from "react";
import { IconBrightnessDownFilled, IconMoonFilled } from "@tabler/icons-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark bg-white dark:bg-black grid"}`}>
      <div className="grid grid-cols-1 bg-white dark:bg-black p-5 w-full md:w-6/10 mx-auto my-20 md:rounded-2xl md:border-1 md:border-gray-200 dark:border-gray-900 md:shadow-2xl">
        <div className="flex justify-end mb-20">
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <div className="flex items-center gap-2 border-1 rounded-lg border-white px-2">
                <p className="text-white">Light mode</p>
                <IconBrightnessDownFilled className="text-white" />
              </div>
            ) : (
              <div className="flex items-center gap-2 border-1 rounded-lg border-black px-2">
                <p className="text-black">Dark mode</p>
                <IconMoonFilled>Dark</IconMoonFilled>
              </div>
            )}
          </button>
        </div>
        <div className="grid grid-cols-1 mb-10">
          {/* <img
            src={image}
            alt="Not Found"
            className="w-2/3 rounded-2xl mb-10 md:mb-5 drop-shadow-lg col-span-1"
          /> */}
          <PersonalInfo />
        </div>
        <div className="grid grid-cols-1 gap-10">
          <About />
          <Experience />
          <Projects />
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default App;
