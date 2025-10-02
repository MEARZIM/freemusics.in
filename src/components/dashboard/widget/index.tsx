"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TVNoise from "@/components/ui/tv-noise";
import Image from "next/image";
import { useWidgetData } from "@/hooks/useWidgetData";

export default function Widget() {
  const widgetData = useWidgetData();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false); // 👈 NEW

  useEffect(() => {
    setIsClient(true); // ✅ Marks hydration complete

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient || !widgetData) return null; // 👈 Prevent mismatched SSR/CSR

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
    });

  const formatDate = (date: Date) => ({
    dayOfWeek: date.toLocaleDateString("en-US", { weekday: "long" }),
    restOfDate: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  });

  const dateInfo = formatDate(currentTime);

  return (
    <Card className="w-full aspect-[2] relative overflow-hidden">
      <TVNoise opacity={0.3} intensity={0.2} speed={40} />
      <CardContent className="bg-accent/30 flex-1 flex flex-col justify-between text-sm font-medium uppercase relative z-20">
        <div className="flex justify-between items-center">
          <span className="opacity-50">{dateInfo.dayOfWeek}</span>
          <span>{dateInfo.restOfDate}</span>
        </div>
        <div className="text-center">
          <div className="text-5xl font-display" suppressHydrationWarning>
            {formatTime(currentTime)}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="opacity-50">{widgetData.temperature}</span>
          <span>{widgetData.location}</span>

          <Badge variant="secondary" className="bg-accent">
            {widgetData.timezone}
          </Badge>
        </div>

        <div className="absolute inset-0 -z-[1]">
          <Image
            src="/assets/pc_blueprint.gif"
            alt="logo"
            width={250}
            height={250}
            className="size-full object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
}
