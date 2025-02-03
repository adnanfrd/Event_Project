import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "My Project",
  description: "Created by M Adnan Fareed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
