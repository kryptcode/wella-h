import Card from "./Card"


const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-[85%] mx-auto gap-10 pt-8 pb-24">
      <Card
        heading='Join a health community'
        text='You do not have to do life alone. Connect with professionals & people that can help you through any phase.'
        btn='Join Us'
        img='https://www.wellahealth.com/images/newhome/health-community.svg'
        bg='#e4f1f8'
       />
      <Card
        heading='Health Plans'
        text='Spend less on medical bills. Get a health cover for exactly what you need and when you need it. '
        btn='Get a plan'
        img='https://www.wellahealth.com/images/newhome/family.svg'
        altBtn
        bg='#eeffe4'
       />
      <Card
        heading='Consult a doctor over text or call'
        text="Time & Distance shouldn't be a barrier for you to access a doctor."
        altXBtn
        img='https://www.wellahealth.com/images/newhome/online-doctor.svg'
        bg='#e4f1f8'
       />
      <Card
        heading='Chronicare (Find my medicines) '
        text='Managing a health condition just got easier. Have your prescription filled and delivered anywhere.'
        btn='Find medicine'
        img='https://www.wellahealth.com/images/newhome/find-drugs.svg'
        bg='#e4f1f8'
       />
    </div>
  )
}

export default Cards