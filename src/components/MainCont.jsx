import MainCanvas from '../functions/MainCanvas'
import BlankCont from './BlankCont'
import video2 from '/video2.mp4'

const MainCont = () => {

  const sections = ["Section1", "Section2", "Section3"]; // 👈 add more anytime
  const inner = ['section1inner','section2inner','section3inner'];
  const inner1 = ['Cont1Inner1', 'Cont1Inner2', 'Cont1Inner3', ]
  const inner2 = ['Cont2Inner1', 'Cont2Inner2', 'Cont2Inner3', ]

  return (
    <div className='w-full min-h-screen z-20 relative'>

      {/* Nav */}
      <div className='w-full h-fit flex absolute top-9 left-0 px-20'>
        <h2 className='P4 text-[40px] text-white'>Cartier-365</h2>

        <div className='ml-auto flex gap-[7px]'>
          <div className='Line1 w-[2px] h-[25px] bg-white'></div>
          <div className='Line1 w-[2px] h-[30px] bg-white'></div>
          <div className='Line1 w-[2px] h-[30px] bg-white'></div>
        </div>
      </div>

      {/* <BlankCont/> */}
      <div className='w-full h-[70dvh]  flex justify-center items-end'>
        <div className='w-[80%] h-fit  flex items-end'>
          {/* video-div ----------------- */}
          <div className='w-[200px] h-[250px] max-2xl:w-[120px] max-2xl:h-[150px]  overflow-hidden'>
            <video className='w-full h-full object-cover' autoPlay loop muted src={video2}></video>
          </div>

          {/* Text ----------------------- */}
          <div className='w-fit h-full  ml-2.5 text-white'>
            <p className='text-[8rem] leading-[8rem] max-2xl:text-[4rem] max-2xl:leading-[4rem] P4 tracking-tight '>CREATIVE</p>
            <p className='text-[8rem] leading-[8rem] max-2xl:text-[4rem] max-2xl:leading-[4rem] P6 tracking-tight '>ALCHEMY</p>
          </div>

          {/* X ------------------------ */}
          <div className='ml-auto w-fit h-full border-b-[2px] border-[#ffff]'>
            <p className='P1 text-[#ffffff96] text-[14px]'>NEXT UP</p>
            <p className='P1 text-[16px] text-[#ffff] mb-4'>CREATIVE ALCHEMY</p>
          </div>

        </div>
      </div>
      {/* <MainCanvas namePass="Section1" num={0} />

      <BlankCont/>
      <MainCanvas namePass="Section2" num={1} />

      <BlankCont/>
      <MainCanvas namePass="Section3" num={2} />
      
      <BlankCont/> */}

       {sections.map((name, index) => (
        <div key={index} className={`Section${name}`}>
          <MainCanvas namePass={name} innerCan={inner[index]} innerPart1={inner1[index]} innerPart2={inner2[index]}  num={index} />
          <BlankCont />
        </div>
      ))}

    </div>
  )
}

export default MainCont
