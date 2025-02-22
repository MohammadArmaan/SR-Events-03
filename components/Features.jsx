import {
    CameraIcon,
    FolderIcon,
    AdjustmentsHorizontalIcon,
    CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { Fade } from "react-awesome-reveal";

const features = [
    {
        name: "PHOTOGRAPHY",
        description:
            "Studio comes with elements made specifically for photographers, including the client list, password protected pages, and the proofing gallery.",
        icon: CameraIcon,
    },
    {
        name: "PORTFOLIO LISTS",
        description:
            "Our photographers are skilled in photography, drone cinematics, and cinematics, ensuring breathtaking visuals for every occasion.",
        icon: FolderIcon,
    },
    {
        name: "FULLY CUSTOMIZABLE",
        description:
            "The photos could be customized into any frame or cup, allowing you to create unique personalized products.",
        icon: AdjustmentsHorizontalIcon,
    },
    {
        name: "SEAMLESS EVENT EXPERIENCE",
        description:
            "Easily manage events directly on your website, from scheduling to guest lists, ensuring seamless coordination.",
        icon: CalendarDaysIcon,
    },
];

export default function Features() {
    return (
        <section className="pb-12 py-24">
            <div className="container mx-auto">
                <Fade
                    direction="up"
                    delay={400}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
                        Our Mission
                    </h2>
                </Fade>
                <div className="flex flex-col">
                    <div className="mx-auto mx-w-7xl text-center">
                        <Fade
                            direction="up"
                            delay={600}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                                Capturing moments, crafting experiences.
                            </p>
                        </Fade>
                        <Fade
                            direction="up"
                            delay={800}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <p className="mt-6 text-md leading-8 text-black dark:text-white">
                                To be a leading name in photography and event
                                management, known for our artistic excellence,
                                innovative solutions, and unparalleled customer
                                satisfaction. We aspire to create timeless
                                memories and extraordinary events that leave a
                                lasting impact.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div className="md:mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lgmax-w-4xl mx-5">
                    <Fade
                        direction="up"
                        delay={400}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="relative hover:scale-110 transition-all shadow-2xl p-5 rounded-md"
                                >
                                    <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                                        <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center">
                                            <feature.icon
                                                className="h-[36px] w-[36px] text-white"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="text-black dark:text-white">
                                            {feature.name}
                                        </div>
                                    </dt>
                                    <dd className="mt-2 text-base leading-7">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
