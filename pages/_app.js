import Navbar from '../components/include/Navbar'
import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Include/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
      <meta charSet="UTF-8"/>
      <meta name="description" content="Free Web tutorials"/>
      <meta name="keywords" content="React Js, NextJs"/>
      <meta name="author" content="Mohammed Hesham"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
