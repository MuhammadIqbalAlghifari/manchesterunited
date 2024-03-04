"use client"
import { useCart } from './cart-context';
import { useEffect, useState, useRef } from 'react';

export default function Jersey() {

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

    const { dispatch } = useCart();
    
    console.log(dispatch);

    const addToShopCart = (product) => {
        dispatch({ type: 'ADD_TO_SHOP_CART', payload: product });
      };
    
      const addToLoveCart = (product) => {
        dispatch({ type: 'ADD_TO_LOVE_CART', payload: product });
      };

const JerseyItem = [

    {
        id: "1",
        name: "Onana Jersey",
        discount: "450.000",
        value: "300000",
        image: "gk jersey.png"
    },
    {
        id: "2",
        name: "bayindir Jersey",
        discount: "450.000",
        value: "300000",
        image: "gk jersey.png"
    },
    {
        id: "3",
        name: "Heaton Jersey",
        discount: "450.000",
        value: "300000",
        image: "gk jersey.png"
    },
    {
        id: "4",
        name: "Maguire Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "5",
        name: "Varane Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "6",
        name: "Lindelof Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "7",
        name: "Martinez Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "8",
        name: "Shaw Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "9",
        name: "malacia Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "10",
        name: "Regulion Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "11",
        name: "wan bissaka Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "12",
        name: "Dalot Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "13",
        name: "casemiro Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "14",
        name: "amrabat Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "15",
        name: "mctominay Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "16",
        name: "eriksen Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "17",
        name: "van de beek Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "18",
        name: "mainoo Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "19",
        name: "bruno Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "20",
        name: "mount Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "21",
        name: "hannibal Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "22",
        name: "antony Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "23",
        name: "pellistri Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "24",
        name: "amad Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "25",
        name: "rashford Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "26",
        name: "garnacho Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "27",
        name: "sancho Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "28",
        name: "holjund Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
    {
        id: "29",
        name: "martial Jersey",
        discount: "450.000",
        value: "300000",
        image: "jersey.webp"
    },
]

    return (
        <section className="bg-[#f5f5f5] py-6 lg:px-12 px-6" ref={ref}>

            <h3 className="lg:text-6xl tersembunyi-footer text-4xl text-center py-8 text-black" style={{fontFamily: 'Bebas Neue'}}>Jersey</h3>

            <div className="flex flex-col justify-center items-center gap-3 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center lg:gap-3 md:gap-7 gap-3">

                    {JerseyItem.map((item, index) => (

                    <div key={index} className="flex flex-col tersembunyi-footer justify-between bg-white items-start px-4 py-4 rounded-md shadow-black shadow-md">

                        <img src={item.image} alt="" className="w-34 h-34 object-cover"/>

                            <div className="flex flex-col items-start">
                                <h3 style={{fontFamily: 'Bebas Neue'}} className="text-xl text-black">{item.name}</h3>
                                <div className="flex gap-2">
                                    <h3 style={{fontFamily: 'Bebas Neue'}} className="md:text-lg text-2xl text-red-600 line-through">rp.{item.discount}</h3>
                                    <h3 style={{fontFamily: 'Bebas Neue'}} className="md:text-lg text-2xl text-black">rp.{item.value}</h3>
                                </div>
                            </div>

                        <div className="flex justify-between items-center w-full">

                            <button onClick={() => addToLoveCart(item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </button>

                            <button onClick={() => addToShopCart(item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </button>

                        </div>

                    </div>

                    ))}
                    
                </div>

            </div>

        </section>
    )
}