import * as Tone from 'tone';
import { ChordProgressionParams, GenerationResult } from '../types.js';
import { createInstrument } from '../instruments/index.js';

export class ChordGenerator {
  static async generate(params: ChordProgressionParams): Promise<GenerationResult> {
    try {
      await Tone.start();
      
      if (Tone.Transport && Tone.Transport.bpm) {
        Tone.Transport.bpm.value = 120;
      }

      const instrument = createInstrument({ 
        type: 'square', 
        volume: -8,
        release: 0.5
      });

      const chordProgressions: Record<string, string[][]> = {
        'I-IV-V-I': [
          ['C4', 'E4', 'G4'],
          ['F4', 'A4', 'C5'],
          ['G4', 'B4', 'D5'],
          ['C4', 'E4', 'G4']
        ],
        'ii-V-I': [
          ['D4', 'F4', 'A4'],
          ['G4', 'B4', 'D5'],
          ['C4', 'E4', 'G4']
        ],
        'I-vi-ii-V': [
          ['C4', 'E4', 'G4'],
          ['A4', 'C5', 'E5'],
          ['D4', 'F4', 'A4'],
          ['G4', 'B4', 'D5']
        ],
        'vi-IV-I-V': [
          ['A4', 'C5', 'E5'],
          ['F4', 'A4', 'C5'],
          ['C4', 'E4', 'G4'],
          ['G4', 'B4', 'D5']
        ],
        'I-V-vi-IV': [
          ['C4', 'E4', 'G4'],
          ['G4', 'B4', 'D5'],
          ['A4', 'C5', 'E5'],
          ['F4', 'A4', 'C5']
        ]
      };

      const chords = chordProgressions[params.progression] || chordProgressions['I-IV-V-I'];
      const now = Tone.now();
      let time = now;
      let totalDuration = 0;

      for (const chord of chords) {
        for (const note of chord) {
          instrument.playNote(note, '2n', time);
        }
        const chordDuration = Tone.Time('2n').toSeconds();
        time += chordDuration;
        totalDuration += chordDuration;
      }

      const trackId = `chords_${Date.now()}`;

      return {
        success: true,
        trackId,
        message: `8-bit chord progression generated: ${params.progression} in ${params.key}`,
        duration: totalDuration,
        data: {
          key: params.key,
          progression: params.progression,
          voicing: params.voicing,
          chords
        }
      };

    } catch (error) {
      return {
        success: false,
        trackId: '',
        message: 'Failed to generate chord progression',
        error: (error as Error).message
      };
    }
  }
}