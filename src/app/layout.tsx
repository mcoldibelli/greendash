import { Roboto } from "next/font/google";
import '../styles/globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"]
});

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode }>
) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <title>Greendash</title>
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html >
  );
}
