import { useState, useEffect } from 'react';

const STORAGE_KEY = 'anna_treasure_hunt_progress';

export interface HuntProgressState {
  currentStop: number;
  completedStops: number[];
  hasStarted: boolean;
  hasCompleted: boolean;
  startTime?: string;
  endTime?: string;
}

export function useHuntProgress() {
  const [progress, setProgress] = useState<HuntProgressState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {
          currentStop: 1,
          completedStops: [],
          hasStarted: false,
          hasCompleted: false,
        };
      }
    }
    return {
      currentStop: 1,
      completedStops: [],
      hasStarted: false,
      hasCompleted: false,
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const startHunt = () => {
    setProgress(prev => ({
      ...prev,
      hasStarted: true,
      startTime: new Date().toISOString(),
    }));
  };

  const completeStop = (stopId: number) => {
    setProgress(prev => {
      const newCompleted = [...prev.completedStops, stopId];
      const isLastStop = stopId === 10;
      
      return {
        ...prev,
        completedStops: newCompleted,
        currentStop: isLastStop ? stopId : stopId + 1,
        hasCompleted: isLastStop,
        endTime: isLastStop ? new Date().toISOString() : prev.endTime,
      };
    });
  };

  const resetHunt = () => {
    setProgress({
      currentStop: 1,
      completedStops: [],
      hasStarted: false,
      hasCompleted: false,
    });
  };

  return {
    progress,
    startHunt,
    completeStop,
    resetHunt,
  };
}
