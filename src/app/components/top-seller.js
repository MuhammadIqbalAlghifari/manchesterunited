"use client"
import { useCart } from './cart-context';
import { useEffect, useState, useRef } from 'react';

export default function TopSeller() {

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

const DiscountedItem = [

    {
        id: "30",
        name: "cr7 jersey",
        discount: "450.000",
        value: "300000",
        image: "cr7.webp"
    },

    {
        id: "31",
        name: "rvp jersey",
        discount: "850.000",
        value: "650000",
        image: "rvp.png",
    },

    {
        id: "32",
        name: "rooney jersey",
        discount: "1.000.000",
        value: "956000",
        image: "rooney.webp",
    },

    {
        id: "33",
        name: "cantona jersey",
        discount: "1.300.000",
        value: "800999",
        image: "cantona7.webp",
    },

    {
        id: "34",
        name: "beckham jersey",
        discount: "789.000",
        value: "470000",
        image: "beckham.png",
    },

    {
        id: "35",
        name: "scholes jersey",
        discount: "350.000",
        value: "264000",
        image: "scholes.webp",
    },


]

    return (
        <section className="bg-[#f5f5f5] py-6 lg:px-12 px-6" ref={ref}>

            <h3 className="lg:text-6xl tersembunyi-footer text-4xl text-center py-8 text-black" style={{fontFamily: 'Bebas Neue'}}>Top Seller</h3>

            <div className="flex flex-col justify-center items-center gap-3 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center lg:gap-3 md:gap-7 gap-3">

                    {DiscountedItem.map((item, index) => (

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