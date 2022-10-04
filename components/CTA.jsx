import styles from "../styles/Style"
import Button from "./Button"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mt-24 `}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let &#39 s try our <br /> service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payment and grow yourbusiness anywhere on the planet.</p>
    </div>
    <div className={`${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA