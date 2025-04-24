import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import type { Viewport } from 'next';
import './globals.css';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import z from 'zod';
import { cn } from '@repo/utils';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
};

const parseTheme = (theme: RequestCookie | undefined) => {
  try {
    return z
      .union([z.literal('system'), z.literal('light'), z.literal('dark')])
      .parse(theme?.value);
  } catch (error) {
    return 'system';
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = parseTheme((await cookies()).get('theme'));

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.className, 'antialiased')}
    >
      <body className="bg-bg-white-0 text-text-strong-950">
        <ThemeProvider attribute="class" defaultTheme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
