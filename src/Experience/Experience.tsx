import {
  neostella_experience,
  geeks5g_experience,
  freelance_experience,
} from "../DataJson/data.json";
const Experience = () => {
  return (
    <div className="grid grid-cols-1 col-span-1 gap-2">
      <h4 className="text-2xl font-bold mb-5 text-black dark:text-white">
        Experience
      </h4>
      <div className="grid grid-cols-1 gap-2 w-full my-5">
        <h6 className="text-xl font-bold text-black dark:text-white">
          Geeks5g
        </h6>
        <p className="text-xl font-bold text-black dark:text-white">
          Head of Software Development
        </p>
        <p className="text-xl text-black dark:text-white">2024-2025</p>
      </div>
      <p className="text-xl text-gray-400 dark:text-gray-300">
        {geeks5g_experience}
      </p>
      <div className="grid grid-cols-1 gap-2 w-full my-5">
        <h6 className="text-xl font-bold text-black dark:text-white">
          Freelance Developer
        </h6>
        <p className="text-xl text-black dark:text-gray-300">2023-2024</p>
      </div>
      <p className="text-xl text-gray-400 dark:text-gray-300">
        {freelance_experience}
      </p>
      <div className="grid grid-cols-1 gap-2 w-full my-5">
        <h6 className="text-xl font-bold text-black dark:text-white">
          Neostella
        </h6>
        <p className="text-xl font-bold text-black dark:text-white">
          Front End Web Developer
        </p>
        <p className="text-xl text-black dark:text-gray-300">2021-2023</p>
      </div>
      <p className="text-xl text-gray-400 dark:text-gray-300">
        {neostella_experience}
      </p>
    </div>
  );
};

export default Experience;
