"use client";

import Link from "next/link";
import {
    RiSnapchatFill,
    RiFacebookFill,
    RiInstagramFill,
    RiWhatsappFill,

    RiTwitterXFill,
} from "react-icons/ri";

const icons = [
    { path: "https://www.facebook.com/share/1BzxGZ2UwT/", name: <RiFacebookFill /> },
    { path: "https://www.instagram.com/sr_portraits.events?igsh=bHppZWg3M3p4aHB5", name: <RiInstagramFill /> },
    { path: "https://wa.link/20qt1s", name: <RiWhatsappFill /> },
    { path: "https://www.snapchat.com/add/srportraits.eve?share_id=n50Yadrbl0A&locale=en-GB", name: <RiSnapchatFill /> },
    { path: "https://x.com/Sr_Portraits?t=z-5wL4wDiiJEOPkBRd4YMA&s=09", name: <RiTwitterXFill /> },
];

export default function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => (
                <a href={icon.path} key={index} target="_blank">
                    <div className={`${iconStyles}`}>{icon.name}</div>
                </a>
            ))}
        </div>
    );
}
