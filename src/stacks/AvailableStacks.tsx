import { IoMdStar } from "react-icons/io";
import type { Istacks } from "../types/stack";

const badgeColorMap: Record<string, string> = {
  react: "bg-sky-50 text-sky-500 border-sky-100",
  vue: "bg-emerald-50 text-emerald-500 border-emerald-100",
  svelte: "bg-orange-50 text-orange-500 border-orange-100",
  nextjs: "bg-zinc-100 text-zinc-700 border-zinc-200",
  nodejs: "bg-green-50 text-green-600 border-green-100",
  postgresql: "bg-blue-50 text-blue-500 border-blue-100",
  redis: "bg-red-50 text-red-500 border-red-100",
  javascript: "bg-amber-50 text-amber-600 border-amber-100",
  typescript: "bg-sky-50 text-sky-600 border-sky-100",
  java: "bg-orange-50 text-orange-600 border-orange-100",
  tailwind: "bg-cyan-50 text-cyan-500 border-cyan-100",
  docker: "bg-blue-50 text-blue-600 border-blue-100"
};

interface AvailableStacksProps {
  stacks: Istacks[];
  selectedStacks: Istacks[];
  onAddStack: (stack: Istacks) => void;
}

const AvailableStacks = ({
  stacks,
  selectedStacks,
  onAddStack
}: AvailableStacksProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {stacks.map((stack: Istacks) => {
        const isSelected = selectedStacks.some((s) => s.id === stack.id);
        const badgeStyle =
          badgeColorMap[stack.id] || "bg-gray-50 text-gray-600 border-gray-100";

        return (
          <div
            key={stack.id}
            className="card bg-gradient-to-r from-emerald-200 to-blue-300 w-full shadow-sm border border-gray-200 rounded-3xl p-2 flex flex-col justify-between "
            // className="card bg-gradient-to-r from-cyan-100 to-fuchsia-400 w-full shadow-sm border border-gray-200 rounded-3xl p-2 flex flex-col justify-between "
          >
            <figure className="flex justify-between items-center p-4">
              <img
                className="w-[50px] h-[50px] object-contain"
                src={stack.icon}
                alt={stack.name}
              />
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full border ${badgeStyle}`}
              >
                {stack.badge}
              </span>
            </figure>

            <div className="card-body pt-0">
              <h2 className="card-title text-xl font-bold">{stack.name}</h2>
              <p className="text-sm text-gray-500 leading-relaxed min-h-[60px]">
                {stack.description}
              </p>

              <div className="flex justify-between items-center gap-2 pt-4 border-t border-gray-100 text-xs my-2">
                <span className="bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-md">
                  {stack.category}
                </span>
                <span className="text-gray-500 font-medium">
                  {stack.difficulty}
                </span>
                <span className="flex gap-1 items-center font-bold text-gray-700">
                  <IoMdStar className="text-amber-400 text-base" />
                  {stack.rating}
                </span>
              </div>

              <div className="card-actions mt-2">
                <button
                  onClick={() => onAddStack(stack)}
                  disabled={isSelected}
                  className={`btn rounded-xl w-full border-none transition-colors ${
                    isSelected
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-black hover:bg-blue-800 text-white"
                      // : "bg-brand-gradient"
                  }`}
                >
                  {isSelected ? "Added to Stack" : "Add to Stack"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableStacks;
