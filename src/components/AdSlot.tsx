export default function AdSlot({ width, height, className = "" }: { width: number; height: number; className?: string }) {
  return (
    <div 
      className={`ad-slot w-full bg-gray-50 dark:bg-gray-800/30 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 mx-auto ${className}`} 
      style={{ maxWidth: `${width}px`, minHeight: `${height}px` }}
    >
      <span className="text-xs font-mono uppercase tracking-widest mb-1">Advertisement</span>
      <span className="text-[10px]">{width} x {height}</span>
    </div>
  );
}
