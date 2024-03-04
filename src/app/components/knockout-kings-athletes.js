import { useState, useEffect, useRef } from "react";

export default function GalleryAthletes() {

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

    const goalKeeper = [
        {
            name: "Andre Onana",
            image: "onana.jpeg",
        },
        {
            name: "Atlay Bayindir",
            image: "bayindir.jpg",
        },
        {
            name: "Tom Heaton",
            image: "heaton.jpg",
        },
    ]

    const centreBack = [
        {
            name: "harry maguire",
            image: "maguire.jpg"
        },
        {
            name: "Raphael varane",
            image: "varane.jpg"
        },
        {
            name: "Lisandro Martinez",
            image: "licha.jpg"
        },
        {
            name: "Victor Lindelof",
            image: "lindelof.jpg"
        },
    ]

    const rightBack = [
        {
            name: "Aaron wan-bissaka",
            image: "awb.jpg"
        },
        {
            name: "Diogo dalot",
            image: "dalot.jpg"
        },
    ]

    const leftBack = [
        {
            name: "Tyrell malacia",
            image: "malacia.jpg"
        },
        {
            name: "Luke Shaw",
            image: "shaw.jpg"
        },
        {
            name: "Sergio Reguilon",
            image: "reguilon.jpg"
        },
    ]

    const dmf = [
        {
            name: "Casemiro",
            image: "casemiro.jpg"
        },
        {
            name: "sofyan amrabat",
            image: "amrabat.webp"
        },
        {
            name: "scott mctominay",
            image: "mctominay.jpg"
        },
    ]

    const cmf = [
        {
            name: "Cristian eriksen",
            image: "eriksen.jpg"
        },
        {
            name: "D. van de beek",
            image: "vdb.jpg"
        },
        {
            name: "Kobbie mainoo",
            image: "mainoo.jpg"
        },
    ]

    const cam = [
        {
            name: "Bruno Fernandes",
            image: "bruno.jpg"
        },
        {
            name: "Mason Mount",
            image: "mount.jpg"
        },
        {
            name: "Hannibal",
            image: "hannibal.jpg"
        },
    ]

    const rwf = [
        {
            name: "Marcus Rashford",
            image: "rashford.jpg"
        },
        {
            name: "A. Garnacho",
            image: "garnacho.jpg"
        },
        {
            name: "Jadon Sancho",
            image: "sancho.jpg"
        },
    ]

    const lwf = [
        {
            name: "Antony",
            image: "antony.jpg"
        },
        {
            name: "Amad Diallo",
            image: "diallo.jpg"
        },
        {
            name: "Facundo Pellistri",
            image: "pellistri.jpg"
        },
    ]

    const cf = [
        {
            name: "Rasmus Holjund",
            image: "holjund.jpg"
        },
        {
            name: "Antony Martial",
            image: "martial.webp"
        },
    ]

    return (

        <section id="gallery" className="z-10 -mt-2.5 lg:px-12 px-6 pb-6 w-full bg-[#f5f5f5] dark:bg-[#121212] transition duration-500" ref={ref}>

            <div id="tittle" className="dark:text-white text-black tersembunyi-fade text-center uppercase md:text-6xl text-4xl py-8 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>manchester united athletes</div>
            <p id="tittle" className="text-center tersembunyi-fade dark:text-white text-black font-medium transition duration-500" style={{fontFamily: 'Roboto'}}>These are the current players from manchester united who are succeed to arrived on theatre of dreams.</p>
            <div className="mx-auto px-5 py-2 lg:px-12 lg:pt-1 lg:my-8">

                <div className="dark:text-white tersembunyi-fade text-black uppercase lg:text-5xl text-4xl justify-center py-4 transition duration-500 text-center" style={{fontFamily: 'Bebas Neue'}}>goalkeeper</div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">
                        
                        {goalKeeper.map((gk, index) => (
                        
                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={gk.image} alt="" className=" h-full w-full absolute object-cover object-top group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue'}} className="lg:text-4xl text-3xl z-40 pointer-events-none text-white">{gk.name}</div>
                                </main>
                            </div>

                        ))}

                    </div>

                <div className="dark:text-white tersembunyi-fade text-black text-center uppercase lg:text-5xl text-3xl py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>centre back</div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">

                        {centreBack.map((cb,index) => (

                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={cb.image} alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue', color: 'white'}} className="lg:text-4xl text-3xl z-40 pointer-events-none uppercase text-white"> {cb.name} </div>
                                </main>
                            </div>

                        ))}

                    </div>

                <div className="dark:text-white tersembunyi-fade text-black uppercase lg:text-5xl text-4xl justify-center py-4 transition duration-500 text-center" style={{fontFamily: 'Bebas Neue'}}>right back</div>
                    <div className="grid md:grid-cols-2 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">
                        
                        {rightBack.map((rb, index) => (
                        
                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={rb.image} alt="" className=" h-full w-full absolute object-cover object-top group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue'}} className="lg:text-4xl text-3xl z-40 pointer-events-none text-white">{rb.name}</div>
                                </main>
                            </div>

                        ))}

                    </div>

                <div className="dark:text-white tersembunyi-fade text-black text-center uppercase lg:text-5xl text-3xl py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>left back</div>
                    <div className="grid md:grid-cols-3 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">

                        {leftBack.map((lb,index) => (

                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={lb.image} alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue', color: 'white'}} className="lg:text-4xl text-3xl z-40 pointer-events-none uppercase text-white"> {lb.name} </div>
                                </main>
                            </div>

                        ))}

                    </div>
                <div className="dark:text-white tersembunyi-fade text-black text-center uppercase lg:text-5xl text-3xl py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>Defend Middlefield</div>
                    <div className="grid md:grid-cols-3 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">

                        {dmf.map((dmf,index) => (

                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={dmf.image} alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue', color: 'white'}} className="lg:text-4xl text-3xl z-40 pointer-events-none uppercase text-white"> {dmf.name} </div>
                                </main>
                            </div>

                        ))}

                    </div>
                <div className="dark:text-white tersembunyi-fade text-black text-center uppercase lg:text-5xl text-3xl py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>center middlefield</div>
                    <div className="grid md:grid-cols-3 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">

                        {cmf.map((cmf,index) => (

                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={cmf.image} alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue', color: 'white'}} className="lg:text-4xl text-3xl z-40 pointer-events-none uppercase text-white"> {cmf.name} </div>
                                </main>
                            </div>

                        ))}

                    </div>
                <div className="dark:text-white tersembunyi-fade text-black text-center uppercase lg:text-5xl text-3xl py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>center attack middlefield</div>
                    <div className="grid md:grid-cols-3 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">

                        {cam.map((cam,index) => (

                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={cam.image} alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue', color: 'white'}} className="lg:text-4xl text-3xl z-40 pointer-events-none uppercase text-white"> {cam.name} </div>
                                </main>
                            </div>

                        ))}

                    </div>
                <div className="dark:text-white tersembunyi-fade text-black text-center uppercase lg:text-5xl text-3xl py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>left wing forward</div>
                    <div className="grid md:grid-cols-3 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">

                        {lwf.map((lwf,index) => (

                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={lwf.image} alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue', color: 'white'}} className="lg:text-4xl text-3xl z-40 pointer-events-none uppercase text-white"> {lwf.name} </div>
                                </main>
                            </div>

                        ))}

                    </div>
                <div className="dark:text-white tersembunyi-fade text-black text-center uppercase lg:text-5xl text-3xl py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>right wing forward</div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">

                        {rwf.map((rwf,index) => (

                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={rwf.image} alt="" className=" h-full w-full absolute object-cover group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue', color: 'white'}} className="lg:text-4xl text-3xl z-40 pointer-events-none uppercase text-white"> {rwf.name} </div>
                                </main>
                            </div>

                        ))}

                    </div>
                <div className="dark:text-white tersembunyi-fade text-black text-center uppercase lg:text-5xl text-3xl py-4 transition duration-500" style={{fontFamily: 'Bebas Neue'}}>center forward</div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 py-4 lg:gap-6 gap-4 max-w-7xl mx-auto">

                        {cf.map((cf,index) => (

                            <div id="hero left" key={index} className="relative tersembunyi-fade overflow-hidden bg-no-repeat shadow-black h-96 w-full shadow-lg group">
                                <img src={cf.image} alt="" className=" h-full w-full absolute object-cover object-top group-hover:scale-105 transition duration-500  "/>
                                <main className="flex justify-center py-2 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div style={{fontFamily: 'Bebas Neue', color: 'white'}} className="lg:text-4xl text-3xl z-40 pointer-events-none uppercase text-white"> {cf.name} </div>
                                </main>
                            </div>

                        ))}

                    </div>
            </div>
        </section>
    )
}