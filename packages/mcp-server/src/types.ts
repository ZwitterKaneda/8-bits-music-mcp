export type Note = string;
export type Duration = '16n' | '8n' | '4n' | '2n' | '1n';

export type Instrument = 'square' | 'triangle' | 'sawtooth' | 'pulse' | 'noise';
export interface MelodyParams {
  notes: Note[];
  durations: Duration[];
  instrument: Instrument;
  bpm?: number;
}

export interface RhythmParams {
  pattern: 'basic_rock' | 'techno' | 'waltz' | 'custom';
  bpm: number;
  bars?: number;
}

export interface ChordProgressionParams {
  key: string;
  progression: 'I-IV-V-I' | 'ii-V-I' | 'I-vi-ii-V' | 'vi-IV-I-V' | 'I-V-vi-IV';
  voicing?: 'triad' | 'seventh' | 'power';
}

export interface ExportParams {
  tracks: string[];
  format: 'wav' | 'midi';
  outputPath: string;
}

export interface ToolResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}