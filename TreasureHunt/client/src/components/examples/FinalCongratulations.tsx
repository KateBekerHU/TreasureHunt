import FinalCongratulations from '../FinalCongratulations';

export default function FinalCongratulationsExample() {
  const mockStops = [
    { id: 1, title: "First", clue: "...", locationName: "Market Hall", prize: "Coffee", qrCode: "C1", coordinates: { lat: 51.92, lng: 4.48 } },
    { id: 2, title: "Second", clue: "...", locationName: "Cube Houses", prize: "Postcard", qrCode: "C2", coordinates: { lat: 51.92, lng: 4.49 } },
    { id: 3, title: "Third", clue: "...", locationName: "Erasmus Bridge", prize: "Frame", qrCode: "C3", coordinates: { lat: 51.91, lng: 4.48 } },
    { id: 4, title: "Fourth", clue: "...", locationName: "Rotterdam Zoo", prize: "Toy", qrCode: "C4", coordinates: { lat: 51.93, lng: 4.47 } },
    { id: 5, title: "Fifth", clue: "...", locationName: "Delfshaven", prize: "Book", qrCode: "C5", coordinates: { lat: 51.91, lng: 4.46 } },
    { id: 6, title: "Sixth", clue: "...", locationName: "Witte de Withstraat", prize: "Art Print", qrCode: "C6", coordinates: { lat: 51.92, lng: 4.47 } },
    { id: 7, title: "Seventh", clue: "...", locationName: "SS Rotterdam", prize: "Model Ship", qrCode: "C7", coordinates: { lat: 51.90, lng: 4.48 } },
    { id: 8, title: "Eighth", clue: "...", locationName: "Euromast", prize: "Binoculars", qrCode: "C8", coordinates: { lat: 51.91, lng: 4.47 } },
    { id: 9, title: "Ninth", clue: "...", locationName: "Boijmans Museum", prize: "Museum Pass", qrCode: "C9", coordinates: { lat: 51.92, lng: 4.48 } },
    { id: 10, title: "Tenth", clue: "...", locationName: "Oude Haven", prize: "Final Gift", qrCode: "C10", coordinates: { lat: 51.92, lng: 4.49 } },
  ];

  return (
    <FinalCongratulations 
      stops={mockStops}
      onRestart={() => console.log('Restart clicked')} 
    />
  );
}
