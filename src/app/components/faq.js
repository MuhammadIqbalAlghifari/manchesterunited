"use client"
import { useEffect, useState, useRef } from "react";

export default function FAQ() {

    const faqData = [
        {
            tittle: "What age groups does the Manchester United Academy cater to?",
            description: "The Manchester United Academy provides development programs for young footballers in various age groups. These groups typically range from under-9 to under-23, allowing players to progress through different stages of their youth development journey."
        },
        {
            tittle: "How can a young player join the Manchester United Academy?",
            description: "Joining the Manchester United Academy often involves a scouting process where talented players are identified. Scouts actively attend local and international tournaments to spot potential talents. Identified players may then be invited to trial sessions at the Academy."
        },
        {
            tittle: "Is education a priority at the Manchester United Academy?",
            description: "Yes, education is a priority. The Academy emphasizes a balanced approach, ensuring that players receive a well-rounded education alongside their football training. This dual focus aims to prepare them not only as athletes but also as educated individuals."
        },
        {
            tittle: "What makes the coaching staff at the Academy unique?",
            description: "The coaching staff at the Manchester United Academy is known for its expertise and commitment. Coaches are often former professional players or highly qualified individuals with a deep understanding of the club's philosophy. They focus on imparting not only football skills but also important values and discipline."
        },
        {
            tittle: "Are there opportunities for international players to join the Academy?",
            description: "Yes, the Manchester United Academy is open to talents from around the world. The club actively scouts and recruits international players, offering them a chance to experience top-tier training and development within the prestigious academy system."
        },
        {
            tittle: "What facilities are available at the Manchester United Academy?",
            description: "The Academy boasts state-of-the-art facilities, including dedicated training pitches, fitness and conditioning areas, classrooms for academic sessions, and medical facilities. These resources are designed to provide a supportive and professional environment for the holistic development of young players."
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
        <section className="py-12 dark:bg-[#121212] -mt-2.5 bg-[#f5f5f5] transition duration-500" ref={ref}>

            <div className="tersembunyi-footer">
                <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 lg:py-2">
                    <div className="text-center">
                    <div className="md:text-xl text-lg uppercase tracking-wider dark:text-white text-black transition duration-500 mb-1" style={{fontFamily: 'Bebas Neue'}}>
                        We Answer
                    </div>
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-black dark:text-white text-black transition duration-500">
                        Frequently Asked Questions
                    </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {faqData.map((faq, index) => (
                            <div className="lg:text-left text-center" key={index}>
                                <h4 className="font-bold md:text-base text-sm dark:text-white text-black transition duration-500 mb-2">
                                {faq.tittle}
                                </h4>
                                <p className="leading-relaxed text-black md:text-sm text-xs dark:text-white transition duration-500 font-medium">
                                {faq.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center dark:text-white text-black transition duration-500">
                    <a href="/#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white dark:bg-red-600 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none">
                        <svg className="hi-mini hi-arrow-top-right-on-square text-black dark:text-white transition duration-500 inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd"/><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd"/></svg>
                        <span className="text-black dark:text-white transition duration-500">Go to support center</span>
                    </a>
                    </div>
                </div>
            </div>

        </section>
    )
}