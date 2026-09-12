

import { use, useState } from "react";
import type { Istacks } from "../types/stack";
import AvailableStacks from "./AvailableStacks";
import SelectedStacks from "./SelectedStacks";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface StacksProps {
  stacksPromise: Promise<Istacks[]>;
}

const Stacks = ({ stacksPromise }: StacksProps) => {
  const stacks = use(stacksPromise);
  const [selectedStacks, setSelectedStacks] = useState<Istacks[]>([]);

  const handleAddStack = (stack: Istacks) => {
    if (!selectedStacks.some((s) => s.id === stack.id)) {
      setSelectedStacks([...selectedStacks, stack]);

      toast.success(`${stack.name} added to your stack!`, {
        position: "top-right",
        autoClose: 2500, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };


const handleRemoveStack = (stack: Istacks) => {
  setSelectedStacks((prev) => prev.filter((s) => s.id !== stack.id));
  toast.warn(`${stack.name} removed from your stack`, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

  const handleRemoveAll = () => {
    setSelectedStacks([]);
    toast.error("All technologies removed from your stack!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="container mx-auto mt-12 px-4">
        <ToastContainer/>
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="font-bold text-4xl lg:text-5xl">
          Explore the{" "}
          {/* <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent"> */}
          <span className="text-brand-gradient bg-clip-text text-transparent">
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