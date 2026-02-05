import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '유럽모임 (EuroMoyam) - 유럽 한인들의 모든 것',
  description: '중고거래, 알바, 과외, 모임까지! 유럽 살이의 필수 앱, 유럽모임',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
