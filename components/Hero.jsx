"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RiBookmark3Fill, RiBodyScanFill, RiServiceFill } from "react-icons/ri";
import Socials from "@/components/Socials";
import Badge from "@/components/Badge";
import HeroImg from "./HeoImg";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
    const textArray = [
        "Let's make magic!",
        "Capturing timeless moments!",
        "Creating unforgettable experiences!",
    ];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const i = loopNum % textArray.length;
        const fullText = textArray[i];

        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }

        const timeout = setTimeout(
            () => {
                setText(
                    isDeleting
                        ? fullText.substring(0, text.length - 1)
                        : fullText.substring(0, text.length + 1)
                );
            },
            isDeleting ? 100 : 150
        );

        return () => clearTimeout(timeout);
    }, [text, isDeleting, loopNum, textArray]);

    return (
        <section className="relative py-12 xl:py-24 text-white overflow-hidden">
            <div className="absolute inset-0 animate-gradient-bg bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"></div>
            <div className="relative container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <Fade
                            direction="up"
                            delay={400}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <div className="text-sm uppercase font-semibold mb-4 text-white tracking-[4px]">
                                SR Portraits & Events
                            </div>
                        </Fade>
                        <h1 className="h1 text-4xl font-bold">{text}|</h1>
                        <p className="max-w-[590px] mt-4 mx-auto xl:mx-0 text-white">
                            SR Portraits and Events is a premier photography and
                            event management company dedicated to capturing
                            unforgettable moments and crafting seamless
                            experiences.
                        </p>

                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"></div>
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconStyles="text-white text-[22px] hover:text-gray-300 transition-all"
                        />
                    </div>
                    <Fade
                        direction="right"
                        delay={400}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <div className="hidden xl:flex relative">
                            <HeroImg
                                containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom"
                                imgSrc="/about/photography.svg"
                            />
                        </div>
                    </Fade>
                </div>
                <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center justify-center mx-auto lg:grid-cols-3">
                            <Fade
                                direction="right"
                                delay={400}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <div className="mx-auto flex max-w-xs flex-col items-center justify-center gap-y-4">
                                    <dt className="text-base leading-7 text-gray-200">
                                        Years of Experience
                                    </dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                        <Badge
                                            icon={<RiBookmark3Fill />}
                                            endCountNum={5}
                                            endCountText="+"
                                            badgeText=""
                                        />
                                    </dd>
                                </div>
                                <div className="mx-auto flex max-w-xs flex-col items-center justify-center gap-y-4">
                                    <dt className="text-base leading-7 text-gray-200">
                                        Followers
                                    </dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                        <Badge
                                            icon={<RiBodyScanFill />}
                                            endCountNum={967}
                                            endCountText="+"
                                            badgeText=""
                                        />
                                    </dd>
                                </div>
                                <div className="mx-auto flex max-w-xs flex-col items-center justify-center gap-y-4">
                                    <dt className="text-base leading-7 text-gray-200">
                                        Projects
                                    </dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                        <Badge
                                            icon={<RiServiceFill />}
                                            endCountNum={50}
                                            endCountText="+"
                                            badgeText=""
                                        />
                                    </dd>
                                </div>
                            </Fade>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}
