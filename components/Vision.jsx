'use client'
import { RiMenFill } from "react-icons/ri";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CalendarDaysIcon, SparklesIcon } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { supabase } from "@/lib/supabase";

export default function Vision() {
    const [email, setEmail] = useState('')
    const { toast } = useToast();

    async function submitHandler() {
        if (!email) return;
    
        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
    
            if (res.ok) {
                toast({
                    title: "Subscribed",
                    description: "Thank you for subscribing!",
                    action: <ToastAction altText="Close">Close</ToastAction>,
                });
                setEmail('')
            } else {
                throw new Error("Subscription failed");
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "You are already subscribed or an error occurred.",
                variant: "destructive",
                action: <ToastAction altText="Close">Close</ToastAction>,
            });
        }
    }
    

    return (
        <section className="mt-[50px]">
            <div className="relative bg-blue-100 overflow-hidden py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <Fade
                                direction="up"
                                delay={400}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <h2 className="text-3xl font-bold tracking-light section-title md:text-5xl">
                                    Our Vision
                                </h2>
                            </Fade>
                            <Fade
                                direction="up"
                                delay={600}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <p className="mt-4 text-lg leading-8 subtitle">
                                    To be a leading name in photography and
                                    event management, known for our artistic
                                    excellence, innovative solutions, and
                                    unparalleled customer satisfaction. We
                                    aspire to create timeless memories and
                                    extraordinary events that leave a lasting
                                    impact. So subscribe to our Newsletter to be
                                    part of our vision
                                </p>
                            </Fade>
                            <Fade
                                direction="up"
                                delay={600}
                                cascade
                                damping={1e-1}
                                triggerOnce={true}
                            >
                                <div className="mt-6 flex flex-col md:flex-row gap-y-4 max-w-md gap-x-4">
                                    <label className="sr-only">
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Button onClick={submitHandler}>
                                        Subscribe <RiMenFill size={18} />
                                    </Button>
                                </div>
                            </Fade>
                        </div>
                        <Fade
                            direction="up"
                            delay={600}
                            cascade
                            damping={1e-1}
                            triggerOnce={true}
                        >
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                                <div className="flex flex-col items-start">
                                    <div className="bg-primary p-2 ring-1 ring-white/0 rounded-full">
                                        <CalendarDaysIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <dt className="mt-4 font-semibold text-muted-foreground">
                                        Weeky Articles
                                    </dt>
                                    <dd className="mt-2 leading-7 dark:text-black">
                                        Stay updated with insightful articles
                                        covering various topics every week.
                                        Explore engaging content that informs,
                                        inspires, and keeps you ahead!
                                    </dd>
                                </div>

                                <div className="flex flex-col items-start">
                                    <div className="bg-primary p-2 ring-1 ring-white/0 rounded-full">
                                        <SparklesIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <dt className="mt-4 font-semibold text-muted-foreground">
                                        Unforgettable Experiences
                                    </dt>
                                    <dd className="mt-2 leading-7 dark:text-black">
                                        We craft extraordinary events tailored
                                        to your vision. Whether it's a corporate
                                        gathering, wedding, or special
                                        celebration, we bring your ideas to life
                                        with precision and creativity.
                                    </dd>
                                </div>
                            </dl>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}
