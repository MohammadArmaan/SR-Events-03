import { Fade } from "react-awesome-reveal";
import Socials from "./Socials";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-primary py-12">
            <Fade
                direction="up"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-between">
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
                            iconStyles="text-white text-[20px] transition-all dark:text-white/70 hover:text-blue-100 dark:hover:text-white"
                        />
                        <div className="text-white">
                            Copyright &copy; {year}, All Rights Reserved
                        </div>
                    </div>
                </div>
            </Fade>
        </footer>
    );
}
