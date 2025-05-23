
"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface VolumeSliderProps {
  label: string;
  value: number;
  onValueChange: (value: number) => void;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
}

export const VolumeSlider = ({
  label,
  value,
  onValueChange,
  className,
  min = 0,
  max = 1,
  step = 0.01,
}: VolumeSliderProps) => {
  const handleSliderChange = (sliderValue: number[]) => {
    onValueChange(sliderValue[0]);
  };

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <Label htmlFor={`volume-slider-${label.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm">
        {label}: {Math.round(value * 100)}%
      </Label>
      <Slider
        id={`volume-slider-${label.toLowerCase().replace(/\s+/g, '-')}`}
        value={[value]}
        onValueChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        aria-label={label}
      />
    </div>
  );
};
