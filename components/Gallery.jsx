import React from "react";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-awesome-reveal";

const projectData = [
    {
        image: "/work/1.jpeg",
        category: "Wedding",
        name: "February 11, 2025",
        description: "Elegant wedding moments captured beautifully.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/8.jpeg",
        category: "Pre-Wedding",
        name: "February 1, 2025",
        description: "Romantic pre-wedding shoot in stunning locations.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/6.jpeg",
        category: "Corporate Event",
        name: "January 11, 2025",
        description: "Professional corporate event coverage with highlights.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/7.jpeg",
        category: "Corporate Event",
        name: "December 25, 2024",
        description: "Exclusive corporate gala with premium photography.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/3.jpeg",
        category: "Party",
        name: "February 2, 2025",
        description: "Vibrant party moments with energetic captures.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/2.jpeg",
        category: "Wedding",
        name: "January 2, 2025",
        description: "Timeless wedding memories with candid shots.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/5.webp",
        category: "Seminar",
        name: "January 29, 2025",
        description: "Engaging seminar photography with speaker highlights.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/4.jpeg",
        category: "Party",
        name: "November 29, 2024",
        description: "Exclusive party photography with lively moments.",
        link: "/",
        codepen: "/",
    },
];

export default function Gallery() {
    return (
        <section className="relative mb-12 xl:mb-48 mx-auto text-center">
            <div className="container mx-auto">
                <Fade
                    direction="up"
                    delay={400}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                        Our Events
                    </h2>
                </Fade>
            </div>
            <Fade
                direction="up"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center p-5">
                    {projectData.map((project) => (
                        <div key={project.name} className="flex justify-center">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </Fade>
        </section>
    );
}
