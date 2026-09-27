import type { Metadata, Viewport } from 'next';
import { bodyClassName, siteMetadata, siteViewport } from '../layout-config';
import '../globals.css';

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default function RedirectLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr-Latn">
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
