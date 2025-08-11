import { name, short_about_me } from "../DataJson/data.json";

const PersonalInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-2 col-span-1 w-full h-fit my-auto">
      <h4 className="text-2xl font-bold">{name}</h4>
      <h4 className="text-xl font-bold">25</h4>
      <p className="text-xl text-gray-500">{short_about_me}</p>
    </div>
  );
};

export default PersonalInfo;
