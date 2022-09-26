import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (
    <div className='py-16'>
        <div className='text-[#1B2124] py-6 text-center'>
            <h2 className='text-3xl font-semibold'>
                What our customers say about us
            </h2>
            <h6 className='mt-3 text-lg font-medium'>
                Don’t just take our words for it
            </h6>
        </div>

        <div className="w-[80%] mx-auto ">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            showArrows={false}
            interval={5000}
          >
            <div className="bg-[#1489c8] rounded-lg md:p-16 py-24 md:py-32 text-white font-medium ">
              <h6 className="w-[70%] mx-auto mb-6 text-lg ">
              “You guys rock! I didn't believe it until i took my 3 kids and self for a test at designated pharmacy. It was an awesome one welldone!” 
              </h6>
              <p>
                @lorem_man
              </p>
            </div>  
            <div className="bg-[#1489c8] rounded-lg md:p-16 py-24 md:py-32 text-white font-medium ">
              <h6 className="w-[70%] mx-auto mb-6 text-lg ">
              “My family and I have benefited from this... I recommend this to everyone. Affordable and Quality drugs after testing and almost at any pharmacy nearest to you. @WellaHealth is an amazing platform.” 
              </h6>
              <p>
                @vito_corleone
              </p>
            </div>  
            <div className="bg-[#1489c8] rounded-lg md:p-16 py-24 md:py-32 text-white font-medium ">
              <h6 className="w-[70%] mx-auto mb-6 text-lg ">
              A big thank you to @WellaHealth for coming through for me yesterday. Had malaria bouts yesterday, got in touch with @WellaHealth and I was connected to a pharmacy that tested me for malaria and gave me drugs to treat myself. .. @WellaHealth is for real.” 
              </h6>
              <p>
                @bisky
              </p>
            </div>  
          </Carousel>
        </div>        
    </div>
  )
}

export default Testimonials