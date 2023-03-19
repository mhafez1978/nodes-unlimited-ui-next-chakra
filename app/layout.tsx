'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './assets/Footer';
import NavMenu from './assets/NavMenu';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider>
            <NavMenu />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
