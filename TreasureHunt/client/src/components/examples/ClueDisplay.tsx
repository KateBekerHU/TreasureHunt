import ClueDisplay from '../ClueDisplay';

export default function ClueDisplayExample() {
  return (
    <ClueDisplay 
      stopNumber={3} 
      totalStops={10} 
      clueTitle="The Third Clue" 
      clueText="Seek the place where ships once sailed, where modern art and culture prevailed. A bridge stands tall with graceful might, its white arms reaching toward the light."
      completedStops={[1, 2]}
      onScanQR={() => console.log('Scan QR clicked')}
      onSkipToNext={() => console.log('Skip to next clicked')}
      onRequestHint={() => console.log('Request hint clicked')}
    />
  );
}
