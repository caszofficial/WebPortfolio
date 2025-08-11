import { about_me } from "../DataJson/data.json";

const About = () => {
  return (
    <div className="grid grid-cols-1 col-span-1 w-full gap-2">
      <h4 className="text-2xl font-bold">About Me</h4>
      <p className="text-xl text-gray-500">{about_me}</p>
    </div>
  );
};

export default About;
