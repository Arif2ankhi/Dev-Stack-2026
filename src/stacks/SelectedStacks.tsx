

// const SelectedStacks = () => {
//     return (
//         <div>
//             <h2>Your Stack</h2>
//         </div>
//     );
// };

// export default SelectedStacks;
import { RxCross2 } from "react-icons/rx";
import type { Istacks } from "../types/stack";

interface SelectedStacksProps {
  selectedStacks: Istacks[];
  onRemoveStack: (id: string) => void;
  onRemoveAll: () => void;
}

const SelectedStacks = ({
  selectedStacks,
  onRemoveStack,
  onRemoveAll,
}: SelectedStacksProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="font-bold text-xl text-gray-900">Your Stack</h2>
        <span className="text-xs text-gray-400 font-medium">
          {selectedStacks.length} Technology Selected
        </span>
      </div>

      <div className="space-y-3 min-h-[120px]">
        {selectedStacks.length === 0 ? (
          <div className="border border-dashed border-gray-200 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-400">Your Stack is empty</p>
          </div>
        ) : (
          selectedStacks.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-2xl bg-gray-50/50"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-gray-400">{item.category}</p>
                </div>
              </div>

              <button
                onClick={() => onRemoveStack(item.id)}
                className="text-gray-400 hover:text-red-500 p-1 transition-colors"
              >
                <RxCross2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>

      {selectedStacks.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-6 py-2.5 border border-red-200 text-red-500 hover:bg-red-50 rounded-xl text-xs font-medium transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedStacks;