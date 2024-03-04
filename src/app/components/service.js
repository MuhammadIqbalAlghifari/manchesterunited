"use client"
import { useEffect, useState, useRef } from "react";

export default function Service() {

  const serviceData = [
    {
      image: "/ball-logo.svg",
      tittle: "Youngster Development Programs",
      description: "The Manchester United Academy provides comprehensive youth development programs for aspiring football talents.",
    },
    {
      image: "/ball-logo.svg",
      tittle: "Academic and Football Integration",
      description: "The Academy emphasizes the importance of academic education alongside football training.",
    },
    {
      image: "/ball-logo.svg",
      tittle: "Scouting and Talent Identification",
      description: "Manchester United Academy is renowned for its scouting and talent identification initiatives.",
    },
  ]

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-10px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll('.tersembunyi-footer').forEach((el) => {
            el.classList.add('slide-up');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-footer").forEach((el) => {
              el.classList.remove("slide-up");
            });
        }
      }, [isIntersecting]);

    return (
        <section className="pt-4 z-10 px-12 -mt-2.5 w-full dark:bg-[#121212] transition duration-500 bg-[#f5f5f5]" id="Services" ref={ref}>

            <div className="tersembunyi-footer">
                <div className="dark:text-white flex flex-row uppercase lg:gap-2 md:gap-1.5 gap-1 lg:text-6xl text-4xl text-black justify-center md:py-11 py-6 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>Our<h3>Services</h3></div>

                <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6 max-w-7xl mx-auto">

                  {serviceData.map((service, index) => (

                    <div key={index} id="card-left" className="dark:bg-white bg-red-600 shadow-black shadow-lg rounded-md px-6 py-10 hover:scale-105 transition duration-500">
                        <img src={service.image} alt="" className="lg:w-32 lg:h-32 lg:mt-28 md:w-28 md:h-28 md:mt-20 w-16 h-16 mt-14 mx-auto"/>
                        <div style={{fontFamily: 'Bebas Neue'}} className="text-center my-4 lg:text-4xl md:text-2xl text-xl font-medium dark:font-bold dark:text-red-600 text-white transition duration-500" >{service.tittle}</div>
                        <p className="text-center my-2 lg:text-base text-xs font-medium dark:font-bold dark:text-black text-white transition duration-500" style={{fontFamily: 'Roboto'}}>{service.description}</p>
                    </div>

                  ))}

                </div>
                </div>{}

        </section>
    )
}