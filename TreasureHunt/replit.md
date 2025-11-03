# Anna's Rotterdam Treasure Hunt

## Overview

This is a personalized, location-based treasure hunt web application built for Anna to explore Rotterdam. The application presents a series of 10 sequential clues, each leading to a physical location in Rotterdam where Anna must scan a QR code to progress. The experience is designed with a vintage treasure map aesthetic, featuring weathered parchment textures, historical typography, and an immersive adventure theme.

The application is a single-page React application that runs entirely in the browser, with progress persisted to local storage. Each stop in the hunt includes a cryptic clue, geographic coordinates, a location name (revealed upon success), and a prize description.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite as the build tool and development server.

**Routing**: Uses Wouter for lightweight client-side routing, though the application is primarily single-page with conditional screen rendering.

**State Management**: 
- Local component state using React hooks (useState, useEffect)
- Custom hook `useHuntProgress` manages the core hunt progression state
- Progress persistence to browser localStorage for maintaining state across sessions
- TanStack Query (React Query) configured but not actively used in the current implementation

**UI Component Library**: 
- Shadcn UI components built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Custom vintage treasure hunt theme with parchment backgrounds and historical typography (IM Fell English for headers, Special Elite for metadata)

**Design System**:
- Mobile-first responsive design approach
- Full viewport screens (min-h-screen) for immersive experience
- Maximum content width of 2xl (max-w-2xl) for optimal mobile readability
- Vintage aesthetic with parchment textures and compass rose imagery
- Custom color scheme using HSL values with CSS custom properties
- Typography scale optimized for readability on mobile devices

### State Management Strategy

**Local Storage Pattern**: The application uses a custom hook (`useHuntProgress`) that synchronizes state with localStorage, ensuring progress persists across browser sessions. The state includes:
- Current stop number (1-10)
- Array of completed stop IDs
- Hunt start/end timestamps
- Flags for hasStarted and hasCompleted

**Screen Flow State Machine**: The main component manages screen transitions through a simple state machine with screens: 'welcome' → 'clue' → 'scanner' → 'prize' → 'final'

### Data Architecture

**Static Data Source**: Hunt stops are defined as a static TypeScript array in `client/src/lib/huntData.ts`, containing 10 pre-configured locations with:
- Sequential IDs (1-10)
- Dutch clue text (cryptic riddles)
- Location names (revealed after success)
- Prize descriptions
- QR code identifiers
- GPS coordinates (lat/lng)

**Type Safety**: Zod schemas in `shared/schema.ts` define the data structure for coordinates, hunt stops, and progress tracking, ensuring type safety across the application.

### Backend Architecture

**Current Implementation**: Minimal Express.js server primarily serving the Vite-built frontend in production. No active API endpoints are implemented.

**In-Memory Storage**: A basic storage interface exists (`server/storage.ts`) with user CRUD operations, but is not currently utilized by the application.

**Session Management**: Dependencies for connect-pg-simple suggest planned session storage, but not currently implemented.

**Development Mode**: Vite dev server with HMR (Hot Module Replacement) and Replit-specific plugins for error overlays and development banners.

### Key Architectural Decisions

**Client-Side Only Approach**:
- **Problem**: Need for a personalized, private treasure hunt experience without requiring authentication or backend infrastructure
- **Solution**: All hunt logic runs client-side with localStorage persistence
- **Rationale**: Simpler deployment, no database required, instant loading, works offline after initial load
- **Trade-off**: Hunt data is visible in client code, but acceptable for a personal gift application

**Sequential Hunt Progression**:
- **Problem**: Ensure Anna experiences locations in the intended order
- **Solution**: Stops are locked sequentially; only the current stop's QR code will be accepted
- **Rationale**: Creates a guided narrative journey through Rotterdam
- **Alternative considered**: Free-form exploration would allow out-of-order completion but lose narrative coherence

**No QR Camera Integration**:
- **Problem**: QR scanning requires camera permissions and can be technically complex
- **Solution**: Manual code entry field as the primary interaction method
- **Rationale**: Simpler implementation, works reliably across all devices, maintains the treasure hunt puzzle aspect
- **Trade-off**: Less "magical" but more reliable and accessible

**Static Asset Images**:
- **Implementation**: Pre-generated vintage aesthetic images (parchment backgrounds, compass rose, treasure chest, Rotterdam map) stored in attached_assets
- **Rationale**: Consistent visual quality, faster loading, no runtime image generation needed

## External Dependencies

### UI Component Libraries
- **Radix UI**: Headless component primitives for accessibility (dialogs, popovers, accordions, etc.)
- **Shadcn UI**: Pre-styled component collection built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Component variant styling utility
- **clsx & tailwind-merge**: Utility for conditional CSS class management

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **PostCSS & Autoprefixer**: CSS processing pipeline
- **Google Fonts**: IM Fell English (treasure aesthetic) and Special Elite (typewriter style)

### State & Data Management
- **TanStack React Query**: Configured for future API integration but not actively used
- **React Hook Form**: Form handling (configured but minimal usage)
- **Zod**: Runtime type validation and schema definition
- **Drizzle ORM**: Database ORM configured for PostgreSQL (not currently used)

### Database (Configured but Not Active)
- **PostgreSQL**: Via Neon Database serverless driver (@neondatabase/serverless)
- **Drizzle Kit**: Database migration tool
- **connect-pg-simple**: PostgreSQL session store for Express (configured but unused)

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundler for production builds
- **Wouter**: Lightweight routing library
- **Replit-specific plugins**: Error overlay, cartographer, dev banner for Replit environment

### Runtime Environment
- **Node.js**: Server runtime (ESM modules)
- **Express.js**: Web server framework
- **date-fns**: Date manipulation library

### Future Integration Points
The architecture includes several dependencies suggesting planned features:
- Database integration (Drizzle + PostgreSQL) for multi-user support or analytics
- Session management for user authentication
- API endpoints for dynamic content or progress tracking
- Form validation for user inputs beyond the hunt