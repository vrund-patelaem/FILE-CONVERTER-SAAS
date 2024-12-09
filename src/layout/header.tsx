"use client";
import Link from "next/link";
import { ScrollToSection } from "@/utils/scroll-to-section";
import { IconButton, Logo } from "@/components";
import {
  RightArrow,
  Moon,
  Sun,
  Demo,
  Pricing,
  Feedback,
  OpenNav,
} from "@/icons";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "@/components/nav-links";

const nav_links = [
  {
    icon: <Demo />,
    title: "Demo",
    link: "/",
  },
  {
    icon: <Pricing />,
    title: "Pricing",
    link: "/",
  },
  {
    icon: <Feedback />,
    title: "Feedback",
    link: "/",
  },
];

const ThemeSwitch = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("system");
  }, []);

  const handleChnage = (e: any) => {
    const isDark = e.target.checked;
    console.log(isDark);
    if (isDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <label className="flex items-center relative w-max cursor-pointer select-none">
      <input
        type="checkbox"
        id="theme-toggle"
        onChange={handleChnage}
        className="appearance-none transition-colors cursor-pointer w-14 h-[30px] rounded-full focus:outline-none border border-[#B7B8BB] dark:border-[#373C53] bg-white"
      />
      <span className="absolute font-medium text-xs uppercase right-1 text-white">
        <Sun />
      </span>
      <span className="absolute font-medium text-xs uppercase right-8 text-white">
        <Moon />
      </span>
      <span className="w-6 h-6 right-[29px] dark:right-[31px] absolute rounded-full transform transition-transform bg-[#0B111B] dark:bg-white" />
    </label>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="text-black1 dark:text-white">
          <OpenNav />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-black1 px-0 pt-4 border-l-0 min-w-[320px]">
        <SheetHeader>
          <SheetTitle className="text-black1 dark:text-white text-xl font-bold border-b border-[#b3b3b3] text-left pb-4 pl-4">
            Menu
          </SheetTitle>
        </SheetHeader>
        <Link href="/" className="flex items-center gap-2 mt-8 mx-auto w-fit">
          <Logo />
        </Link>
        <div className="my-8 mx-auto w-fit">
          <NavLinks nav_links={nav_links} />
        </div>
        <div
          onClick={() => {
            ScrollToSection("1");
          }}
          className="mb-8 mx-auto w-fit block"
        >
          <IconButton text="Get MicroSaaSFast" icon={<RightArrow />} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full fixed top-0 z-50 bg-white dark:bg-[#010814]">
      <div className="max-w-[1440px] w-full flex justify-between items-center gap-4 px-4 sm:px-12 py-6">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden lg:block">
          <NavLinks nav_links={nav_links} />
        </div>

        <div className="hidden lg:flex gap-8">
          <ThemeSwitch />
          <div
            onClick={() => {
              ScrollToSection("1");
            }}
          >
            <IconButton text="Get MicroSaaSFast" icon={<RightArrow />} />
          </div>
        </div>

        <div className="lg:hidden flex gap-2 sm:gap-4">
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
