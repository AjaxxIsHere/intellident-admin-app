import "./styles/globals.css";

export const metadata = {
  title: "Intellident.ai",
  description: "Intellident.ai Admin App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
