"use client"
import { useState, useEffect, useRef } from "react";

export default function OurTraining() {

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
          ref.current.querySelectorAll('.tersembunyi-fade').forEach((el) => {
            el.classList.add('fade');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-fade").forEach((el) => {
              el.classList.remove("fade");
            });
        }
      }, [isIntersecting]);

    const ourTrainingData = [
        {
            tittle: "goalkeeping training",
            image: "/goalkeeping.jpg",
        },
        {
            tittle: "defending TRAINING",
            image: "/defending.jpg",
        },
        {
            tittle: "centre middlefield training",
            image: "/middlefield.jpg",
        },
        {
            tittle: "attacking training",
            image: "/attacking.jpg",
        },
    ]

    return (
        <section className="lg:px-12 px-6 bg-[#f5f5f5]" ref={ref}>

            <div className="py-10">

                <div className="grid lg:grid-cols-4 grid-cols-2 shadow-black shadow-lg max-w-7xl mx-auto tersembunyi-fade">

                    {ourTrainingData.map((item, index) => (
                        <div key={index} className="relative overflow-hidden w-full lg:h-[150px] h-[120px] group">

                            <div className="absolute bg-black w-full h-full z-10 opacity-30"></div>

                            <img src={item.image} className="absolute group-hover:scale-105 transition duration-500 object-cover object-center w-full h-full" alt="" />

                            <div className="inset-x-0 bottom-0 absolute z-20 px-3 py-3">
                                
                                <div className="text-white lg:text-xl text-lg" style={{ fontFamily: 'Bebas Neue'}}>{item.tittle}</div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>


        </section>
    )
}