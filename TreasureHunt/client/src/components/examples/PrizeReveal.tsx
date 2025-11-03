import PrizeReveal from '../PrizeReveal';

export default function PrizeRevealExample() {
  return (
    <PrizeReveal 
      stopNumber={3} 
      totalStops={10} 
      locationName="Erasmus Bridge"
      prize="A voucher for a coffee at your favorite riverside café, where you can enjoy the beautiful view of the Maas river!"
      onContinue={() => console.log('Continue clicked')} 
    />
  );
}
