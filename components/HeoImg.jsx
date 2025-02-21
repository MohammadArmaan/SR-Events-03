import Image from "next/image";

export default function HeroImg({ containerStyles, imgSrc }) {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} fill priority alt="Image" />
        </div>
    );
}
