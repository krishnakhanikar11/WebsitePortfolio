import Gallery from "./Gallery";
import Header from "./Header";
import App from './cursor'
import Head from 'next/head';


 function Layout({children}) {
     return (
         <div>
             <Head>
      <link rel="shortcut icon" href="/iconMeta.png" />
    </Head>
            
            <Header />
            <App />
            {children}
            <Gallery />
         </div>
     )
 }

export default Layout
