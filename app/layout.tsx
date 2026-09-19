import "./globals.css";

export const metadata = {
  title: "Nimra Shoukat — Software Engineer",
  description:
    "Portfolio of Nimra Shoukat, BS Software Engineering student at COMSATS University Islamabad, Vehari Campus.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}