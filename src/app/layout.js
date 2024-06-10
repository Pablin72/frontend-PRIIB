import Header from "./header";
import Footer from "./footer";

import Styles from "./styles.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Documents Retrieval</title>
      </head>
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
