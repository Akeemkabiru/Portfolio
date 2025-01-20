export default function Button({ children }: { children: string }) {
  return (
    <button className="hover:bg-gradient-to-r text-sm transition-all duration-500 from-cyan-500 to-teal-500 bg-cyan-500 px-6 py-3 rounded-md bg-opacity-0 hover:bg-opacity-100 border-2 border-primary text-primary">
      {children}
    </button>
  );
}

export function ResumeBtn() {
  return (
    <button className="bg-gradient-to-r transition-all duration-500 from-cyan-500 to-teal-500 bg-cyan-500 px-6 py-3 rounded-[10px] font-semibold">
      Download Resume
    </button>
  );
}
