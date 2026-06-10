import RecruiterToggle from "./RecruiterToggle";
export default function Navbar() {
  return (
    <nav
className="
fixed
top-6
left-1/2
-translate-x-1/2
z-50
backdrop-blur-xl
bg-black/30
border
border-cyan-500/20
rounded-full
px-8
py-3
"
>
      <div
  className="
  flex
  items-center
  justify-between
  gap-8
  min-w-[700px]
  "
>
        <h1 className="font-bold text-xl">
          AYUSHI
        </h1>
        <div className="flex items-center gap-6">
  <a
  href="#skills"
  className="
  text-white
  hover:text-cyan-400
  transition
  "
>
  Skills
</a>
  <a
  href="#projects"
  className="
  text-white
  hover:text-cyan-400
  transition
  "
>
  Projects
</a>
  <a
  href="#github"
  className="
  text-white
  hover:text-cyan-400
  transition
  "
>
  Github
</a>
  <a
  href="#resume"
  className="
  text-white
  hover:text-cyan-400
  transition
  "
>
  Resume
</a>
<a
  href="#contact"
  className="
  text-white
  hover:text-cyan-400
  transition
  "
>
  Contact
</a>
  <RecruiterToggle />
</div>
        


  
      </div>
    </nav>
  );
}