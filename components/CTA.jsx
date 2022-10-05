import Button from "./Button"

const CTA = () => (
  <section className={`flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mt-24 `}>
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">Let's try our <br /> service now!</h2>
      <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">Everything you need to accept card payment and grow yourbusiness anywhere on the planet.</p>
    </div>
    <div className={`flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA