import { useEffect, useRef, useState } from "react";

interface CounterAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
}

export function useCounterAnimation({
  start = 0,
  end,
  duration = 2000,
  suffix = "",
}: CounterAnimationOptions) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const stepTime = duration / (end - start);
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + 1;
        if (nextCount >= end) {
          clearInterval(timer);
          return end;
        }
        return nextCount;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, end, start, duration]);

  return { count, ref, displayValue: `${count}${suffix}` };
}
