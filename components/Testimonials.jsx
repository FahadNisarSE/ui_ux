import { feedback } from "../Constants"
import FeedbackCard from '../components/FeedbackCard';

const Testimonials = () => (
  <section id="clients" className={`sm:py-16 py-6 flex justify-center items-center flex-col relative`}>
    <div className="absolute z[0] w-[50%] h-[50%] -right-[50%] blue__gradient " />
    <div className="w-full flex justify-between items-center lg:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">What People are <br className="sm:block hidden" /> saying about us</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px]"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem repellendus enim cumque ut nihil illum sequi nemo! Nisi, dolorem tempore.</p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials