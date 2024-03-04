"use client"
import React, { useState } from "react";
import '../design.css'

const Card = ({ }) => {

    const items = [
        {
          id: 1,
          title: "Goalkeeping Training",
          description: "- Shot-Stopping Drills\n- Distribution Exercises \n- One-on-One Situations \n- Crossing and Aerial Challenges \n- Communication Drills ",
          image: "/goalkeeping.jpg"
        },
        {
          id: 2,
          title: "Defending Training",
          description: "- Positional Awareness \n- Tackling and Intercepting \n- 1v1 Defending \n- Pressing and Closing Down \n- Defensive Shape ",
          image: "/defending.jpg"
        },
        {
          id: 3,
          title: "Middlefield Training",
          description: "- Passing and Ball Retention \n- Vision and Awareness \n- Box-to-Box Movement \n- Press Resistance \n- Transition Play ",
          image: "/middlefield.jpg"
        },
        {
          id: 4,
          title: "Attacking Training",
          description: "- Finishing Drills \n- Combination Play \n- Movement off the Ball \n- Counter-Attacking Scenarios \n- Set-Piece Execution ",
          image: "/attacking.jpg"
        },
      ];

      const [selectedItems, setSelectedItems] = useState([]);

        const handleMoveToUserTrainingList = (item) => {
            if (selectedItems.length < 4 && !selectedItems.includes(item)) {
                setSelectedItems([...selectedItems, item]);
        }};

        const handleMoveToTrainingList = (item) => {
            const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
            setSelectedItems(updatedItems);
        };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10 lg:gap-7 md:gap-5 gap-3 max-w-7xl mx-auto">
                {items.map((item) => (
                    
                        <div className="group" key={item.id}>
                        <div
                            id={`card-${item.id}`}
                            style={{ fontFamily: 'Roboto'}}
                            className="text-left mx-auto bg-[#121212] dark:bg-[#f5f5f5] rounded-xl shadow-black shadow-lg dark:text-black text-white transition duration-500"
                        >
                            <div className="relative overflow-hidden w-full">
                                <img src={item.image} alt="" className="w-full h-60 rounded-t-xl object-cover mx-auto mb-4 transition duration-500" />
                            </div>
                            <h3 className="font-bold mb-1 uppercase text-center md:text-xl text-md">{item.title}</h3>
                            <div className="px-6 py-2">
                            {item.description.split('\n').map((step, index) => (
                                <p key={index} className="md:text-sm text-xs mt-2">
                                {step}
                                </p>
                            ))}
                            </div>
                            <center>
                            <div className="py-4">
                                <button
                                onClick={() => handleMoveToUserTrainingList(item)} disabled={selectedItems.includes(item)}
                                className=" flex flex-row gap-2 bg-white dark:bg-black px-3 py-2 items-center object-center md:text-sm text-xs font-semibold group-hover:font-medium text-black dark:text-white rounded-lg transition duration-500"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5 transition duration-500 font-bold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Add To Your Training Schedule
                                </button>
                            </div>
                            </center>
                        </div>
                        </div>
                    ))}
                    </div>
                    
                    <div className="dark:text-white text-black transition duration-500 flex flex-row uppercase md:text-6xl text-3xl gap-3 text-center justify-center px-6" style={{fontFamily: 'Bebas Neue'}}>your workout schedule</div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 my-10 lg:gap-7 md:gap-4 gap-2 max-w-7xl mx-auto">
                    {selectedItems.map((selectedItem) => (
                                    <div className="group fade-in" key={selectedItem.id}>
                                        <div
                                            id={`card-${selectedItem.id}`}
                                            style={{ fontFamily: 'Roboto'}}
                                            className="text-white text-left mx-auto bg-red-600 rounded-xl shadow-black shadow-lg group-hover:text-black group-hover:bg-white transition duration-500"
                                        >
                                            <div className="relative overflow-hidden w-full">
                                            <img src={selectedItem.image} alt="" className="w-full h-60 rounded-t-xl object-cover mx-auto mb-4  transition duration-500" />
                                            </div>
                                            <h3 className="font-bold mb-1 uppercase px-2 text-center">{selectedItem.title}</h3>
                                            <div className="px-6 py-2">
                                            {selectedItem.description.split('\n').map((step, index) => (
                                                <p key={index} className="md:text-sm text-xs mt-2">
                                                {step}
                                                </p>
                                            ))}
                                            </div>
                                            <center>
                                            <div className="py-4">
                                                <button
                                                onClick={() => handleMoveToTrainingList(selectedItem)}
                                                className=" flex flex-row gap-2 bg-white px-3 py-2 items-center object-center md:text-sm text-xs group-hover:bg-red-600 font-semibold group-hover:font-medium text-black group-hover:text-white rounded-lg transition duration-500"
                                                >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                                </svg>
                                                Delete This Training Schedule
                                                </button>
                                            </div>
                                            </center>
                                        </div>
                                    </div>
                    ))}
                    </div>

            </>
    )
}

export default Card;