import { Poppins, Roboto, Sen } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const senFont = Sen({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
  });
  
  const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-poppins",
  });

export const metadata = {
    title: {
        template: "SR Portraits & Events | %s",
        default: "SR Portraits & Events | Welcome",
    },
    description:
        "Capturing timeless moments with professional photography and seamless event management. Let us bring your vision to life with stunning visuals and unforgettable experiences.",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Header />
                    {children}
                    <Toaster />
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
