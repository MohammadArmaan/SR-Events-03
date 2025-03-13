"use client";
import {
    UserCheck,
    MailIcon,
    ArrowRightIcon,
    MessageSquare,
    UserRoundCheck,
    Building,
    Phone,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Toast } from "./ui/toast";
import { Fade } from "react-awesome-reveal";
import { supabase } from "@/lib/supabase";

export default function Form() {
    const { toast } = useToast();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [message, setMessage] = useState("");

    function submitHandler(e) {
        e.preventDefault();
      
        const contactDetails = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phoneNo,
          message: message,
        };

        if(!contactDetails) return;
      
        supabase
          .from("contact")
          .insert([contactDetails])
          .then(({ data, error }) => {
            if (error) {
              console.error("Error submitting form:", error);
            } else {
              toast({
                title: "Message Sent",
                description: "Thank you for your message",
                action: <ToastAction altText="Close">Close</ToastAction>,
              });
      
              setFirstName("");
              setLastName("");
              setEmail("");
              setPhoneNo("");
              setMessage("");
            }
          });
      }

    return (
        <form className="flex flex-col gap-y-4" onSubmit={submitHandler}>
            <Fade
                direction="up"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <div className="relative flex items-center">
                    <Input
                        type="name"
                        id="first-name"
                        placeholder="First Name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <UserCheck className="absolute right-6" size={20} />
                </div>
            </Fade>

            <Fade
                direction="up"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <div className="relative flex items-center">
                    <Input
                        type="name"
                        id="last-name"
                        placeholder="Last Name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <UserRoundCheck className="absolute right-6" size={20} />
                </div>
            </Fade>

            <Fade
                direction="up"
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <div className="relative flex items-center">
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Building className="absolute right-6" size={20} />
                </div>
            </Fade>

            <Fade
                direction="up"
                delay={1000}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <div className="relative flex items-center">
                    <Input
                        type="tel"
                        id="phone"
                        placeholder="Phone Number"
                        required
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                    />
                    <Phone className="absolute right-6" size={20} />
                </div>
            </Fade>

            <Fade
                direction="up"
                delay={1200}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <div className="relative flex items-center">
                    <Textarea
                        placeholder="Enter Your Message Here..."
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <MessageSquare
                        className="absolute top-4 right-6"
                        size={20}
                    />
                </div>
            </Fade>

            <Fade
                direction="up"
                delay={1400}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <Button
                    className="flex items-center gap-x-1 max-w-[165px]"
                >
                    Let's Talk
                    <ArrowRightIcon size={20} />
                </Button>
            </Fade>
        </form>
    );
}
