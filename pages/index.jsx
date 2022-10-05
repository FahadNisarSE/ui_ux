import Head from 'next/head'
import Styles from '../styles/Style';

const center = 'flex justify-center items-center';

import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Client,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from '../components';

export default function Home() {
  return (
    <div className='bg-[#00040F] w-full overflow-hidden'>
      <div className={`${Styles.paddingX} ${Styles.flexCenter}`}>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[#00040F] ${Styles.flexStart}`}>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>

      <div className={`bg-[#00040F] ${Styles.paddingX} ${Styles.flexStart}`}>
        <div className='xl:max-w-[1280px] w-full'>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}