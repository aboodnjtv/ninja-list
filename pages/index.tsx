import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from "../comps/Footer"
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    //  need this empty tag <></>
    //  because we cannot return 2 thigns
    <> 
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>
          Homepage
        </h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore reprehenderit quos fugiat sit architecto ad voluptatem, officia optio fuga doloremque recusandae, magnam laborum. Error veritatis dolor id nulla corporis voluptatum.</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore reprehenderit quos fugiat sit architecto ad voluptatem, officia optio fuga doloremque recusandae, magnam laborum. Error veritatis dolor id nulla corporis voluptatum.</p>
        
        <Link className={styles.btn} href="/ningas">See Ninga Listing</Link>
      </div>
    </>
  )
}
