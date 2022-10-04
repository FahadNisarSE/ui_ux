import Image from "next/image"

import { quotes } from "../assets"

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ">
    <Image src={quotes} alt='quotes' width={42} height={27} className='object-contain' />
    <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
    <div className="flex flex-row">
      <Image src={img} alt={name} width={48} height={48} className='rounded-full' />

      <div className="flex flex-col ml-4">
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-gray-400'>{title}</p>
      </div>
    </div>
  </div>
)

export default FeedbackCard