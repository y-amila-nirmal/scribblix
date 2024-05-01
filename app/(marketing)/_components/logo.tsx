import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export const Logo = () => {
    return(
        <div className="hidden md:flex items-center gap-x-2">
            <Image 
                src="/logo.png"
                height="80"
                width="80"
                alt="Logo"
            />
            <p className={(cn("font-semibold", font.className))}>
                Scribblix
            </p>
        </div>
    )
}