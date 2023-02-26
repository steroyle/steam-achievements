// import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import SteamAchievementsTheme from '@/components/theme/SteamAchievementsTheme';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={SteamAchievementsTheme}
      >      
        <Component {...pageProps} />
      </MantineProvider >
    </div>
  )
}
