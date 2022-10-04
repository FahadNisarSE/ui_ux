import Image from "next/image";

import { clients } from "../Constants";
import styles from "../styles/Style";

const Client = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} gap-4 flex-wrap w-full`}>
      {
        clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] w-full rounded-[20px]`}>
            <Image src={client.logo} alt='client' width={192} height={100} className='object-contain h-full' />
          </div>
        ))
      }
    </div>
  </section>
)

export default Client;