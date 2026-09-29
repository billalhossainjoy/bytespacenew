type RevenueCardProps = {
  title: string;
  subtitle: string;
  amount: string;
  className: string;
  badge?: string;
};

export function RevenueCard({
  title,
  subtitle,
  amount,
  className,
  badge,
}: RevenueCardProps) {
  return (
    <div className={`absolute z-10 h-[118px] w-[220px] rounded-[16px] bg-persian-blue-600 px-4 py-3 text-white ${className}`}>
      <p className="text-label-m font-medium">{title}</p>
      <p className="text-body-xs text-white/75">{subtitle}</p>
      <p className="font-heading mt-2 text-[22px] font-semibold leading-none">{amount}</p>
      {badge ? (
        <span className="bg-electric-lime-400 absolute bottom-3 left-4 rounded-full px-2 py-1 text-[10px] font-semibold leading-none text-[#1f2718]">
          {badge}
        </span>
      ) : (
        <div className="absolute inset-x-4 bottom-4 h-2 rounded-full bg-white/25">
          <div className="bg-electric-lime-400 h-full w-[56%] rounded-full" />
        </div>
      )}
    </div>
  );
}
