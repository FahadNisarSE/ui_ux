import Image from 'next/image';

import {apple, bill, google} from '../assets';
import styles, { layout } from '../styles/Style';

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[3] -left-1/2 top-7 w-[50%] h-[50%] rounded-full white__gradient opacity-50' />
      <div className='absolute z-[0] -left-1/2 bottom-7 w-[50%] h-[50%] rounded-full pink__gradient opacity-50' />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat dicta quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore sunt quia.
      </p>
      
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6 gap-5'>
        <Image src={apple} alt='Apple_Store' width={128} height={42} className='object-contain cursor-pointer' />
        <Image src={google} alt='Google_Play' width={128} height={42} className='object-contain cursor-pointer' />
      </div>
    </div>
  </section>
)

export default Billing