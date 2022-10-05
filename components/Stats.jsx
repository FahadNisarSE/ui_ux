import { stats } from "../Constants"

const Stats = () => (
  <section className={`flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6`}>
    {
      stats.map(stat => (
        <div className={`flex-1 flex justify-center items-center felx-row m-3`} key={stat.id}>
          <h4 className="font-poppins font-semibold xs:text-[20px] text-[30px] sm:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))
    }
  </section>
)

export default Stats