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
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-8
        py-4
        "
      >
        <h1 className="font-bold text-xl">
          AYUSHI
        </h1>

        <div className="flex gap-8">

  <a href="#skills">
    Skills
  </a>

  <a href="#projects">
    Projects
  </a>

  <a href="#github">
    GitHub
  </a>

  <a href="#resume">
    Resume
  </a>
  <a href="#contact">
  Contact
</a>

</div>
      </div>
    </nav>
  );
}