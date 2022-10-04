import Image from 'next/image'

import { card } from '../assets'
import styles, { layout } from '../styles/Style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil culpa perferendis rem recusandae ratione hic maxime quam sapiente, dolores inventore esse deleniti quisquam repellat quas est, tenetur earum totam?
        </p>
        <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} alt='card' className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default CardDeal