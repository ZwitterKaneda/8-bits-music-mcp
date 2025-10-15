import * as Tone from 'tone';
import { RhythmParams, GenerationResult } from '../types.js';
import { ParameterValidator } from '../validators/index.js';
import { createInstrument } from '../instruments/index.js';

export class RhythmGenerator {
  static async generate(params: RhythmParams): Promise<GenerationResult> {
    try {
      if (!ParameterValidator.validateBPM(params.bpm)) {
        return {
          success: false,
          trackId: '',
          message: 'BPM must be between 60 and 200',
          error: 'INVALID_BPM'
        };
      }

      if (!ParameterValidator.validateBars(params.bars)) {
        return {
          success: false,
          trackId: '',
          message: 'Bars must be between 1 and 16',
          error: 'INVALID_BARS'
        };
      }

      await Tone.start();
      
      if (Tone.Transport && Tone.Transport.bpm) {
        Tone.Transport.bpm.value = params.bpm;
      }

      const kick = createInstrument({ type: 'square', volume: -5 });
      const snare = createInstrument({ type: 'noise', volume: -8 });
      const hihat = createInstrument({ type: 'square', volume: -12 });

      const patterns = {
        basic_rock: {
          kick: [0, 4, 8, 12],
          snare: [4, 12],
          hihat: [0, 2, 4, 6, 8, 10, 12, 14]
        },
        techno: {
          kick: [0, 2, 4, 6, 8, 10, 12, 14],
          snare: [4, 12],
          hihat: [1, 3, 5, 7, 9, 11, 13, 15]
        },
        waltz: {
          kick: [0, 8],
          snare: [4, 12],
          hihat: [0, 2, 4, 6, 8, 10, 12, 14]
        }
      };

      const pattern = patterns[params.pattern as keyof typeof patterns] || patterns.basic_rock;
      const totalSteps = 16 * params.bars;
      const stepDuration = Tone.Time('16n').toSeconds();
      const totalDuration = totalSteps * stepDuration;

      const now = Tone.now();

      for (let step = 0; step < totalSteps; step++) {
        const stepInPattern = step % 16;
        const time = now + (step * stepDuration);

        if (pattern.kick.includes(stepInPattern)) {
          kick.playNote('C1', '16n', time);
        }

        if (pattern.snare.includes(stepInPattern)) {
          snare.playNote('C5', '16n', time);
        }

        if (pattern.hihat.includes(stepInPattern)) {
          hihat.playNote('C6', '16n', time);
        }
      }

      const trackId = `rhythm_${Date.now()}`;

      return {
        success: true,
        trackId,
        message: `8-bit rhythm pattern generated: ${params.pattern}`,
        duration: totalDuration,
        data: {
          pattern: params.pattern,
          bpm: params.bpm,
          bars: params.bars,
          totalSteps
        }
      };

    } catch (error) {
      return {
        success: false,
        trackId: '',
        message: 'Failed to generate rhythm pattern',
        error: (error as Error).message
      };
    }
  }
}