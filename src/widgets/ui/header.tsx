"use client";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/feature/theme/theme-toggler";
// import { ModeToggle } from "@/features/theme/theme-toggler";

export let randomId = crypto.randomUUID();

export default function Header() {
  // const pathname = usePathname();

  // const [sessioon, setSession] = useState(null);

  // useEffect(() => {
  //   getSession().then((session: any) => {
  //     setSession(session);
  //   });
  // }, []);

  return (
    <header className="fixed w-screen ">
      <nav className="container">
        <div className="py-3">
          <div className="flex items-center justify-between">
            <a className="text-lg flex items-center dark:hidden" href="/">
              <Image
                className="mr-3"
                src={`/favicon-black.ico`}
                alt={"logo"}
                width={20}
                height={20}
              />
              Crystal
            </a>
            <a className="text-lg hidden items-center dark:flex" href="/">
              <Image
                className="mr-3"
                src={`/favicon-white.ico`}
                alt={"logo"}
                width={20}
                height={20}
              />
              Crystal
            </a>
            <div>
              <div className={`flex w-300 space-x-10 pl-10`}>
                <ModeToggle />
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button className="" variant="outline">
                        My Account
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                      // onClick={() =>
                      //   signOut({
                      //     callbackUrl: `${window.location.origin}`,
                      //   })
                      // }
                      >
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
