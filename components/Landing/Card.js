
const Card = ({ heading, text, altBtn, btn, altXBtn, img, bg}) => {
  return (
    <div className={`bg-[#e4f1f8] relative rounded-md p-6 text-[#000] `}>
        <h2 className='text-2xl font-semibold mb-4'>
        {heading}
        </h2>
        <p className={`text-[#263238] w-[90%] font-medium ${!altBtn ? 'mb-24' : 'mb-10'}`} >
        {text}
        </p>
        {
            altBtn && (
                <div className="flex space-x-3 mb-12">
                    <div className='bg-[#B6D7A3] rounded-xl px-4 py-1.5 font-medium text-sm text-[#263238] '>
                        Basic plan
                    </div>
                    <div className='bg-[#B6D7A3] rounded-xl px-4 py-1.5 font-medium text-sm text-[#263238] '>
                        Hospicash plan
                    </div>
                </div>
            )
        }
        
        {
            btn && (
                <button className="py-2 px-8 bg-[#1489C8] font-medium rounded-md text-white hover:text-black ">
                    {btn}
                </button>
            )
        }

        {
            altXBtn && (
                <div className="flex space-x-5">
                    <div className="bg-white space-x-2 flex py-1 px-4 items-center cursor-pointer">
                        <img src="https://www.wellahealth.com/images/newhome/ic_rocket.svg" alt="" />
                        <span className="font-medium">
                            Text
                        </span>
                    </div>
                    <div className="bg-white space-x-2 flex py-1 px-4 items-center cursor-pointer">
                        <img src="https://www.wellahealth.com/images/newhome/ic_call.svg" alt="" />
                        <span>
                            Call
                        </span>
                    </div>
                </div>
            )
        }
        
        <img src={img} className="absolute bottom-0 right-0  w-[37%]  " alt="" />
    </div>
  )
}

export default Card