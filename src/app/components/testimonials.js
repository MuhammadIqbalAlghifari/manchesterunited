"use client"
import React, { useState, useEffect, useRef } from 'react';

function Testimonials() {

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

    const testimonialsData = [
        {
            text: "Manchester United is a club with a rich history and an unwavering commitment to excellence. The support from the coaching staff and fellow players has been incredible.",
            author: "Onana",
            title: "Goalkeeper",
            image: "onana.jpeg"
        },
        {
            text: "The resilience of the team and the unwavering support from the fans define Manchester United. Every match feels like a collective effort to uphold the club's legacy and strive for success on multiple fronts.",
            author: "Luke Shaw",
            title: "Left Back",
            image: "shaw.jpg"
        },
        {
            text: "Manchester United is more than a club it's a family. The camaraderie among players, the coaching staff, and the unwavering support from the fans create a special atmosphere. I feel at home here.",
            author: "Harry Maguire",
            title: "Centre Back",
            image: "maguire.jpg"
        },
        {
            text: "Joining Manchester United is a new chapter in my career, and the challenge of contributing to the club's defensive solidity is both exciting and rewarding. The professionalism within the squad sets a high standard for success.",
            author: "Raphael Varane",
            title: "Centre Back",
            image: "varane.jpg"
        },
        {
            text: "Joining Manchester United has been a pivotal step in my career. The emphasis on skill development and attacking football perfectly aligns with my style of play, and the camaraderie within the squad is fantastic.",
            author: "Aaron Wan-bissaka",
            title: "Right Back",
            image: "awb.jpg"
        },
        {
            text: "Growing through the ranks at Manchester United has been a journey of dedication and hard work. The trust placed in youth development here is remarkable, and it motivates me to give my all for the badge.",
            author: "Casemiro",
            title: "Defend Middlefield",
            image: "casemiro.jpg"
        },
        {
            text: "Joining Manchester United was a pivotal moment in my career. The passion of the fans and the club's commitment to success drive us forward. Playing at Old Trafford is an experience like no other.",
            author: "Bruno Fernandes",
            title: "Centre Middlefield",
            image: "bruno.jpg"
        },
        {
            text: "The spirit of Manchester United is infectious. The never-say-die attitude and the pursuit of victory until the final whistle embody the essence of football at the highest level.",
            author: "Eriksen",
            title: "Centre Attack Middlefield",
            image: "eriksen.jpg"
        },
        {
            text: "Joining Manchester United has been a dream come true. The blend of youth and experience in the squad creates a dynamic environment for growth. The coaching philosophy aligns with my style of play, and the opportunity to contribute to the club's success is both exciting and motivating.",
            author: "Antony",
            title: "Right Wing Forward",
            image: "antony.jpg"
        },
        {
            text: "Being part of Manchester United is a dream come true. The support from fans, the world-class training facilities, and the rich history of the club make it an incredible journey. I am proud to wear the Red Devils jersey.",
            author: "Marcus Rashford",
            title: "Left Wing Forward",
            image: "rashford.jpg"
        },
        {
            text: "Ever since joining Manchester United, I've felt a sense of belonging and purpose. The camaraderie among the players, the world-class coaching staff, and the passionate fanbase create an environment that drives us to give our best on and off the pitch.",
            author: "Holjund",
            title: "Centre Forward",
            image: "holjund.jpg"
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    return (
        <section className="w-full -mt-2.5 dark:bg-[#121212] transition lg:px-12 px-6 duration-500 bg-[#f5f5f5]" ref={ref}>
            <div id='tittle' className="tersembunyi-hero dark:text-white transition duration-500 text-black lg:text-6xl text-4xl flex justify-center pt-8 z-40" style={{ fontFamily: 'Bebas Neue' }}> What our players say? </div>

            <div className="flex flex-col lg:flex-row justify-center gap-24 lg:items-start items-center pt-16 z-10">
                <div id="hero-landing-left" className="flex justify-center items-start gap-5 tersembunyi-hero w-full max-w-md">
                    <div className="flex flex-col justify-center items-end gap-20">
                        <img src={testimonialsData[currentTestimonial].image} alt="" className="h-32 w-32 object-cover shadow-black shadow-lg object-top"/>
                        <h3 className="rotate-90 text-black dark:text-white transition duration-500 md:text-base text-xs" style={{fontFamily: 'Roboto'}}>W o r d s</h3>
                    </div>
                    <div className="">
                        <img src={testimonialsData[currentTestimonial].image} alt="" className="h-32 w-32 object-cover object-top shadow-black shadow-lg"/>
                    </div>
                    <div className="">
                        <img src={testimonialsData[currentTestimonial].image} alt="" className="h-96 w-[400px] object-cover object-top shadow-black shadow-lg"/>
                    </div>
                </div>

                <div id="hero-landing-right" className="flex flex-col justify-between tersembunyi-hero lg:items-start items-center overflow-hidden gap-6 max-w-2xl">
                    <div className="lg:text-left md:text-base text-xs text-center transition duration-500 dark:text-white text-black font-medium" style={{ fontFamily: 'Roboto' }}>
                        "{testimonialsData[currentTestimonial].text}"
                    </div>
                    <div className="flex flex-col justify-start lg:items-start items-center gap-2">
                        <div className="lg:text-left text-center md:text-base text-xs transition duration-500 dark:text-white text-black font-semibold" style={{ fontFamily: 'Roboto' }}>{testimonialsData[currentTestimonial].author}</div>
                        <div className="lg:text-left text-center md:text-base text-xs transition duration-500 dark:text-white text-black font-semibold" style={{ fontFamily: 'Roboto' }}>{testimonialsData[currentTestimonial].title}</div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                        <button className="bg-transparent md:px-4 md:py-4 px-2 py-2 border-black border dark:border-white transition duration-500" onClick={prevTestimonial} id="previous">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 w-4 h-4 text-black dark:text-white transition duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button className="bg-transparent md:px-4 md:py-4 px-2 py-2 border-black border dark:border-white transition duration-500" onClick={nextTestimonial} id="next">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 w-4 h-4 text-black dark:text-white transition duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;