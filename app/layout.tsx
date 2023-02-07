import './globals.css'
import styles from './layout.module.css'
import utilStyles from './utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

const name="Saadat Ali"
export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <head />
      <body>
        <div className='styles.container'>
      <header className={styles.header}> 
      <Link href="/">
              <Image
                priority
                src="/images/profile.jpeg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            {children} 
            </header>
            </div>

    
     </body>

          
          
    </html>
  )
}
