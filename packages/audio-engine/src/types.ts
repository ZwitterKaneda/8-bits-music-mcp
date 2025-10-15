export type Note = string;
export type Duration = '16n' | '8n' | '4n' | '2n' | '1n';
export type InstrumentType = 'square' | 'triangle' | 'sawtooth' | 'pulse' | 'noise';

export interface MelodyParams {
  notes: Note[];
  durations: Duration[];
  instrument: InstrumentType;
  bpm: number;
}

export interface RhythmParams {
  pattern: 'basic_rock' | 'techno' | 'waltz' | 'custom';
  bpm: number;
  bars: number;
}

export interface ChordProgressionParams {
  key: string;
  progression: 'I-IV-V-I' | 'ii-V-I' | 'I-vi-ii-V' | 'vi-IV-I-V' | 'I-V-vi-IV';
  voicing: 'triad' | 'seventh' | 'power';
}

export interface ExportParams {
  tracks: string[];
  format: 'wav' | 'midi';
  outputPath: string;
}

export interface GenerationResult {
  success: boolean;
  trackId: string;
  message: string;
  duration?: number;
  data?: any;
  error?: string;
}

export interface ExportResult {
  success: boolean;
  outputPath: string;
  message: string;
  fileSize?: number;
  error?: string;
}

export interface InstrumentConfig {
  type: InstrumentType;
  volume?: number;
  attack?: number;
  decay?: number;
  sustain?: number;
  release?: number;
}

export interface ChordParams {
  key: string;
  progression: string;
  voicing: string;
}
