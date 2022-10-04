import Image from "next/image"

import styles from "../styles/Style"
import { arrowUp } from "../assets"

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} bg-[#00040F] w-[100%] h-[100%]  rounded-full`}>
        <div className={`${styles.flexStart} flex-row flex-wrap gap-2 `}>
          <p className='font-poppins font-medium text-[19px] leading-[23px]'>
            <span className="text-gradient">Get</span>
          </p>
          <Image src={arrowUp} alt="arrow" width={23} height={23} className='object-contain' />
          <p className='font-poppins font-medium text-[19px] leading-[23px]'>
          <span className="text-gradient">Started</span>
        </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted