"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const reviewData = [
    {
        avatar: "/reviews/avatar-1.png",
        name: "Jennifer",
        job: "Chief",
        review: "Absolutely amazing service! The team was professional, and the final outcome exceeded my expectations. Highly recommend!",
    },
    {
        avatar: "/reviews/review-1.jpg",
        name: "Deepak S.G",
        job: "Editor & Videographer",
        review: "A fantastic experience from start to finish. The attention to detail and creativity were truly outstanding!",
    },
    {
        avatar: "/reviews/review-2.jpg",
        name: "Dhananjaya A.R",
        job: "Photographer",
        review: "Top-notch quality and fast delivery! I am beyond satisfied with the results and will definitely return for future projects.",
    },
    {
        avatar: "/reviews/review-3.jpg",
        name: "Gireesh",
        job: "Decorator",
        review: "Excellent work! The team was responsive, and the level of expertise shown in the final product was remarkable.",
    },
    {
        avatar: "/reviews/review-4.jpg",
        name: "Manu H.S",
        job: "Decorator",
        review: "From start to finish, everything was smooth and professional. The outcome was exactly what I envisioned!",
    },
];

export default function Reviews() {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto md:p-0 p-5">
                <Fade
                    direction="up"
                    delay={600}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <h2 className="section-title mb-12 text-center mx-auto">
                        Reviews
                    </h2>
                </Fade>
                <Fade
                    direction="up"
                    delay={800}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1200: { slidesPerView: 3 },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        className="h-[350px]"
                    >
                        {reviewData.map((person, index) => (
                            <SwiperSlide key={index}>
                                <Card className="p-8 min-h-[300px] w-[300px] md:w-[400px] cursor-pointer hover:bg-blue-100 dark:hover:bg-white/10 transition-all duration-700">
                                    <CardHeader className="p-0 mb-3">
                                        <div className="flex flex-col items-start gap-x-4 ">
                                            <Image
                                                src={person.avatar}
                                                width={70}
                                                height={70}
                                                alt=""
                                                priority
                                                className="mb-2 rounded-full shadow-md"
                                            />
                                            <div className="flex flex-col">
                                                <CardTitle>
                                                    {person.name}
                                                </CardTitle>
                                                <p>{person.job}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className="text-lg text-muted-foreground">
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Fade>
            </div>
        </section>
    );
}
