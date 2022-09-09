import Head from 'next/head'
import Services from '../components/Landing/Services'
import Showcase from '../components/Landing/Showcase'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Affordable Health Care Plans</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className='mb-6' />
      <Showcase />
      <Services />
    </div>
  )
}
