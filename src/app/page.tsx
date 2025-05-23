
"use client";
// Removed useState for gameStarted
import { ClientGame } from '@/components/ClientGame';
// Removed Button and useTranslation as they are not directly used here anymore for start screen

export default function HomePage() {
  // No more gameStarted state. ClientGame will handle its initial display logic.
  // The initialGameStartPending prop will tell ClientGame to show its own "Start Game" button
  // if no game is active.
  return <ClientGame initialGameStartPending={true} />;
}
