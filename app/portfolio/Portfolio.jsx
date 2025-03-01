"use client";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import { Fade } from "react-awesome-reveal";


const portfolioData = [
    // Events
    {
        image: "/work/18.webp",
        category: "Events",
        name: "Engagement Ceremony",
        description: "Elegant decor and lighting for a special day.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/19.jpeg",
        category: "Events",
        name: "Cultural Fest",
        description: "Traditional performances and vibrant decor.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/24.png",
        category: "Events",
        name: "School Annual Day",
        description: "Celebrating students with performances & awards.",
        link: "/",
        codepen: "/",
    },

    // Photography
    {
        image: "/work/23.jpeg",
        category: "Photography",
        name: "Baby Shower",
        description: "Heartwarming baby shower moments captured.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/27.webp",
        category: "Photography",
        name: "Student Photography",
        description: "Memorable school group portraits.",
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
        image: "/work/21.jpeg",
        category: "Videography",
        name: "Anniversary Video",
        description: "Capturing precious memories beautifully.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/28.jpeg",
        category: "Videography",
        name: "Sports Coverage",
        description: "Exciting sports moments on camera.",
        link: "/",
        codepen: "/",
    },

    // Decorations
    {
        image: "/work/14.jpeg",
        category: "Decorations",
        name: "Wedding Decor",
        description: "Elegant floral and theme-based decor.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/22.jpeg",
        category: "Decorations",
        name: "Engagement Decor",
        description: "Beautiful backdrops for engagements.",
        link: "/",
        codepen: "/",
    },
    {
        image: "/work/26.png",
        category: "Decorations",
        name: "Building Illumination",
        description: "Festive lights for special occasions.",
        link: "/",
        codepen: "/",
    },
];



// const portfolioData = [
//     // Events
//     {
//         image: "/work/1.jpeg",
//         category: "Events",
//         name: "Grand Wedding Reception",
//         description:
//             "An extravagant wedding reception with stunning decor and lighting.",
//         link: "/",
//         codepen: "/",
//     },
//     {
//         image: "/work/6.jpeg",
//         category: "Events",
//         name: "Corporate Conference",
//         description: "Professional coverage of a high-profile corporate event.",
//         link: "/",
//         codepen: "/",
//     },
//     {
//         image: "/work/3.jpeg",
//         category: "Events",
//         name: "Birthday Bash",
//         description:
//             "Fun-filled birthday celebration captured in vivid detail.",
//         link: "/",
//         codepen: "/",
//     },

//     // Photography
//     {
//         image: "/work/1.jpeg",
//         category: "Photography",
//         name: "Bridal Portraits",
//         description: "Elegant and timeless bridal photography.",
//         link: "/",
//         codepen: "/",
//     },
//     {
//         image: "/work/2.jpeg",
//         category: "Photography",
//         name: "Wedding Photography",
//         description: "A religuos wedding highlights",
//         link: "/",
//         codepen: "/",
//     },
//     {
//         image: "/work/10.jpeg",
//         category: "Photography",
//         name: "Fashion Shoot",
//         description: "Stylized fashion photography with creative lighting.",
//         link: "/",
//         codepen: "/",
//     },

//     // Videography
//     {
//         image: "/work/12.jpeg",
//         category: "Videography",
//         name: "Wedding Highlights",
//         description: "Beautifully crafted wedding highlight video moments.",
//         link: "/",
//         codepen: "/",
//     },
//     {
//         image: "/work/7.jpeg",
//         category: "Videography",
//         name: "Corporate Branding Video",
//         description: "Engaging promotional video for brand awareness.",
//         link: "/",
//         codepen: "/",
//     },
//     {
//         image: "/work/11.jpeg",
//         category: "Videography",
//         name: "Music Video Production",
//         description: "Creative and high-quality music video production.",
//         link: "/",
//         codepen: "/",
//     },

//     // Decorations
//     {
//         image: "/work/14.jpeg",
//         category: "Decorations",
//         name: "Luxury Wedding Decor",
//         description: "Stunning floral and theme-based wedding decorations.",
//         link: "/",
//         codepen: "/",
//     },
//     {
//         image: "/work/13.webp",
//         category: "Decorations",
//         name: "Birthday Party Theme Setup",
//         description: "Themed birthday decorations with customized backdrops.",
//         link: "/",
//         codepen: "/",
//     },
//     {
//         image: "/work/15.jpeg",
//         category: "Decorations",
//         name: "Corporate Event Setup",
//         description:
//             "Professional and elegant event decor for corporate gatherings.",
//         link: "/",
//         codepen: "/",
//     },
// ];

const uniqueCategories = [
    "all categories",
    ...new Set(portfolioData.map((item) => item.category)),
];
export default function Portfolio() {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState("all categories");
    const filteredProjects = portfolioData.filter((project) => {
        return category === "all categories"
            ? project
            : project.category === category;
    });
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
                    Our Portfolio
                </h2>
            </Fade>
            <Tabs defaultValue={category} className="mb-24 xl:mb-48 p-2">
                <Fade
                    direction="up"
                    delay={600}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <TabsList className="w-full grid-h-full grid lg:grid-cols-5 lg:max-w-[740px] mb-12 mx-auto lg:border dark:border-none">
                        {categories.map((category, index) => (
                            <TabsTrigger
                                value={category}
                                key={index}
                                onClick={() => setCategory(category)}
                                className="capitalize w-[162px] md:w-auto"
                            >
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Fade>
                <Fade
                    direction="up"
                    delay={800}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <div className="text-lg mt-52 xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index) => (
                            <TabsContent
                                value={category}
                                key={index}
                                className="mx-auto"
                            >
                                <ProjectCard project={project} />
                            </TabsContent>
                        ))}
                    </div>
                </Fade>
            </Tabs>
        </div>
    );
}
