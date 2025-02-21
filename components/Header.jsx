"use client";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

export default function Header() {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setHeader(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-30 px-6 transition-all ${
                header
                    ? "bg-white shadow-md dark:bg-accent py-4"
                    : `${pathname === "/" ? "bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 py-6 dark:bg-transparent text-white" : "py-6" }`
            }`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        <Nav
                            containerStyles="hidden xl:flex gap-x-8 items-center"
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ThemeToggler />
                        <div className="xl:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
