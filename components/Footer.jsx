import Image from "next/image"

import { logo } from "../assets"
import { footerLinks, socialMedia } from "../Constants"

const Footer = () => (
  <section className={`flex justify-center items-center sm:py-16 py-6 flex-col sm:mt-0 mt-16`}>
    <div className={`flex justify-center items-start lg:flex-row flex-col mb-8 w-full gap-4`}>
      <div className="flex-1 flex flex-col items-start justify-start mr-10">
        <Image src={logo} alt='hoobank' width={266} height={72} className="object-contain" />
        <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] mt-4 max-w-[310px]">A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap sm:mt-5 mt-10">
        {
          footerLinks.map(footerLink => (
            <div key={footerLink.title} className='flex flex-col sm:my-0 my-4 min-w-[150px]'>
              <h4 className="font-poppins font-medium text-18px leading-[27px] text-white">{footerLink.title}</h4>
              <ul className="list-none flex flex-col gap-[16px] mt-4">
                {footerLink.links.map((link) => (
                  <li key={link.name} className='font-poppins font-normal text-[16px] text-gray-400 hover:text-[#5ce1e6] cursor-pointer'>{link.name}</li>
                ))}
              </ul>
            </div>

          ))
        }
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-1px border-t border-gray-700">
      <p className="font-poppins font-normal text-center text-18px leading-[27px] text-white">
        2021 HookBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6 gap-6">
        {
          socialMedia.map(social => (
            <Image key={social.id} src={social.icon} alt={social.id} width={21} height={21} className="object-contain cursor-pointer" />
        ))}
      </div>
    </div>
  </section>
)

export default Footer