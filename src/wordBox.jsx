export default function WordBox({ cell, active, onClick, currentPlayer }) {
  let bgColor = "bg-transparent";
  if (cell.isWord) {
    bgColor = cell.owner === 1 ? "bg-green-500 shadow-inner" : "bg-blue-500 shadow-inner";
  }

  // একটিভ বর্ডার কালার লজিক
  const activeBorderColor = currentPlayer === 1 ? "border-green-500 ring-2 ring-green-500" : "border-blue-500 ring-2 ring-blue-500";

  return (
    <div
      onClick={onClick}
      className={`relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center
        text-lg sm:text-2xl font-extrabold border cursor-pointer transition-all rounded duration-200
        ${active ? activeBorderColor + " z-10" : "border-gray-700"}
        ${bgColor}
        text-white hover:border-cyan-400`}
    >
      {cell.letter}
    </div>
  );
}