import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Fade } from "react-awesome-reveal";

export default function Faq() {
    return (
        <section>
            <div className="container mx-auto p-5">
                <div className="w-full pt-12 mb-6 xl:mb-24">
                    <Fade
                        direction="up"
                        delay={600}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                    >
                        <h2 className="section-title mb-12 text-center mx-auto">
                            FAQ
                        </h2>
                    </Fade>
                </div>
                <Fade
                    direction="up"
                    delay={800}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                >
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="ms-3">
                                    01. What services do you offer for event
                                    photography and videography? (SEO-based)
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                We provide professional photography and
                                videography for weddings, corporate events,
                                product launches, and private gatherings. Our
                                team ensures high-quality visuals that capture
                                every moment with precision.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="ms-3">
                                    02. How do you handle event planning and
                                    coordination? (SEO-based)
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Our event management services cover venue
                                selection, vendor coordination, timeline
                                planning, and on-the-day event execution to
                                ensure a seamless experience for our clients.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="ms-3">
                                    03. Do you offer live streaming services for
                                    events? (SEO-based)
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes, we offer high-quality live streaming
                                services for corporate events, weddings, and
                                special occasions, ensuring remote attendees can
                                experience the event in real-time.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <div className="ms-3">
                                    04. What is your turnaround time for
                                    delivering event photos and videos?
                                    (SEO-based)
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Our standard turnaround time is{" "}
                                <b>5-7 business days</b> for edited photos and{" "}
                                <b>2-3 weeks</b> for fully edited event videos.
                                Expedited delivery is available upon request.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                                <div className="ms-3">
                                    05. Can you customize event themes and décor
                                    based on client preferences? (SEO-based)
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Absolutely! We specialize in personalized event
                                themes, decorations, and setups tailored to
                                match our clients' vision, whether it's a
                                wedding, corporate function, or private party.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Fade>
            </div>
        </section>
    );
}
