import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";

// const SkillContainer = () => {
//   <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-[2px] p-0.5 ">
//     {children}
//   </div>;
// };

const TechStack = () => {
  return (
    <div>
      <h4 className="text-2xl font-bold mb-5">Skills</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-lg px-2 py-1 text-2xl gap-2">
          <IconBrandHtml5 className="size-5" />
          <p>HTML</p>
        </div>
        <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-lg px-2 py-1 text-2xl gap-2">
          <IconBrandCss3 className="size-5" />
          <p>CSS</p>
        </div>
        <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-lg px-2 py-1 text-2xl gap-2">
          <IconBrandJavascript className="size-5" />
          JavaScript
        </div>
        <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-lg px-2 py-1 text-2xl gap-2">
          <IconBrandTypescript className="size-5" />
          TypeScript
        </div>
        <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-lg px-2 py-1 text-2xl gap-2">
          <IconBrandGit className="size-5" />
          Git
        </div>
        <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-lg px-2 py-1 text-2xl gap-2">
          <IconBrandGithub className="size-5" />
          GitHub
        </div>
        <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-lg px-2 py-1 text-2xl gap-2">
          <IconBrandReact className="size-5" />
          ReactJS
        </div>
        <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-lg px-2 py-1 text-2xl gap-2">
          <IconBrandNodejs className="size-5" />
          NodeJS
        </div>
        <div className="flex bg-[#f1f1f1] justify-center items-center w-fit h-fit rounded-lg px-2 py-1 text-2xl gap-2">
          <IconBrandMysql className="size-5" />
          MySQL
        </div>
      </div>
    </div>
  );
};

export default TechStack;
