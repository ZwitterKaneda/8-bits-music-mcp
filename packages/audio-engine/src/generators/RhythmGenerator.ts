import { RhythmParams, GenerationResult } from '../types.js';
import { ParameterValidator } from '../validators/index.js';

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

      const duration = params.bars * 4 * (60 / params.bpm);
      const trackId = `rhythm_${Date.now()}`;

      return {
        success: true,
        trackId,
        message: `8-bit rhythm pattern created: ${params.pattern} at ${params.bpm} BPM for ${params.bars} bars`,
        duration,
        data: {
          pattern: params.pattern,
          bpm: params.bpm,
          bars: params.bars
        }
      };

    } catch (error) {
      return {
        success: false,
        trackId: '',
        message: 'Failed to generate rhythm',
        error: (error as Error).message
      };
    }
  }
}
