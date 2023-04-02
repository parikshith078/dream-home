import Hoc from "../components/Hoc";
import "../styles/globals.css";

export const metadata = {
  title: "Dream Home",
  description: "A place to find your dream home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="pastel" lang="en">
      <body>
        <Hoc>{children}</Hoc>
      </body>
    </html>
  );
}
