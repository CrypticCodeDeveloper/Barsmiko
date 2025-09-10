
import { Navigation, Pagination,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Rocket, ArrowRight, Users, ShieldCheck} from "lucide-react"


const Heroslides = () => {

    const heroSlides = [
        {
    img: "/hero-image.jpg",
    icon: <Rocket className='size-12' />,
    title: "Smart Tech for Bold Builders",
    subtitle: "Build, scale, and automate without the chaos. From fintech to ops, Barsmiko gives you the systems to grow smarter."
},
{
    img: "/hero-2.jpg",
    icon: <Users className='size-12' />,
    title: "Collaboration Without Limits",
    subtitle: "Empower your team with seamless tools for communication, project management, and real-time productivity."
},
{
    img: "/hero-3.jpg",
    icon: <ShieldCheck className='size-12' />,
    title: "Security That Scales With You",
    subtitle: "From fintech to enterprise, we safeguard your data with industry-grade security and compliance solutions."
}

    ]

  return (
    <Swiper

      modules={[ Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    autoplay={{
        delay: 4000,
        disableOnInteraction: false,
    }}
      loop={true}
    >
      
        {
            heroSlides.map((hero, i) => <SwiperSlide key={`Hero-slide-${i}`}><Hero 
            img={hero.img}
            icon={hero.icon}
            title={hero.title}
            subtitle={hero.subtitle}
             />
            </SwiperSlide>)
        }

    </Swiper>
  );
};

const Hero = ({img, icon, title, subtitle}) => {

  return (
    <div className="w-full h-[90vh] relative">
      <img
        src={img}
        className="w-full h-full object-cover absolute -z-10"
      />
      <div className="w-full h-full bg-gradient-to-r from-white/80 via-white/50 to-transparent absolute -z-10" />
      <div className="h-full w-full flex-center-all flex-col px-4">
        <h1 className="text-base-color text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex-center-y flex-col text-center gap-3">
          {icon}
          {title}
        </h1>
        <h3 className="text-sm md:text-lg max-w-xl text-center text-gray-800">
          {subtitle}
        </h3>

        <div className="mt-8 lg:mt-4 flex-center-y gap-4">
          <button className="btn">Start Building Smarter</button>
          <button className="btn flex-center-y gap-1 !bg-transparent border border-base-color !text-base-color">
            Explore Our Solutions
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};



export default Heroslides;