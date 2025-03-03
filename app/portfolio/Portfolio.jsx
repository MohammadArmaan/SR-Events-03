"use client";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const portfolioData = [
    // Events
    {
        image: "/work/2.jpeg",
        category: "Events",
        name: "Traditional Wedding",
        description: "A timeless celebration of culture and love.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/19.jpeg",
        category: "Events",
        name: "Cultural Fest",
        description:
            "A lively celebration with music, dance, and fun activities.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/20.png",
        category: "Events",
        name: "Annual School Gala",
        description:
            "A celebration of talent and achievements.",
        link: "/",
        codepen: "/",
    },

    // Photography
    {
        image: "/work/25.jpeg",
        category: "Photography",
        name: "Maternity Shoot",
        description: "Capturing the beauty and joy of motherhood.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/21.jpeg",
        category: "Photography",
        name: "Cinematic Shoot",
        description: "Artistic visuals with a movie-like aesthetic.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/10.jpeg",
        category: "Photography",
        name: "Fashion Shoot",
        description: "Creative lighting and stylized shots.",
        link: "/",
        codepen: "/",
    },

    // Videography
    {
        image: "/work/12.jpeg",
        category: "Videography",
        name: "Wedding Highlights",
        description: "Beautiful moments in cinematic style.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/22.jpeg",
        category: "Videography",
        name: "Corporate Events",
        description:
            "Professional coverage of business gatherings and conferences.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/23.webp",
        category: "Videography",
        name: "Ad Shoot",
        description: "High-quality product shoot with cinematic visuals.",
        link: "/",
        codepen: "/",
    },

    // Decorations
    {
        image: "/work/14.jpeg",
        category: "Decorations",
        name: "Flower Decor",
        description:
            "Stunning floral arrangements for a breathtaking ambiance.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/26.jpeg",
        category: "Decorations",
        name: "Balloon Decor",
        description: "Colorful balloon setups to elevate any celebration.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/27.jpeg",
        category: "Decorations",
        name: "House Warming",
        description: "Warm and welcoming decor for your new home celebration.",
        link: "/",
        codepen: "/",
    },
];


const uniqueCategories = ["all categories", ...new Set(portfolioData.map((item) => item.category))];

export default function Portfolio() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PortfolioContent />
        </Suspense>
    );
}

function PortfolioContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const categoryFromUrl = searchParams.get("category") || "all categories";
    const [category, setCategory] = useState(categoryFromUrl);

    useEffect(() => {
        if (category !== categoryFromUrl) {
            const newUrl = category === "all categories" ? "/portfolio" : `/portfolio?category=${category}`;
            router.push(newUrl, { scroll: false });
        }
    }, [category, router, categoryFromUrl]);

    const filteredProjects = portfolioData.filter((project) =>
        category === "all categories" ? project : project.category === category
    );

    return (
        <div className="container mx-auto">
            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce={true}>
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Our Portfolio</h2>
            </Fade>
            <Tabs defaultValue={category} className="mb-24 xl:mb-48 p-2">
                <Fade direction="up" delay={600} cascade damping={0.1} triggerOnce={true}>
                    <TabsList className="w-full grid-h-full grid lg:grid-cols-5 lg:max-w-[740px] mb-12 mx-auto lg:border dark:border-none">
                        {uniqueCategories.map((cat, index) => (
                            <TabsTrigger
                                value={cat}
                                key={index}
                                onClick={() => setCategory(cat)}
                                className="capitalize w-[162px] md:w-auto"
                            >
                                {cat}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Fade>
                <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce={true}>
                    <div className="text-lg mt-52 xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index) => (
                            <TabsContent value={category} key={index} className="mx-auto">
                                <ProjectCard project={project} />
                            </TabsContent>
                        ))}
                    </div>
                </Fade>
            </Tabs>
        </div>
    );
}