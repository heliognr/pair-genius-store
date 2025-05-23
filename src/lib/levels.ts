
import type { Level, DifficultyId } from '@/types';

export const LEVELS: Level[] = [
  {
    id: 'level1',
    nameKey: 'level1Name',
    displayName: 'Level 1 (2x2)',
    rows: 2,
    cols: 2,
    totalPairs: 2,
    timeLimit: 60, // 1 min
    moveLimit: 11, // Base: Math.round(2 * 2.75 + 5) = 11
    musicTrack: 'music_child.mp3',
  },
  {
    id: 'level2',
    nameKey: 'level2Name',
    displayName: 'Level 2 (3x2)',
    rows: 2,
    cols: 3,
    totalPairs: 3,
    timeLimit: 80, // 1 min 20s
    moveLimit: 13, // Base: Math.round(3 * 2.75 + 5) = 13
    musicTrack: 'music_superEasy.mp3',
  },
  {
    id: 'level3',
    nameKey: 'level3Name',
    displayName: 'Level 3 (4x3)',
    rows: 3,
    cols: 4,
    totalPairs: 6,
    timeLimit: 105, // 1 min 45s
    moveLimit: 22, // Base: Math.round(6 * 2.75 + 5) = 22
    musicTrack: 'music_easy.mp3',
  },
  {
    id: 'level4',
    nameKey: 'level4Name',
    displayName: 'Level 4 (4x4)',
    rows: 4,
    cols: 4,
    totalPairs: 8,
    timeLimit: 120, // 2 min
    moveLimit: 38, // Base: 27, 27 * 1.4 = 37.8 -> 38
    musicTrack: 'music_medium.mp3', // Was music_level4.mp3, aligning with user's available files
  },
  {
    id: 'level5',
    nameKey: 'level5Name',
    displayName: 'Level 5 (5x4)',
    rows: 4,
    cols: 5,
    totalPairs: 10,
    timeLimit: 180, // 3 min
    moveLimit: 46, // Base: 33, 33 * 1.4 = 46.2 -> 46
    musicTrack: 'music_hard.mp3', // Was music_medium.mp3
  },
  {
    id: 'level6',
    nameKey: 'level6Name',
    displayName: 'Level 6 (6x6)',
    rows: 6,
    cols: 6,
    totalPairs: 18,
    timeLimit: 240, // 4 min
    moveLimit: 77, // Base: 55, 55 * 1.4 = 77
    musicTrack: 'music_superHard.mp3', // Was music_level6.mp3
  },
  {
    id: 'level7',
    nameKey: 'level7Name',
    displayName: 'Level 7 (7x6)',
    rows: 6,
    cols: 7,
    totalPairs: 21,
    timeLimit: 300, // 5 min
    moveLimit: 88, // Base: 63, 63 * 1.4 = 88.2 -> 88
    musicTrack: 'music_expert.mp3', // Was music_hard.mp3
  },
  {
    id: 'level8',
    nameKey: 'level8Name',
    displayName: 'Level 8 (8x6)',
    rows: 6,
    cols: 8,
    totalPairs: 24,
    timeLimit: 360, // 6 min
    moveLimit: 99, // Base: 71, 71 * 1.4 = 99.4 -> 99
    musicTrack: 'music_level8.mp3',
  },
  {
    id: 'level9',
    nameKey: 'level9Name',
    displayName: 'Level 9 (8x8)',
    rows: 8,
    cols: 8,
    totalPairs: 32,
    timeLimit: 420, // 7 min
    moveLimit: 130, // Base: 93, 93 * 1.4 = 130.2 -> 130
    musicTrack: 'music_level9.mp3', // Was music_superHard.mp3
  },
  {
    id: 'level10',
    nameKey: 'level10Name',
    displayName: 'Level 10 (9x8)',
    rows: 8,
    cols: 9,
    totalPairs: 36,
    timeLimit: 600, // 10 min
    moveLimit: 146, // Base: 104, 104 * 1.4 = 145.6 -> 146
    musicTrack: 'music_level10.mp3',
  },
  {
    id: 'level11',
    nameKey: 'level11Name',
    displayName: 'Level 11 (10x10)',
    rows: 10,
    cols: 10,
    totalPairs: 50,
    timeLimit: 900, // 15 min
    moveLimit: 200, // Base: 143, 143 * 1.4 = 200.2 -> 200
    musicTrack: 'music_level11.mp3', // Was music_expert.mp3
  },
  {
    id: 'level12',
    nameKey: 'level12Name',
    displayName: 'Level 12 (12x12)',
    rows: 12,
    cols: 12,
    totalPairs: 72,
    timeLimit: 1200, // 20 min
    moveLimit: 284, // Base: 203, 203 * 1.4 = 284.2 -> 284
    musicTrack: 'music_level12.mp3',
  },
];

export const DEFAULT_DIFFICULTY_ID: DifficultyId = 'level1';
