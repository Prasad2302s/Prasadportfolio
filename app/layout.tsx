
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prasad S Sawant - Designer × Editor",
  description: "Creative designer and editor specializing in video editing, UI design, and 3D animation. Bringing ideas to life through innovative visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
          .cursor-pointer {
            cursor: pointer;
          }
          .whitespace-nowrap {
            white-space: nowrap;
          }
          .bg-black\\/50 {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .bg-black\\/30 {
            background-color: rgba(0, 0, 0, 0.3);
          }
          .bg-white\\/90 {
            background-color: rgba(255, 255, 255, 0.9);
          }
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
          .backdrop-blur-md {
            backdrop-filter: blur(12px);
          }
          .text-gradient {
            background: linear-gradient(45deg, #f59e0b, #ef4444, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .aspect-\\[3\\/4\\] {
            aspect-ratio: 3/4;
          }
          .max-h-\\[90vh\\] {
            max-height: 90vh;
          }
        `}</style>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
