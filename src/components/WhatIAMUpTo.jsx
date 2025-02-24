import { useState } from "react";


const WhatIAMUpTo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative top-[90px] z-10">
            {/* Button to Open Drawer */}
            <div className="flex justify-center">
                <h1 onClick={() => setIsOpen(true)} className="text-sm text-green-500 cursor-pointer animate-pulse">
                    What I’m Up To
                </h1>
            </div>

            {/* Drawer Component */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-40 w-full p-4 transition-transform bg-black-200 text-white-100 ${ isOpen ? "translate-y-0" : "translate-y-full"}`}>
                <h5 className="inline-flex items-center mb-4 text-base font-semibold text-[#915EFF]">
                    "Ongoing Projects" / "Learning & Exploring"
                </h5>
                <button type="button" className="bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 hover:bg-white hover:text-black" onClick={() => setIsOpen(false)}>
                    ✖
                </button>
                <ul className="list-disc marker:text-[#915EFF] pl-5">
                    <li>
                        Developing Harvest Hub App – Building an app for farmers to manage their expenses and workflow efficiently. Enhancing AI capabilities to provide smart prompts and assist with decision-making.
                    </li>
                    <li>
                        Exploring RAG for Harvest Hub – Researching and implementing Retrieval-Augmented Generation (RAG) to enhance AI-driven insights and decision-making for farmers.
                    </li>
                    <li>
                        Working on Naga4 (Office Project) – Contributing as a full-stack developer, handling everything from frontend development to cloud infrastructure.
                    </li>
                    <li>
                        Pursuing M.Tech in Software Engineering – Currently enrolled in the M.Tech Software Engineering program at BITS Pilani as a long distance course to deepen my expertise in software development and project management.
                    </li>
                </ul>
            </div> 
        </div>
    );
}

export default WhatIAMUpTo;