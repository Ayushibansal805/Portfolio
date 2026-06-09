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
  gap-12
  "
>
        <h1 className="font-bold text-xl">
          AYUSHI
        </h1>
        <div className="flex items-center gap-10">
  <a href="#skills" className="hover:text-cyan-400">Skills</a>
  <a href="#projects" className="hover:text-cyan-400">Projects</a>
  <a href="#github" className="hover:text-cyan-400">GitHub</a>
  <a href="#resume" className="hover:text-cyan-400">Resume</a>
  <a href="#contact" className="hover:text-cyan-400">Contact</a>
</div>
        


  
      </div>
    </nav>
  );
}