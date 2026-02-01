import { ThemeProvider } from '@/providers/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SkipToContent from '@/components/SkipToContent';
import PageTransition from '@/components/PageTransition';
import { css } from '../../../styled-system/css';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <SkipToContent />
      <div className={css({
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bg: 'bg',
        color: 'text',
        transition: 'background-color 0.3s, color 0.3s',
      })}>
        <Navigation />
        <main id="main-content" className={css({ flex: 1 })}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
