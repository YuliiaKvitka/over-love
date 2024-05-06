// import { Inter } from 'next/font/google';
import './globals.css';
import './base.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Over Love',
  description: 'Over Love',
  icons: {
    icon: '/public/favicon/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest'></link>
      </head>
      <body className='container'>{children}</body>
    </html>
  );
}
