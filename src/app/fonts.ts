import { Raleway } from 'next/font/google';
import { Merriweather } from 'next/font/google';

export const raleway = Raleway({ subsets: ['latin'] });

export const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});
