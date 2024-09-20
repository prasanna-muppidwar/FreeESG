"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/buttons";
import { useRouter } from "next/navigation";
import useAuth from "@/lib/useAuth";
import { supabase } from "@/lib/supabaseClient";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Dashboard from "@/app/Dashboard/page";

// smoothly scroll the browser viewport to a specific element within the page
const scrolltoHash = (element_id: string) => {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};

// define navigation links with optional click handlers
const NavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <p onClick={onClick}>{children}</p>
  </Link>
);

const Header = () => {
  const router = useRouter();
  const user = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-20 relative">
        <div className="flex h-full items-center justify-between">
          {/* ================== */}
          {/* DISPLAY THE LOGO  */}
          {/* ================== */}
          <Link href="/">
            <Image src="/logos/grp.svg" width={170} height={100} alt="logo" />
          </Link>
          {/* ============================ */}
          {/* DISPLAY THE MENU FOR DESKTOP */}
          {/* ============================ */}
          <div className="hidden lg:flex gap-10 text-lg font-semibold">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/" onClick={() => scrolltoHash("product")}>
              Our Product
            </NavLink>
            <NavLink href="/" onClick={() => scrolltoHash("journey")}>
              Journey
            </NavLink>
            <NavLink href="/" onClick={() => scrolltoHash("team")}>
              Team
            </NavLink>
            <NavLink href="/" onClick={() => scrolltoHash("galary")}>
              Gallery
            </NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
            {/* <div className={user ? "" : "hidden"}>
            <NavLink href="/Dashboard">Dashboard</NavLink>
            </div> */}
          </div>
          <div className="hidden lg:flex gap-6 ">
          <div className={user ? "" : "hidden"}>
            <Link href="/Dashboard">
              {/* <Button >Dashboard</Button> */}
              <Button variant={"reverse"}>Dashboard</Button>
            </Link>
          </div>
            {user ? (
              <Button onClick={handleSignOut}>Sign Out</Button>
            ) : (
              <>
                <Link href="/signup">
                  <Button variant="ghost">Sign Up</Button>
                </Link>
                <Link href="/login">
                  <Button>Sign In</Button>
                </Link>
              </>
            )}
          </div>
          {/* =========================== */}
          {/* DISPLAY THE MENU FOR MOBILE */}
          {/* =========================== */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Button size="sm" variant="secondary">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div>
                  <Link href="/">
                    <Image
                      src="/logos/grp.svg"
                      width={175}
                      height={100}
                      alt="logo"
                    />
                  </Link>
                  <div className="flex mt-10 flex-col gap-6 text-lg font-semibold">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/" onClick={() => scrolltoHash("product")}>
                      Our Product
                    </NavLink>
                    <NavLink href={user ? "/report" : "/login"}>Report</NavLink>
                    <NavLink href="/" onClick={() => scrolltoHash("journey")}>
                      Journey
                    </NavLink>
                    <NavLink href="/" onClick={() => scrolltoHash("team")}>
                      Team
                    </NavLink>
                    <NavLink href="/" onClick={() => scrolltoHash("galary")}>
                      Galary
                    </NavLink>
                  </div>
                  <div className="mt-10 flex gap-6">
                    {user ? (
                      <Button onClick={handleSignOut}>Sign Out</Button>
                    ) : (
                      <>
                        <Link href="/signup">
                          <Button variant="secondary">Sign Up</Button>
                        </Link>
                        <Link href="/login">
                          <Button>Sign In</Button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
