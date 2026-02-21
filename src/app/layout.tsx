
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glitch Coffee | Step Into The Static',
  description: 'Minimalist industrial coffee roastery in Jakarta. Duduk, nikmatin kopi, dan jadi diri sendiri aja.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-black text-white overflow-x-hidden">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
