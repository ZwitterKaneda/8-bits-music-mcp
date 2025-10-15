import * as Tone from 'tone';
import { BaseInstrument } from './BaseInstrument.js';
import { InstrumentConfig, Note, Duration } from '../types.js';

export class NoiseSynth extends BaseInstrument {
  private noise: Tone.NoiseSynth;

  constructor(config: InstrumentConfig) {
    super(config);
    this.noise = new Tone.NoiseSynth({
      noise: {
        type: 'white'
      },
      envelope: {
        attack: config.attack ?? 0.001,
        decay: config.decay ?? 0.1,
        sustain: config.sustain ?? 0.1,
        release: config.release ?? 0.1
      }
    }).toDestination();

    if (config.volume !== undefined) {
      this.noise.volume.value = config.volume;
    }
  }

  playNote(note: Note, duration: Duration, time: number): void {
    this.noise.triggerAttackRelease(duration, time);
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
    this.noise.disconnect();
  }
}