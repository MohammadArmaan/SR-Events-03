"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function About() {
    return (
        <div className="container mx-auto">
            <Fade
                direction="up"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About Us
                </h2>
            </Fade>
            <div className="flex flex-col xl:flex-row gap-x-24">
                <Fade
                    direction="left"
                    delay={600}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                {/* Image */}
                    <div className="relative flex-1 xl:flex">
                        <Image
                            src="/about/sr-blue.png"
                            className="w-[505px] h-[505px] bg-repeat relative custom-rounded"
                            width={500}
                            height={500}
                            priority
                            alt="Logo"
                        />
                    </div>
                </Fade>
                <div className="flex-1">
                    <div className="text-lg mt-12 xl:mt-3">
                        <div className="text-center xl:text-left">
                            <Fade
                                direction="up"
                                delay={800}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <h3 className="h3 mb-4">
                                    Let's Plan Your Perfect Events
                                </h3>
                            </Fade>
                            <Fade
                                direction="up"
                                delay={1000}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                    SR Portraits and Events is a premier
                                    photography and event management company
                                    dedicated to capturing unforgettable moments
                                    and crafting seamless experiences.
                                </p>
                            </Fade>
                            <Fade
                                direction="up"
                                delay={1200}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                    Whether it&apos;s a grand wedding, a
                                    corporate gathering, or a personal
                                    milestone, we blend creativity, precision,
                                    and passion to bring your vision to life.
                                    With a team of skilled photographers, event
                                    planners, and creative designers, we ensure
                                    every detail is handled with excellence,
                                    making your special occasions truly
                                    memorable.
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
