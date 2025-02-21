import Form from "@/components/Form";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
    return (
        <div className="container mx-auto p-5">
            <div className="grid lg:grid-cols-2 pt-12 mb-6 xl:mb-24">
                <div className="flex flex-col justify-center">
                    <Fade
                        direction="up"
                        delay={400}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Hello
                        </div>
                    </Fade>
                    <Fade
                        direction="up"
                        delay={600}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <h1 className="h1 max-w-md mb-8">
                            Let&apos;s work together.
                        </h1>
                    </Fade>
                    <Fade
                        direction="up"
                        delay={800}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <p className="subtitle max-w-[400px]">
                            Thank you so much for considering us to orgainize
                            your events, it really is such an honour. Intrested
                            in learning more oor just want to say hello? kindly
                            fill out the contact form below and we will contact
                            you as soon as possible! We can&apos;t wait to hear
                            from you and orgainze your beautifull ocation.
                        </p>
                    </Fade>
                </div>
                <div className="lg:mt-24">
                    <Form />
                </div>
            </div>
        </div>
    );
}
