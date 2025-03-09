import { Fade } from "react-awesome-reveal";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

import {
    Camera,
    Video,
    Plane,
    Monitor,
    Sparkles,
    Heart,
    Music,
    Utensils,
    Package,
    Edit,
} from "lucide-react";
import Link from "next/link";

const servicesData = [
    {
        icon: <Camera size={48} strokeWidth={1} />,
        title: "Photography & Videography",
        description:
            "Professional photography and videography with creativity, quality, and integrity, capturing timeless moments.",
    },
    {
        icon: <Monitor size={48} strokeWidth={1} />,
        title: "Event Planning & Setup",
        description:
            "Complete event planning and setup with attention to detail, professionalism, and seamless execution.",
    },
    {
        icon: <Heart size={48} strokeWidth={1} />,
        title: "Wedding & Traditional Services",
        description:
            "Exquisite wedding and traditional services, ensuring culturally rich, elegant, and seamless celebrations.",
    },
    {
        icon: <Music size={48} strokeWidth={1} />,
        title: "Entertainment & Performances",
        description:
            "Engage your guests with live music, DJs, cultural performances, and interactive entertainment tailored to your event.",
    },
    {
        icon: <Package size={48} strokeWidth={1} />,
        title: "Logistics & Additional Services",
        description:
            "Comprehensive logistics for frames, gifts, and essentials, ensuring quality, precision, and seamless management.",
    },
    {
        icon: <Edit size={48} strokeWidth={1} />,
        title: "Editing & Designing Services",
        description:
            "Expert photo, video, and album editing with precision, creativity, and seamless storytelling.",
    },
];

// const servicesData = [
//     {
//         icon: <Camera size={48} strokeWidth={1} />,
//         title: "Photography & Videography",
//         description:
//             "Capture every moment with professional photography and cinematic videography, ensuring high-quality visuals for your special occasions.",
//     },
//     {
//         icon: <Monitor size={48} strokeWidth={1} />,
//         title: "Event Planning & Setup",
//         description:
//             "From LED screens to venue decorations, we create the perfect atmosphere with stunning visuals, lighting, and sound arrangements.",
//     },
//     {
//         icon: <Heart size={48} strokeWidth={1} />,
//         title: "Wedding & Traditional Services",
//         description:
//             "Make your wedding memorable with services like makeup, Mangal Vadya, welcome dancers, and customized decor.",
//     },
//     {
//         icon: <Music size={48} strokeWidth={1} />,
//         title: "Entertainment & Performances",
//         description:
//             "Engage your guests with live music, DJs, cultural performances, and interactive entertainment tailored to your event.",
//     },
//     {
//         icon: <Utensils size={48} strokeWidth={1} />,
//         title: "Catering & Hospitality",
//         description:
//             "Delight your guests with a wide range of catering services, featuring exquisite cuisines and impeccable hospitality.",
//     },
//     {
//         icon: <Package size={48} strokeWidth={1} />,
//         title: "Logistics & Additional Services",
//         description:
//             "From input frames to venue cleaning, we handle all behind-the-scenes logistics to ensure a seamless event experience.",
//     },
// ];

export default function Services() {
    return (
        <section className="mb-12 xl:mb-36 mt-36">
            <div className="container mx-auto flex flex-col justify-center">
                <Fade
                    direction="up"
                    delay={400}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">
                        Our Services
                    </h2>
                </Fade>

                <div className="flex justify-center">
                    <Fade
                        direction="up"
                        delay={600}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-12 xl:gap-y-24 md:gap-x-8 place-items-center p-5">
                            {servicesData.map((item, index) => (
                                <Card
                                    key={index}
                                    className="relative w-full max-w-[335px] h-[350px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-blue-100 dark:hover:bg-white/10 transition-all duration-700"
                                >
                                    <CardHeader className="text-primary">
                                        <div className="w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">
                                            {item.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardTitle className="mb-4 text-lg">
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className="text-lg">
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Fade>
                </div>
                <Link
                    href="/portfolio"
                    className="text-primary hover:underline mx-auto text-center mt-20"
                >
                    View All Our Services
                </Link>
            </div>
        </section>
    );
}
