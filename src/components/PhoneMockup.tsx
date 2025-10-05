import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  image: string;
  alt: string;
  className?: string;
}

export function PhoneMockup({ image, alt, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Phone Frame */}
      <div className="relative w-[300px] mx-auto">
        {/* Phone outer shell */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
          
          {/* Screen */}
          <div className="relative bg-background rounded-[2.5rem] overflow-hidden">
            <img
              src={image}
              alt={alt}
              className="w-full h-auto"
            />
          </div>
          
          {/* Side buttons */}
          <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 rounded-l"></div>
          <div className="absolute right-0 top-40 w-1 h-8 bg-gray-700 rounded-l"></div>
          <div className="absolute right-0 top-52 w-1 h-8 bg-gray-700 rounded-l"></div>
          <div className="absolute left-0 top-32 w-1 h-16 bg-gray-700 rounded-r"></div>
        </div>
      </div>
    </div>
  );
}
