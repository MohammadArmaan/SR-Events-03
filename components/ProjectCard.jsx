import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Group, Link2Icon } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project }) {
    return (
        <Card className="relative h-[300px] w-[350px] overflow-hidden group">
            <CardHeader className="p-0 relative">
                <div className="relative w-full h-[200px] flex items-center justify-center overflow-hidden">
                    <Image
                        src={project.image}
                        width={350}
                        height={200}
                        alt={project.name}
                        priority
                        className="absolute top-0 left-0 w-full h-full object-cover shadow-2xl transition-all group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all"></div>

                    <div className="absolute flex gap-x-4 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all">
                        <Link
                            href={project.link}
                            className="bg-secondary w-[40px] h-[40px] flex justify-center items-center rounded-full"
                        >
                            <Link2Icon size={20} />
                        </Link>
                        <Link
                            href={project.codepen}
                            className="bg-secondary w-[40px] h-[40px] flex justify-center items-center rounded-full"
                        >
                            <Group size={20} />
                        </Link>
                    </div>
                </div>
            </CardHeader>


            <Badge className="absolute top-4 left-4 uppercase text-sm font-medium bg-primary text-white px-2 py-1 rounded-md z-10">
                {project.category}
            </Badge>
            <div className="relative bg-white dark:bg-secondary h-[150px] px-6 py-4">
                <h4 className="text-xl font-semibold mb-1 z-10">
                    {project.name}
                </h4>
                <p className="text-muted-foreground text-sm z-10">
                    {project.description}
                </p>
            </div>
        </Card>
    );
}
