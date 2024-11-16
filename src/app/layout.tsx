import "./index.css";
import { raleway } from "./fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "John William Davis - Portfolio",
  description: "Porfolio website for John William Davis - Software Engineer",
};

// const Container = styled.div`
//   height: 100%;
// `;

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
