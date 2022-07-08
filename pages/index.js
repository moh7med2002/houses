import Head from 'next/head'
import Land from '../components/home/Land'
import Search from '../components/home/Search'
import styles from '../styles/Home.module.css'



export default function Home() {


  return (
    <div className='mt-[70px]'>
      <Head>
        <title>Home</title>
        <meta name='desription' content='Home Page'/>
      </Head>
      <Land/>
      <Search/>
    </div>
  )
}
