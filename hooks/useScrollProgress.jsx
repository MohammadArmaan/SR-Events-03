import { useEffect, useState } from "react";

export default function useScrollProgress() {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight =
                document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(
                    parseFloat(
                        ((currentProgress / scrollHeight) * 100).toFixed(2)
                    )
                );
            }
        };
        window.addEventListener("scroll", updateScrollCompletion);
        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []);

    return completion;
}
