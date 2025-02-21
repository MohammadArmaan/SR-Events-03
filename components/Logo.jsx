import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image src="/logo.png" className="rounded-full" width={70} height={70} priority alt="Logo" />
        </Link>
    );
}
