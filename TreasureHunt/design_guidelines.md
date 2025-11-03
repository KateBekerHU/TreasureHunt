# Design Guidelines: Anna's Rotterdam Treasure Hunt

## Design Approach

**Primary Direction: Vintage Treasure Map Aesthetic**

This is a personalized gift experience requiring an immersive, tactile treasure hunt theme. The design draws inspiration from aged maritime maps, weathered parchment scrolls, and vintage adventure aesthetics reminiscent of pirate treasure maps and old cartography.

**Key Design Principles:**
- Authenticity: Every element should feel hand-crafted and aged
- Anticipation: Build excitement through progressive revelation
- Intimacy: Personal touches throughout (Anna's name, customized messages)
- Adventure: Evoke exploration and discovery at every step

---

## Typography

**Primary Font Family:** IM Fell English (Google Fonts) - for headers, clue text, and storytelling elements. This serif font has authentic historical character.

**Secondary Font Family:** Special Elite (Google Fonts) - for metadata like "Stop 2 of 10", instructions, and UI labels. Typewriter-style adds vintage charm without compromising readability.

**Typography Scale:**
- Welcome/Congratulations Headlines: text-4xl to text-5xl, font-bold
- Clue Headers: text-3xl, font-semibold
- Clue Body Text: text-lg to text-xl, leading-relaxed for readability on mobile
- Location Names (After Success): text-2xl, font-bold
- Progress Indicators: text-sm, uppercase tracking-wide
- Button Text: text-base, font-semibold

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 3, 4, 6, and 8 for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: space-y-6 to space-y-8
- Card margins: m-4 to m-6
- Button padding: px-6 py-3

**Container Strategy:**
- Full-viewport mobile-first approach (min-h-screen on all main screens)
- Max-width constraint: max-w-2xl mx-auto for optimal mobile readability
- Edge padding: px-4 to px-6 on mobile, px-8 on larger screens

---

## Component Library

### 1. Welcome Screen
- Full-screen parchment background with torn/burned edge treatment
- Centered personalized greeting: "Anna's Rotterdam Treasure Hunt"
- Decorative vintage compass rose illustration (top or bottom)
- Atmospheric introduction text explaining the hunt
- Large "Begin Your Adventure" button with wax seal aesthetic
- Small progress indicator: "10 Treasures Await"

### 2. Clue Display Screen
**Layout Structure:**
- Sticky header showing: "Stop X of 10" with progress dots/marks
- Main parchment card containing:
  - Decorative header illustration (small vintage flourish)
  - Clue title: "The [Nth] Clue"
  - Riddle/clue text in storytelling format (centered, generous line-height)
  - Vintage map fragment or location hint illustration
  - "Scan QR Code When You Arrive" button (bottom of card)
- Ink splatter or watermark decorative elements

### 3. QR Scanner Interface
- Full-screen camera viewport
- Ornate frame overlay creating scanning target area (like looking through an antique spyglass)
- Floating instruction text: "Point camera at the QR code"
- Vintage-styled cancel/back button
- Success/error states with thematic animations (seal stamp effect on success)

### 4. Prize Reveal Screen
**Celebratory Layout:**
- Animated "treasure chest opening" entrance effect (subtle)
- Large congratulations message: "Treasure Found!"
- Location name revealed in decorative text
- Gift/voucher description in ornate card:
  - Icon or small illustration representing the prize
  - Prize description text
  - Optional personal note from you to Anna
- "Continue to Next Clue" button (or "Finish Hunt" for stop 10)
- Small map marker showing completed location

### 5. Progress Tracker
- Vintage map-style progress visualization
- 10 location markers/icons showing:
  - Completed (treasure chest icon, filled)
  - Current (pulsing compass needle)
  - Locked (padlock or faded marker)
- Accessible from corner menu/burger icon on clue screens
- Shows all clue titles (locked ones appear mysterious)

### 6. Final Congratulations Screen
- Full celebratory parchment scroll design
- Prominent message: "Hunt Complete! All 10 Treasures Discovered"
- Scrollable list of all 10 locations with their prizes
- Timeline of Anna's journey (time spent, order completed)
- Final personal message/dedication
- Optional "Replay Journey" button to review clues

### 7. Navigation & Controls
- Minimal top navigation (to preserve immersion)
- Burger menu revealing: Progress Map, How to Play, Reset Hunt (with confirmation)
- Emergency "Skip Stop" function (hidden, password-protected for troubleshooting)
- Back navigation disabled during active hunt to prevent spoilers

### 8. Buttons & Interactive Elements
- Primary action buttons: Large touch targets (min 48px height), rounded corners, shadow depth
- Vintage wax seal or stamp aesthetic for primary actions
- Pressed/active states: Slight inset shadow effect
- Secondary buttons: Outlined style with parchment texture
- All buttons maintain legibility through intrinsic styling (no background blur needed due to parchment context)

---

## Images

### Hero Image Strategy
**Welcome Screen:** Large hero section featuring a vintage map illustration of Rotterdam with treasure hunt styling - could be an artistic rendering showing the 10 hunt locations marked. This should occupy roughly 50-60% of the initial viewport with parchment overlay effects.

### Decorative Illustrations
- Compass roses, vintage flourishes, ink splatters as accent elements
- Small location-specific icons for each stop (coffee cup, windmill, bridge, etc.)
- Treasure chest, map fragments, antique keys as progress indicators
- QR code frame designed as antique spyglass or ornate border

### Image Placement
- Welcome screen: Hero map of Rotterdam (top 60% of viewport)
- Each clue card: Small decorative header flourish
- Prize reveals: Relevant gift icons (coffee, book, flower, etc.)
- Progress map: Illustrated Rotterdam landmark silhouettes

---

## Offline Functionality Integration

**Visual Feedback:**
- Subtle "Offline Mode" badge when no connection detected
- Clear messaging if QR validation fails offline
- Progress saved locally indicator (small icon in corner)
- All decorative images and textures must be cached for offline viewing

---

## Mobile-First Considerations

- Portrait orientation optimized (90% of usage will be vertical phone)
- Thumb-friendly button placement (bottom 40% of screen for primary actions)
- Readable text sizes without zooming (minimum 16px base)
- Camera permissions clearly requested with context
- Large QR scanning target area for ease of use while walking
- Single-column layouts throughout for clarity

---

## Thematic Consistency Notes

Every element should reinforce the treasure hunt narrative:
- Torn parchment edges on cards
- Aged paper textures (subtle, not overwhelming)
- Sepia-toned or antique filter treatments
- Hand-drawn style illustrations over modern flat design
- Whimsical copy: "Ahoy, Anna!" instead of "Welcome"
- Achievement language: "Treasure Unlocked" not "Completed"

**Animation Philosophy:** Use sparingly - only for meaningful moments like treasure reveals (chest opening, confetti burst) and progress celebrations. Avoid distracting scroll effects that detract from reading clues outdoors.