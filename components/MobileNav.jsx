import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog"; // Import DialogTitle
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

export default function MobileNav() {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <AlignJustify className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent>
                    {/* Add DialogTitle for accessibility */}
                    <DialogTitle className="sr-only">Mobile Navigation</DialogTitle> 
                    
                    <div className="flex flex-col items-center justify-between h-full py-8">
                        <div className="flex flex-col items-center gap-y-32">
                            <Logo />
                            <Nav
                                containerStyles="flex flex-col items-center justify-center gap-y-6"
                                linkStyles="text-1xl"
                            />
                        </div>
                        <Socials
                            containerStyles="flex gap-x-4"
                            iconStyles="text-2xl"
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
