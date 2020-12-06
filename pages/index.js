import Head from 'next/head'
import SideBar from '../components/Sidebar'
import PortfolioGallery from '../components/PortfolioGallery'

export default function Home() {
  return (
    <>
      <Head>
        <title>Azhari Subroto</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,600;1,200;1,600&display=swap" rel="stylesheet" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <main className="main">
        <article className="row">
          <SideBar className="sidebar" />

          <PortfolioGallery className="content" />
        </article>
      </main>
    </>
  )
}
