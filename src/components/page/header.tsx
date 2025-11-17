import { Github, Linkedin, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex-container min-h-[calc(100dvh-4.5rem)] content-center items-center justify-center relative">
      <div className="flex-container lg:w-3/4 2xl:w-1/2 flex-col relative z-1 items-center mask-[linear-gradient(to_bottom,transparent,black_60%,black_40%,transparent),linear-gradient(to_right,transparent,black_60%,black_40%,transparent)]">
        <div className="flex-container justify-center">
          <div className="flex-container w-5/6 justify-center py-5 border-x-2" />
        </div>
        <div className="flex-container justify-center border-t-2">
          <div className="flex-container w-5/6 justify-center py-10 border-x-2">
            <p>Olá! Meu nome é:</p>
          </div>
        </div>
        <div className="flex-container justify-center border-y-2">
          <div className="flex-container w-5/6 justify-center py-10 border-x-2">
            <h1 className="font-bold text-foreground text-shadow-md text-shadow-muted text-center">
              Felipe Kretzer
            </h1>
          </div>
        </div>
        <div className="flex-container justify-center border-b-2">
          <div className="flex-container w-5/6 justify-center py-10 border-x-2">
            <p>Seja bem-vindo ao meu portfólio!</p>
          </div>
        </div>
        <div className="flex-container justify-center">
          <div className="flex-container w-5/6 justify-center py-5 border-x-2">
            <Link href={"https://github.com/kretzerfelipe"} target="_blank">
              <Button variant={"ghost"} className="size-12">
                <Github className="size-8" />
              </Button>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/felipe-kretzer-dev/"}
              target="_blank"
            >
              <Button variant={"ghost"} className="size-12">
                <Linkedin className="size-8" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-container absolute bg-primary-foreground/50 h-[50dvh] rounded-full blur-[128px]"></div>
    </div>
  );
}
