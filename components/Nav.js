import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const styles = {
    container: 'flex justify-between items-center py-6 w-[90%] mx-auto ',
    imgContainer: '',
    img: '',
    linksContainer: '',
    link: '',
    ctaContainer: '',
    logInBtn: '',
    getStartedBtn: '',
}

const Nav = () => {
    const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='flex justify-between items-center py-6 w-[90%] mx-auto '>
        <div className='flex items-center justify-center'> 
            <img className='w-32 object-contain' src="https://www.wellahealth.com/images/home/wellahealth.svg" alt="wh-logo" />
        </div>

        <div className='hidden md:flex space-x-5 items-center text-sm font-semibold'>
            <p>Individuals & Families</p>
            <p>Businesses & Organizations</p>
            <p>Partnerships</p>
            <p>Blog</p>
            <p>Pharmacies</p>
            <p>FAQs</p>
        </div>

        <div className='hidden md:flex space-x-4 font-semibold'>
            <button className='py-2 px-4 border border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-md transition-all ease-linear duration-200'>
                Log in
            </button>
            <button className='py-2 px-4 border bg-[#007BFF] text-white rounded-md transition-all ease-linear duration-200'>
                Get Started
            </button>
        </div>

        <div className='p-2 cursor-pointer rounded-full md:hidden hover:bg-black/10' onClick={() => setModalOpen(!modalOpen)}>
            {
                modalOpen ? <XIcon className='h-7' /> : <MenuIcon className='h-7' />
            }
            
        </div>
        
    </div>
  )
}

export default Nav