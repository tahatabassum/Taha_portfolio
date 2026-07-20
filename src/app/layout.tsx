import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taha Tabassum | AI Engineer & Full-Stack Developer',
  description:
    'Portfolio of Taha Tabassum — Computer Science student specializing in AI-powered web applications, computer vision, automation workflows, and full-stack development.',
  keywords: [
    'Taha Tabassum',
    'AI Engineer',
    'Full-Stack Developer',
    'FastAPI',
    'React',
    'TypeScript',
    'OpenCV',
    'Gemini AI',
    'Advantage AI',
    'Faisalabad Pakistan',
  ],
  authors: [{ name: 'Taha Tabassum' }],
  openGraph: {
    title: 'Taha Tabassum | AI Engineer & Full-Stack Developer',
    description: 'Building AI-Powered Applications That Solve Real Business Problems',
    url: 'https://taha-portfolio-xi.vercel.app/',
    siteName: 'Taha Tabassum Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
