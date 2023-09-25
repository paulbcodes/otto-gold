import ClientProvider from "@/components/ClientProvider";
import "./globals.css";
import { WalletProvider } from "@/context/WalletContext";

export const metadata = {
  title: "Otto Gold",
  description: "Otto Gold NFT Minting App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="scrollbar-thin scrollbar-track-black scrollbar-thumb-cyan-600">
        <WalletProvider>
          <ClientProvider>{children}</ClientProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
