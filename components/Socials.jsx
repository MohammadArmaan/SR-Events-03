"use client";

import Link from "next/link";
import {
    RiSnapchatFill,
    RiFacebookFill,
    RiInstagramFill,
    RiWhatsappFill,
    RiTwitterFill,
} from "react-icons/ri";

const icons = [
    { path: "/", name: <RiFacebookFill /> },
    { path: "/", name: <RiInstagramFill /> },
    { path: "/", name: <RiWhatsappFill /> },
    { path: "/", name: <RiSnapchatFill /> },
    { path: "/", name: <RiTwitterFill /> },
];

export default function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => (
                <Link href={icon.path} key={index}>
                    <div className={`${iconStyles}`}>{icon.name}</div>
                </Link>
            ))}
        </div>
    );
}
