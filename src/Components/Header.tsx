import { DashboardSquare01Icon } from "./icons";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 h-max py-3">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4">
          <img src="logo.png" alt="srija logo" className="h-10 md:h-12" />
          <nav className="hidden items-center gap-5 md:flex">
            <span>
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </span>
            <span>
              <a href="#about" className="hover:text-primary">
                About
              </a>
            </span>
            <span>
              <a href="#skills" className="hover:text-primary">
                Skills
              </a>
            </span>
            <span>
              <a href="#experience" className="hover:text-primary">
                Experience
              </a>
            </span>
            <span>
              <a href="#projects" className="hover:text-primary">
                Project
              </a>
            </span>
            <a href="#contact">
              <button>Contact Me</button>
            </a>
          </nav>

          <Button
            className="md:hidden"
            size={"icon"}
            variant={"ghost"}
          >
            <DashboardSquare01Icon className="h-5 w-5" />
          </Button>
        </div>
      </header>
    </>
  );
}
