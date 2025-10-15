import { BaseInstrument } from './BaseInstrument.js';
import { InstrumentConfig, Note, Duration } from '../types.js';

export abstract class NodeSynth extends BaseInstrument {
  protected scheduledNotes: Array<{ note: Note; duration: Duration; time: number }> = [];

  async scheduleNotes(notes: Note[], durations: Duration[], bpm: number): Promise<void> {
    this.scheduledNotes = [];
    let currentTime = 0;

    for (let i = 0; i < notes.length; i++) {
      const durationInSeconds = this.getDurationInSeconds(durations[i], bpm);
      
      this.scheduledNotes.push({
        note: notes[i],
        duration: durations[i],
        time: currentTime
      });

      currentTime += durationInSeconds;
    }
  }

  getScheduledNotes() {
    return this.scheduledNotes;
  }

  playNote(note: Note, duration: Duration, time: number): void {
    console.log(`[NodeSynth] Playing note: ${note} for ${duration} at time ${time}s`);
  }

  disconnect(): void {
    this.scheduledNotes = [];
  }
}