import Image from "next/image";

import { clients } from "../Constants";

const Client = () => (
  <section className="flex justify-center items-center my-4">
    <div className="flex justify-center items-center gap-4 flex-wrap w-full">
      {
        clients.map((client) => (
          <div key={client.id} className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] w-full rounded-[20px]`}>
            <Image src={client.logo} alt='client' width={192} height={100} className='object-contain h-full' />
          </div>
        ))
      }
    </div>
  </section>
)

export default Client;