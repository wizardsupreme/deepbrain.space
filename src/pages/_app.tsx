import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
} 