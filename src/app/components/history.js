"use client"
import { useEffect, useState, useRef } from "react";

export default function History() {

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
          ref.current.querySelectorAll('.tersembunyi-hero').forEach((el) => {
            el.classList.add('slide');
          });
        } else {
            ref.current.querySelectorAll(".tersembunyi-hero").forEach((el) => {
              el.classList.remove("slide");
            });
        }
      }, [isIntersecting]);

    return (
        <section className="bg-[#f5f5f5] dark:bg-[#121212] lg:px-12 px-6 -mt-2.5 py-20 transition duration-500 overflow-x-hidden" ref={ref}>

            <div id="tittle" style={{fontFamily: 'Bebas Neue'}} className="tersembunyi-hero text-black dark:text-white text-center lg:text-6xl text-4xl  py-6 transition duration-500">HISTORY</div>

            <div className="flex flex-col lg:gap-14 md:gap-10 gap-6 max-w-screen-xl mx-auto">

                <div className="flex flex-col-reverse md:flex-row md:justify-start justify-center items-center lg:gap-[63.5px] md:gap-6 gap-3 tersembunyi-hero" id="hero-landing-left">

                    <div id="hero-left" className="flex flex-col justify-center items-center">

                        <div className="md:px-10 md:py-12 px-3 py-5 bg-[#121212] flex flex-col justify-start md:items-start items-center md:gap-6 gap-3 dark:bg-[#f5f5f5] shadow-black shadow-lg rounded-md transition duration-500 md:w-[560px] w-[300px]">

                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white dark:text-black transition duration-500 lg:text-4xl md:text-2xl text-xl">Foundation and Early Years</h3>
                                <h3 style={{fontFamily: 'Roboto'}} className="text-white dark:text-black transition duration-500 md:text-left text-center md:text-sm text-[10px]">Manchester United originated as Newton Heath LYR Football Club, formed by the Carriage and Wagon department of the Lancashire and Yorkshire Railway. The club faced financial challenges in its early years but managed to survive and gain entry into the Football League in 1892. In 1902, financial reorganization led to the renaming of the club to Manchester United.</h3>

                        </div>

                    </div>

                    <div id="hero-right">

                        <h3 style={{fontFamily: 'Bebas Neue'}} className="text-black lg:text-7xl md:text-5xl text-3xl dark:text-white transition duration-500">1878-1902</h3>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row md:justify-end items-center lg:gap-[63.5px] md:gap-6 gap-3 tersembunyi-hero" id="hero-landing-right">

                    <div id="hero-right">

                        <h3 style={{fontFamily: 'Bebas Neue'}} className="text-black lg:text-7xl md:text-5xl text-3xl dark:text-white transition duration-500">1945-1969</h3>

                    </div>

                    <div id="hero-left" className="flex flex-col justify-center items-center">

                        <div className="md:px-10 md:py-12 px-3 py-5 bg-[#121212] flex flex-col justify-start md:items-start items-center md:gap-6 gap-3 dark:bg-[#f5f5f5] shadow-black shadow-lg rounded-md transition duration-500 md:w-[560px] w-[300px]">

                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white dark:text-black transition duration-500 lg:text-4xl md:text-2xl text-xl">Matt Busby Era</h3>
                                <h3 style={{fontFamily: 'Roboto'}} className="text-white dark:text-black transition duration-500 md:text-left text-center md:text-sm text-[10px]">Sir Matt Busby, appointed manager in 1945, played a pivotal role in Manchester United's history. Under his leadership, the team achieved significant success, winning five English league titles and the European Cup in 1968. Tragically, the Munich air disaster in 1958 claimed the lives of several players, but Busby rebuilt the team to achieve European glory.</h3>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col-reverse md:flex-row md:justify-start justify-center items-center lg:gap-[63.5px] md:gap-6 gap-3 tersembunyi-hero" id="hero-landing-left">

                    <div id="hero-left" className="flex flex-col justify-center items-center">

                        <div className="md:px-10 md:py-12 px-3 py-5 bg-[#121212] flex flex-col justify-start md:items-start items-center md:gap-6 gap-3 dark:bg-[#f5f5f5] shadow-black shadow-lg rounded-md transition duration-500 md:w-[560px] w-[300px]">

                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white dark:text-black transition duration-500 lg:text-4xl md:text-2xl text-xl"> The "Busby Babes" and Munich Air Disaster</h3>
                                <h3 style={{fontFamily: 'Roboto'}} className="text-white dark:text-black transition duration-500 md:text-left text-center md:text-sm text-[10px]">The 1950s saw the emergence of the "Busby Babes," a talented group of young players. However, tragedy struck on February 6, 1958, when the team's plane crashed in Munich, Germany, claiming the lives of eight players. Despite the setback, Busby rebuilt the team and continued to achieve success.</h3>

                        </div>

                    </div>

                    <div id="hero-right">

                        <h3 style={{fontFamily: 'Bebas Neue'}} className="text-black lg:text-7xl md:text-5xl text-3xl dark:text-white transition duration-500">1950s</h3>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row md:justify-end items-center lg:gap-[63.5px] md:gap-6 gap-3 tersembunyi-hero" id="hero-landing-right">

                    <div id="hero-right">

                        <h3 style={{fontFamily: 'Bebas Neue'}} className="text-black lg:text-7xl md:text-5xl text-3xl dark:text-white transition duration-500">1986-2013</h3>

                    </div>

                    <div id="hero-left" className="flex flex-col justify-center items-center">

                        <div className="md:px-10 md:py-12 px-3 py-5 bg-[#121212] flex flex-col justify-start md:items-start items-center md:gap-6 gap-3 dark:bg-[#f5f5f5] shadow-black shadow-lg rounded-md transition duration-500 md:w-[560px] w-[300px]">

                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white dark:text-black transition duration-500 lg:text-4xl md:text-2xl text-xl">Sir Alex Ferguson Era</h3>
                                <h3 style={{fontFamily: 'Roboto'}} className="text-white dark:text-black transition duration-500 md:text-left text-center md:text-sm text-[10px]">Sir Alex Ferguson, one of the most successful managers in football history, took charge in 1986. During his tenure, Manchester United experienced unprecedented success, winning 13 English Premier League titles, five FA Cups, four League Cups, and two UEFA Champions League titles, among numerous other honors. </h3>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col-reverse md:flex-row md:justify-start justify-center items-center lg:gap-[63.5px] md:gap-6 gap-3 tersembunyi-hero" id="hero-landing-left">

                    <div id="hero-left" className="flex flex-col justify-center items-center">

                        <div className="md:px-10 md:py-12 px-3 py-5 bg-[#121212] flex flex-col justify-start md:items-start items-center md:gap-6 gap-3 dark:bg-[#f5f5f5] shadow-black shadow-lg rounded-md transition duration-500 md:w-[560px] w-[300px]">

                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white dark:text-black transition duration-500 lg:text-4xl md:text-2xl text-xl">Treble-Winning Season</h3>
                                <h3 style={{fontFamily: 'Roboto'}} className="text-white dark:text-black transition duration-500 md:text-left text-center md:text-sm text-[10px]">The 1998-1999 season is etched in Manchester United's history as they secured an unprecedented treble, winning the Premier League, FA Cup, and UEFA Champions League in a dramatic final against Bayern Munich, with two injury-time goals.</h3>

                        </div>

                    </div>

                    <div id="hero-right">

                        <h3 style={{fontFamily: 'Bebas Neue'}} className="text-black lg:text-7xl md:text-5xl text-3xl dark:text-white transition duration-500">1998-1999</h3>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row md:justify-end items-center lg:gap-[63.5px] md:gap-6 gap-3 tersembunyi-hero" id="hero-landing-right">

                    <div id="hero-right">

                        <h3 style={{fontFamily: 'Bebas Neue'}} className="text-black lg:text-7xl md:text-5xl text-3xl dark:text-white transition duration-500">2013-Present</h3>

                    </div>

                    <div id="hero-left" className="flex flex-col justify-center items-center">

                        <div className="md:px-10 md:py-12 px-3 py-5 bg-[#121212] flex flex-col justify-start md:items-start items-center md:gap-6 gap-3 dark:bg-[#f5f5f5] shadow-black shadow-lg rounded-md transition duration-500 md:w-[560px] w-[300px]">

                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-white dark:text-black transition duration-500 lg:text-4xl md:text-2xl text-xl">Post-Ferguson Era</h3>
                                <h3 style={{fontFamily: 'Roboto'}} className="text-white dark:text-black transition duration-500 md:text-left text-center md:text-sm text-[10px]">After Sir Alex Ferguson's retirement in 2013, the club faced transitional challenges under different managers. Despite this, Manchester United has continued to compete at the highest level, showcasing a commitment to reclaiming its historical dominance in English and European football. </h3>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}