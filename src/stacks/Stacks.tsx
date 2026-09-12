// import { use } from "react";
// import type { Istacks } from "../types/stack";
// import AvailableStacks from "./AvailableStacks";

// interface StacksProps {
//     stacksPromise: Promise<Istacks[]>
// }

// const Stacks = ({stacksPromise}:StacksProps) => {

//     console.log(stacksPromise);

//     const stacks = use(stacksPromise);
//     console.log(stacks, 'stacks');
//     return (
//         <div className="container mx-auto mt-12">
            
//                 <div className="flex justify-between gap 4 mb-7 " >
                
//                 <h2 className="font-bold text-5xl">Explore the 
//                     <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent ">
//               Technologies
//             </span>
//                      <br /> <span className="text-xl font-normal" >Pick one technology per category to build your ideal stack.</span> </h2>
                

                
                
//                 <div >
//                     <h3 className="font-bold text-3xl mb-2">Your Stack</h3>
//                     <p>No technologies selected yet.</p>
//                     <p className="border border-gray-200 rounded-xl p-6 mt-2">Your Stack is empty</p>

//                 </div>
//             </div>
            
//             <AvailableStacks stacks ={stacks}></AvailableStacks>
//         </div>
//     );
// };

// export default Stacks;

import { use, useState } from "react";
import type { Istacks } from "../types/stack";
import AvailableStacks from "./AvailableStacks";
import SelectedStacks from "./SelectedStacks";

interface StacksProps {
  stacksPromise: Promise<Istacks[]>;
}

const Stacks = ({ stacksPromise }: StacksProps) => {
  const stacks = use(stacksPromise);
  const [selectedStacks, setSelectedStacks] = useState<Istacks[]>([]);

  const handleAddStack = (stack: Istacks) => {
    if (!selectedStacks.some((s) => s.id === stack.id)) {
      setSelectedStacks([...selectedStacks, stack]);
    }
  };

  const handleRemoveStack = (id: string) => {
    setSelectedStacks(selectedStacks.filter((s) => s.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStacks([]);
  };

  return (
    <div className="container mx-auto mt-12 px-4">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="font-bold text-4xl lg:text-5xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Responsive Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Side: 3 Columns for Cards */}
        <div className="lg:col-span-3">
          <AvailableStacks
            stacks={stacks}
            selectedStacks={selectedStacks}
            onAddStack={handleAddStack}
          />
        </div>

        {/* Right Side: 4th Column for Selected Stack */}
        <div className="lg:col-span-1 lg:sticky lg:top-6">
          <SelectedStacks
            selectedStacks={selectedStacks}
            onRemoveStack={handleRemoveStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Stacks;