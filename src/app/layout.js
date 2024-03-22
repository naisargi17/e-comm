import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


import { ToastContainer, toast } from './nexttoast';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:{
    default: "Indian Kitchen Mart",
    template: "%s - Indian Kicthen Mart"
  },
  description: "Indian Kitchen Mart is your one-stop destination for all your kitchen needs, offering a vibrant and diverse array of products that celebrate the rich culinary traditions of India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={cn("relative h-full font-sans antialiased ",inter.className)}>
        <main className="relative flex flex-col  ">
        <div className="flex-grow flex-1 ">{children}
        <ToastContainer /> </div>
         </main>
      </body>
    </html>
  );
}
