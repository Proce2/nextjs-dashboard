import { Inter, Lusitana } from 'next/font/google';

// define your variable fonts
const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({ weight: '400', subsets: ['latin'] });

// use named exports
export { inter, lusitana };
