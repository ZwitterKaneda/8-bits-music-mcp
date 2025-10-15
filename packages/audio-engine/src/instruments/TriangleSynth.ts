import * as Tone from 'tone';
import { BaseInstrument } from './BaseInstrument.js';
import { InstrumentConfig, Note, Duration } from '../types.js';

export class TriangleSynth extends BaseInstrument {
  private synth: Tone.Synth;

  constructor(config: InstrumentConfig) {
    super(config);
    this.synth = new Tone.Synth({
      oscillator: {
        type: 'triangle'
      },
      envelope: {
        attack: config.attack ?? 0.005,
        decay: config.decay ?? 0.1,
        sustain: config.sustain ?? 0.3,
        release: config.release ?? 0.1
      }
    }).toDestination();

    if (config.volume !== undefined) {
      this.synth.volume.value = config.volume;
    }
  }

  playNote(note: Note, duration: Duration, time: number): void {
    this.synth.triggerAttackRelease(note, duration, time);
  }

  async scheduleNotes(notes: Note[], durations: Duration[], bpm: number): Promise<void> {
    const now = Date.now() / 1000;
    let time = now;
    
    for (let i = 0; i < notes.length; i++) {
      const duration = durations[i] || '4n';
      this.playNote(notes[i], duration, time);
      time += this.getDurationInSeconds(duration, bpm);
    }
  }

  disconnect(): void {
    this.synth.disconnect();
  }
}