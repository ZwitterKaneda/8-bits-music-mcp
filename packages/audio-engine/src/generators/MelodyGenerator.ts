import { MelodyParams, GenerationResult } from '../types.js';
import { NoteValidator, ParameterValidator } from '../validators/index.js';

export class MelodyGenerator {
  static async generate(params: MelodyParams): Promise<GenerationResult> {
    try {
      // Validations
      if (!ParameterValidator.validateNotesCount(params.notes)) {
        return {
          success: false,
          trackId: '',
          message: 'Number of notes must be between 1 and 32',
          error: 'INVALID_NOTES_COUNT'
        };
      }

      if (!ParameterValidator.validateBPM(params.bpm)) {
        return {
          success: false,
          trackId: '',
          message: 'BPM must be between 60 and 200',
          error: 'INVALID_BPM'
        };
      }

      const noteValidation = NoteValidator.validateNoteRange(params.notes);
      if (!noteValidation.valid) {
        return {
          success: false,
          trackId: '',
          message: `Invalid notes: ${noteValidation.outOfRangeNotes.join(', ')}`,
          error: 'INVALID_NOTES'
        };
      }

      // Calculate duration without Tone.js
      const durationMap: Record<string, number> = {
        '1n': 4,
        '2n': 2,
        '4n': 1,
        '8n': 0.5,
        '16n': 0.25
      };

      let totalDuration = 0;
      for (const dur of params.durations) {
        totalDuration += (durationMap[dur] || 1) * (60 / params.bpm);
      }

      const trackId = `melody_${Date.now()}`;

      return {
        success: true,
        trackId,
        message: `8-bit melody created: ${params.notes.length} notes at ${params.bpm} BPM with ${params.instrument} wave`,
        duration: totalDuration,
        data: {
          notes: params.notes,
          durations: params.durations,
          instrument: params.instrument,
          bpm: params.bpm
        }
      };

    } catch (error) {
      return {
        success: false,
        trackId: '',
        message: 'Failed to generate melody',
        error: (error as Error).message
      };
    }
  }
}
