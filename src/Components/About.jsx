import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si'
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div className='w-full bg-black text-white text-center sm:h-screen flex flex-col justify-center'>
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
        <div className=' flex flex-col justify-between'>
            <h1 className='py-4'>Growing Protocol Ecosystem</h1>
            <p className='py-4 text-xl'>The AO protocol system empowers developers, liquidity providers and traders to participate in a financial marketplace that is open and accessible to all.</p>

            {/* Card container */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>

                {/* cards */}
                <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Reliable, tamper-proof netwowrk' text='Use decentralization, trusted nodes, premium data and cryptographic
          proofs to connect highly accurate and davailable data?API to any smart
          contact.'/>

          <AboutCard icon={<SiStrapi size={40} />} heading='Seamless connection to any API' text='Build on a flexible framework that can retrive data from any API, connect with existing systems and integrate with current or future blockchains.'/>
          <AboutCard icon={<SiFsecure size={40}/>} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contact value for market leading decentralized applications.'/>
          <AboutCard icon={<VscServerProcess size={40}/>} heading='Secure off-chain computation' text='Use a decentralized netwwork of AO Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'/>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default About