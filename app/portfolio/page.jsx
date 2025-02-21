import Portfolio from "./Portfolio";

export const metadata = {
    title: "Portfolio",
    description:
        "Explore our portfolio showcasing breathtaking photography and expertly managed events. Experience the artistry and dedication that define SR Portraits & Events.",
};

export default function PortfolioPage() {
    return (
        <section className="min-h-screen pt-12">
            <Portfolio />
        </section>
    );
}
