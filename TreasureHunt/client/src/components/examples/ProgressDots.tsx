import ProgressDots from '../ProgressDots';

export default function ProgressDotsExample() {
  return (
    <div className="p-8 bg-background">
      <ProgressDots 
        totalStops={10} 
        currentStop={3} 
        completedStops={[1, 2]} 
      />
    </div>
  );
}
