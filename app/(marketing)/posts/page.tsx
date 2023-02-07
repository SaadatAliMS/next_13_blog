'use client';
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from "./page.module.css"
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Posts() {
    const router=useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.centre}>
        <h2>Posts</h2>
       
      </div>
      <Link href='/'>                     {/* '/' is used for home path*/}
          Go to Home
        </Link>
        <Link href='/account'>                     {/* '/' is used for home path*/}
          Go to Accounts
        </Link>
        {/* <button type='button' onClick={()=>router.push('/')}>Go to Home</button> */}

       

    </main>
  )
};
