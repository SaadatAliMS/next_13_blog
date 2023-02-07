'use client';
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { posts } from '@/data/posts';

type Posts={id:string,title:string,date:string}

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const router=useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.centre}>
        <h2>Home</h2>
        {/* <a href='/posts'>  /* <a> </a> is anchor tag in html but it refreshes page every time and make app slow. 
            we will use here nextjs Link tag which is more powerful */}
          </div>
          <div>
            {posts.map(({id,title,date}:Posts)=>(
              <>
            <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <p>{date}</p>
              </>
            ))}
            
            </div>

      <Link href='/posts'>                     {/* '/' is used for home path*/}
          Go to Posts
        </Link>
        <Link href='/account'>                     {/* '/' is used for home path*/}
          Go to Accounts
        </Link>
        {/* <button type='button' onClick={()=>router.push('/posts')}>Go to Posts</button>  router may be used for button.but for linking normally <Link> tag of next.js is used*/}

    </main>
  )
};
