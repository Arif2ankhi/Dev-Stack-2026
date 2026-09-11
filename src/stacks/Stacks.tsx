import { use } from "react";
import type { Istacks } from "../types/stack";
import AvailableStacks from "./AvailableStacks";

interface StacksProps {
    stacksPromise: Promise<Istacks[]>
}

const Stacks = ({stacksPromise}:StacksProps) => {

    console.log(stacksPromise);

    const stacks = use(stacksPromise);
    console.log(stacks, 'stacks');
    return (
        <div className="container mx-auto mt-12">
            
                <div className="flex justify-between gap 4 mb-7 " >
                
                <h2 className="font-bold text-5xl">Explore the 
                    <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent ">
              Technologies
            </span>
                     <br /> <span className="text-xl font-normal" >Pick one technology per category to build your ideal stack.</span> </h2>
                <h4></h4>

                {/* bg-linear-to-r from-orange-500 to-pink-400 */}
                
                <div >
                    <h3 className="font-bold text-3xl mb-2">Your Stack</h3>
                    <p>No technologies selected yet.</p>
                    <p className="border border-gray-200 rounded-xl p-6 mt-2">Your Stack is empty</p>

                </div>
            </div>
            
            <AvailableStacks stacks ={stacks}></AvailableStacks>
        </div>
    );
};

export default Stacks;