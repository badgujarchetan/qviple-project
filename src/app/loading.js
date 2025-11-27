export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md z-[9999]">
      <div className="animate-spin h-10 w-10 border-4 border-[#1114b1] border-t-transparent rounded-full"></div>
    </div>
  );
}
