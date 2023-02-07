'use client';
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from "./page.module.css"
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Account() {
    const router=useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.centre}>
        <h2>Accounts</h2>
       
      </div>
      <Link href='/'>                     {/* '/' is used for home path*/}
          Go to Home
        </Link>
        <Link href='/posts'>                     {/* '/' is used for home path*/}
          Go to Posts
        </Link>
        {/* <button type='button' onClick={()=>router.push('/')}>Go to Home</button> */}

       

    </main>
  )
};
