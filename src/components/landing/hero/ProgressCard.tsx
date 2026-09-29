type ProgressCardProps = {
  className?: string;
};

export function ProgressCard({ className = "left-[842px] top-[532px]" }: ProgressCardProps) {
  return (
    <div className={`absolute z-40 w-[232px] rounded-[16px] bg-white px-4 pb-4 pt-4 text-[#202126] shadow-[0_8px_28px_rgba(29,40,67,0.08)] ${className}`}>
      <p className="text-[14px] font-medium">Learning Progress</p>
      <p className="mt-1 text-[47px] font-bold leading-none tracking-[-0.04em]">55%</p>
      <div className="mt-4 h-2 rounded-full bg-[#f0f1f3]">
        <div className="bg-electric-lime-500 h-full w-[56%] rounded-full" />
      </div>
    </div>
  );
}
