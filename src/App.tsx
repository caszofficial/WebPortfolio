import About from "./About/About";
import TechStack from "./Skills/Skills";
import PersonalInfo from "./About/PersonalInfo";
import image from "./Media/Me.jpg";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="grid grid-cols-1 p-5 w-full md:w-6/10 mx-auto my-20 md:rounded-2xl md:border-1 md:border-gray-200 md:shadow-2xl">
      <div className="grid grid-cols-1 mb-10 md:grid-cols-2">
        <img
          src={image}
          alt="Not Found"
          className="w-2/3 rounded-2xl mb-10 md:mb-5 drop-shadow-lg col-span-1"
        />
        <PersonalInfo />
      </div>
      <div className="grid grid-cols-1 gap-10">
        <About />
        <Experience />
        <Projects />
        <TechStack />
      </div>
    </div>
  );
}

export default App;
