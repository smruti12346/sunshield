import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-L8HQK6WQF0"/>
      <script dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
        
        gtag('config', 'G-L8HQK6WQF0');
        `
       }}/>
      
      <meta name="google-site-verification" content="G4JkJJc4_Xvqoqq7ASsdjKN8emO24n6TcfTCi4wsLKw" />
      
      
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}
