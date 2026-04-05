import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  image: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function PhoneMockup({ image, alt, className, priority = false }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[320px]", className)}>
      <div className="absolute inset-x-[16%] top-3 h-6 rounded-b-[1.25rem] bg-slate-950/95" />
      <div className="absolute inset-0 rounded-[2.75rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0.05))] opacity-40 dark:opacity-20" />
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/60 bg-slate-950 p-[10px] shadow-[0_32px_90px_-36px_rgba(16,24,40,0.7)] ring-1 ring-slate-950/5 dark:border-white/10 dark:shadow-[0_32px_90px_-36px_rgba(0,0,0,0.88)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-white">
          <img
            src={image}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            className="block h-auto w-full"
          />
        </div>
        <div className="absolute inset-y-[18%] -left-[2px] w-[3px] rounded-r-full bg-white/25" />
        <div className="absolute right-0 top-[18%] h-16 w-[3px] rounded-l-full bg-white/20" />
        <div className="absolute right-0 top-[34%] h-10 w-[3px] rounded-l-full bg-white/20" />
      </div>
    </div>
  );
}
