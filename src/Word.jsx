export default function Word({ value, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-12 h-12 bg-black text-white
      flex items-center justify-center
      text-2xl cursor-pointer rounded shadow-md active:translate-y-1 transition-transform"
    >
      {value}
    </div>
  );
}
