import "./globals.css";

export const metadata = {
  title: "Dynamics Trainer",
  description: "Duolingo-style Dynamics learning system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-50">
        {children}
      </body>
    </html>
  );
}
