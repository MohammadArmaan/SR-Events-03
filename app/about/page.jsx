import About from "./About";

export const metadata = {
    title: "About Us",
    description:
        "Discover the story behind SR Portraits & Events. Our passion for photography and event management drives us to create unforgettable memories for our clients.",
};

export default function AboutUs() {
    return (
        <section className="pb-12 xl:py-24 p-5">
            <About />
        </section>
    );
}
