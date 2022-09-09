const Showcase = () => {
  return (
    <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left flex-1">
            <h1 className="text-xl md:text-6xl font-bold md:w-[80%] leading-[4.6rem] text-[#1B2124] mb-4 md:mb-8 ">
                Your One-stop Health Solution
            </h1>
            <h6 className="text-[#383535] md:text-lg font-semibold md:w-[80%]">
            WellaHealth gives you and your family access to quality, affordable healthcare anywhere in the country
            </h6>
        </div>

        <div className="flex-1">
            <img src="https://www.wellahealth.com/images/newhome/activity.png" className="w-full" loading="lazy" alt="" />
        </div>
    </div>
  )
}

export default Showcase