import { InstrumentConfig, Note, Duration } from '../types.js';

export abstract class BaseInstrument {
  protected config: InstrumentConfig;

  constructor(config: InstrumentConfig) {
    this.config = config;
  }

  abstract playNote(note: Note, duration: Duration, time: number): void;
  abstract disconnect(): void;

  protected getDurationInSeconds(duration: Duration, bpm: number): number {
    const beatsPerSecond = bpm / 60;
    const beatDurations: Record<Duration, number> = {
      '16n': 0.25 / beatsPerSecond,
      '8n': 0.5 / beatsPerSecond,
      '4n': 1 / beatsPerSecond,
      '2n': 2 / beatsPerSecond,
      '1n': 4 / beatsPerSecond
    };
    return beatDurations[duration] || 1 / beatsPerSecond;
  }

  abstract scheduleNotes(notes: Note[], durations: Duration[], bpm: number): Promise<void>;
}