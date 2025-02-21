import Contact from "./Contact";

export const metadata = {
    title: "Contact Us",
    description:
        "Get in touch with SR Portraits & Events for inquiries, bookings, and collaborations. Let's bring your vision to life with stunning photography and seamless event planning.",
};

export default function ContactPage() {
    return <section className="min-h-screen">
        <Contact />
    </section>;
}
