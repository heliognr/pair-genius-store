
"use client";
import type React from 'react';
import { createContext, useContext, useState, useMemo, useCallback, useRef, useEffect } from 'react';
import type { SoundSettings, SfxType, DifficultyId } from '@/types';
import { LEVELS } from '@/lib/levels';

interface SoundContextType extends SoundSettings {
  toggleSfx: () => void;
  toggleBgm: () => void;
  playSfx: (sfxName: SfxType) => void;
  playBgmForLevel: (difficultyId: DifficultyId) => void;
  stopBgm: () => void;
  ensureAudioUnlocked: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const SFX_BASE_PATH = '/sounds/sfx/';
const MUSIC_BASE_PATH = '/sounds/music/';

const SFX_FILES: Record<SfxType, string> = {
  flip: `${SFX_BASE_PATH}flip.mp3`,
  match: `${SFX_BASE_PATH}match.mp3`,
  mismatch: `${SFX_BASE_PATH}flip.mp3`, // Using flip for mismatch as requested
  win: `${SFX_BASE_PATH}win.mp3`,
  lose: `${SFX_BASE_PATH}lose.mp3`,
};

const LOCAL_STORAGE_SFX_ENABLED = "pair-genius-sfx-enabled";
const LOCAL_STORAGE_BGM_ENABLED = "pair-genius-bgm-enabled";
const LOCAL_STORAGE_SFX_VOLUME = "pair-genius-sfx-volume";
const LOCAL_STORAGE_BGM_VOLUME = "pair-genius-bgm-volume";

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [sfxEnabled, setSfxEnabledState] = useState(true);
  const [bgmEnabled, setBgmEnabledState] = useState(true);
  const [sfxVolume, setSfxVolumeState] = useState(0.5);
  const [bgmVolume, setBgmVolumeState] = useState(0.5); 

  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const bgmAudioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackPath, setCurrentTrackPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSfxEnabled = localStorage.getItem(LOCAL_STORAGE_SFX_ENABLED);
      if (storedSfxEnabled !== null) setSfxEnabledState(JSON.parse(storedSfxEnabled));

      const storedBgmEnabled = localStorage.getItem(LOCAL_STORAGE_BGM_ENABLED);
      if (storedBgmEnabled !== null) setBgmEnabledState(JSON.parse(storedBgmEnabled));

      const storedSfxVolume = localStorage.getItem(LOCAL_STORAGE_SFX_VOLUME);
      if (storedSfxVolume !== null) setSfxVolumeState(parseFloat(storedSfxVolume));
      
      const storedBgmVolume = localStorage.getItem(LOCAL_STORAGE_BGM_VOLUME);
      if (storedBgmVolume !== null) setBgmVolumeState(parseFloat(storedBgmVolume));
    }
  }, []);

  const setSfxEnabled = (enabled: boolean) => {
    setSfxEnabledState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_SFX_ENABLED, JSON.stringify(enabled));
    }
  };

  const setBgmEnabled = (enabled: boolean) => {
    setBgmEnabledState(enabled);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_BGM_ENABLED, JSON.stringify(enabled));
    }
    if (!enabled && bgmAudioRef.current && !bgmAudioRef.current.paused) {
        console.log("SoundContext: BGM toggled off, pausing audio.");
        bgmAudioRef.current.pause();
    }
  };

  const setSfxVolume = (volume: number) => {
    const newVolume = Math.max(0, Math.min(1, volume));
    setSfxVolumeState(newVolume);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_SFX_VOLUME, newVolume.toString());
    }
  };

  const setBgmVolume = (volume: number) => {
    const newVolume = Math.max(0, Math.min(1, volume));
    setBgmVolumeState(newVolume);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_BGM_VOLUME, newVolume.toString());
    }
    if (bgmAudioRef.current) {
      bgmAudioRef.current.volume = newVolume;
    }
  };

  const ensureAudioUnlocked = useCallback(() => {
    if (!audioUnlocked) {
      console.log("SoundContext: Audio unlocked by user interaction.");
      setAudioUnlocked(true);
    }
  }, [audioUnlocked]);

  const toggleSfx = useCallback(() => {
    ensureAudioUnlocked();
    setSfxEnabled(!sfxEnabled);
  }, [ensureAudioUnlocked, sfxEnabled]);

  const toggleBgm = useCallback(() => {
    ensureAudioUnlocked();
    setBgmEnabled(!bgmEnabled);
  }, [ensureAudioUnlocked, bgmEnabled, setBgmEnabled]);


  const playSfx = useCallback((sfxName: SfxType) => {
    if (!sfxEnabled || !audioUnlocked) {
      console.log(`SoundContext: SFX ${sfxName} not played. sfxEnabled: ${sfxEnabled}, audioUnlocked: ${audioUnlocked}`);
      return;
    }
    const audioFilePath = SFX_FILES[sfxName];
    if (!audioFilePath) {
      console.warn(`SoundContext: SFX_FILES entry missing for ${sfxName}`);
      return;
    }
    const audio = new Audio(audioFilePath);
    audio.volume = sfxVolume;
    audio.onerror = () => {
      console.error(`SoundContext: Failed to load SFX: ${audioFilePath}. Full path tried: ${audio.src}`);
    };
    audio.play().catch(error => console.warn(`SoundContext: Error playing SFX ${sfxName} (${audioFilePath}):`, error));
  }, [sfxEnabled, audioUnlocked, sfxVolume]);

  const playBgmForLevel = useCallback((difficultyId: DifficultyId) => {
    const level = LEVELS.find(l => l.id === difficultyId);
    const newTrackRelativePath = level?.musicTrack ? `${MUSIC_BASE_PATH}${level.musicTrack}` : null;
    
    console.log(`SoundContext: playBgmForLevel called for ${difficultyId}. New track: ${newTrackRelativePath}. Current track: ${currentTrackPath}`);
    
    if (currentTrackPath !== newTrackRelativePath) {
      setCurrentTrackPath(newTrackRelativePath);
    } else if (newTrackRelativePath && bgmAudioRef.current && bgmAudioRef.current.paused && bgmEnabled && audioUnlocked) {
      // If same track, but paused, try to play it
      console.log(`SoundContext: Same track requested (${newTrackRelativePath}), attempting to play because it's paused and conditions met.`);
      bgmAudioRef.current.play().catch(e => console.warn("SoundContext: Error re-playing BGM (same track, was paused):", e));
    }
  }, [currentTrackPath, bgmEnabled, audioUnlocked]); // Dependencies that trigger new track setting or re-evaluation if already set


  const stopBgm = useCallback(() => {
    console.log("SoundContext: stopBgm called.");
    if (bgmAudioRef.current && !bgmAudioRef.current.paused) {
      bgmAudioRef.current.pause();
      console.log("SoundContext: BGM paused.");
    }
    setCurrentTrackPath(null); // Clear the track path so it's seen as a "new" track next time
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!bgmAudioRef.current) {
      bgmAudioRef.current = new Audio();
      bgmAudioRef.current.loop = true;
      console.log("SoundContext: BGM Audio element created.");
    }

    const audioEl = bgmAudioRef.current;
    audioEl.volume = bgmVolume; 

    console.log(`SoundContext BGM useEffect triggered. Conditions - audioUnlocked: ${audioUnlocked}, bgmEnabled: ${bgmEnabled}, currentTrackPath: ${currentTrackPath}, audioEl.src: ${audioEl.src}, audioEl.paused: ${audioEl.paused}`);

    if (bgmEnabled && currentTrackPath && audioUnlocked) {
      const targetSrc = new URL(currentTrackPath, window.location.origin).href;
      
      if (audioEl.src !== targetSrc) {
        console.log(`SoundContext BGM: Setting new src: ${currentTrackPath}. Current src: ${audioEl.src}`);
        audioEl.src = currentTrackPath; 
        audioEl.load(); // Explicitly load the new source
        
        audioEl.oncanplaythrough = () => {
          console.log(`SoundContext BGM: oncanplaythrough for ${currentTrackPath}. audioUnlocked: ${audioUnlocked}, bgmEnabled: ${bgmEnabled}`);
          if (audioUnlocked && bgmEnabled) { // Re-check conditions, state might have changed
            const playPromise = audioEl.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn(`SoundContext BGM: play() failed from oncanplaythrough for ${currentTrackPath}:`, error.name, error.message);
                });
            }
          }
          audioEl.oncanplaythrough = null; // Clean up handler
        };
        audioEl.onerror = () => {
            console.error(`SoundContext BGM: Error loading audio source: ${currentTrackPath}`);
            audioEl.onerror = null; // Clean up handler
        };

      } else if (audioEl.paused) { 
        console.log(`SoundContext BGM: Audio is paused with correct src (${audioEl.src}), attempting to play.`);
        const playPromise = audioEl.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                 console.warn(`SoundContext BGM: play() failed for paused src ${currentTrackPath}:`, error.name, error.message);
            });
        }
      } else {
         console.log("SoundContext BGM: Audio already playing with correct src.");
      }
    } else {
      if (!audioEl.paused) {
        console.log(`SoundContext BGM: Conditions not met or track is null, pausing audio. Current src: ${audioEl.src}`);
        audioEl.pause();
      }
    }
  }, [audioUnlocked, bgmEnabled, currentTrackPath, bgmVolume]); // Added bgmVolume


  useEffect(() => {
    return () => {
      if (bgmAudioRef.current) {
        console.log("SoundContext: Cleaning up BGM audio element.");
        bgmAudioRef.current.pause();
        bgmAudioRef.current.srcObject = null; 
        bgmAudioRef.current.removeAttribute('src');
      }
    };
  }, []);

  const value = useMemo(() => ({
    sfxEnabled,
    bgmEnabled,
    toggleSfx,
    toggleBgm,
    playSfx,
    playBgmForLevel,
    stopBgm,
    ensureAudioUnlocked,
    sfxVolume,
    setSfxVolume,
    bgmVolume,
    setBgmVolume,
  }), [sfxEnabled, bgmEnabled, toggleSfx, toggleBgm, playSfx, playBgmForLevel, stopBgm, ensureAudioUnlocked, sfxVolume, setSfxVolume, bgmVolume, setBgmVolume]);

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
