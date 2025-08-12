const Projects = () => {
  return (
    <div>
      <h4 className="text-2xl font-bold mb-5">Projects</h4>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
        <div className="w-full h-auto border-1 border-black dark:border-white rounded-2xl p-2 ">
          <p className="text-2xl font-bold text-black dark:text-white">
            TinderSwipe
          </p>
          <p className="text-xl text-black dark:text-white">
            <strong>Stack: </strong>
            <span>HTML, CSS, JavaScript</span>
          </p>
          <a
            className="text-xl text-blue-400"
            target="_blank"
            href="https://caszofficial.github.io/TinderSwipe/"
          >
            Visit Website
          </a>
        </div>
        <div className="w-full h-auto border-1 border-black dark:border-white rounded-2xl p-2 ">
          <p className="text-2xl font-bold text-black dark:text-white">
            Todo List
          </p>
          <p className="text-xl text-black dark:text-white">
            <strong>Stack: </strong>
            <span>HTML, CSS, JavaScript, React</span>
          </p>
          <a
            className="text-xl text-blue-400"
            target="_blank"
            href="https://caszofficial.github.io/TodoList/"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
