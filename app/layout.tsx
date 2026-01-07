import './globals.css';

export const metadata = {
  title: "Beginner Investor Hub",
  description: "Learn investing fundamentals through interactive simulations and guided content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <footer className="border-t mt-auto">
            <div className="container mx-auto px-4 py-6">
              <p className="text-center text-sm text-muted-foreground">
                Educational demo only. Not financial advice.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
