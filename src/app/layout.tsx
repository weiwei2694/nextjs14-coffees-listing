import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Coffee Listing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="bg-dark_gray min-h-fit min-w-fit">
          <div className="fixed left-0 right-0">
            <Image
              src="/bg-cafe.jpg"
              alt="Background Coffee"
              width={1400}
              height={200}
              className="w-full h-[300px]"
            />
          </div>
          {children}
        </main>
      </body>
    </html >
  );
}
