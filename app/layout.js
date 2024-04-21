import "./globals.css";
import NavBar from "@/components/nav-bar/nav-bar";

export const metadata = {
  title: "Upwork",
  description:
    "Join Upwork to connect with top freelance professionals and dynamic businesses worldwide. Discover opportunities, manage projects, and build success – all on one platform. Start your journey with Upwork today and empower your work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
