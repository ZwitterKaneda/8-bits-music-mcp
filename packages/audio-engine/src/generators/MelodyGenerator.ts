import * as Tone from 'tone';
import { MelodyParams, GenerationResult } from '../types.js';
import { NoteValidator, ParameterValidator } from '../validators/index.js';
import { createInstrument } from '../instruments/index.js';

export class MelodyGenerator {
  static async generate(params: MelodyParams): Promise<GenerationResult> {
    try {
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

      const durationValidation = NoteValidator.validateDurations(params.durations);
      if (!durationValidation.valid) {
        return {
          success: false,
          trackId: '',
          message: `Invalid durations: ${durationValidation.invalidDurations.join(', ')}`,
          error: 'INVALID_DURATIONS'
        };
      }

      await Tone.start();
      
      if (Tone.Transport && Tone.Transport.bpm) {
        Tone.Transport.bpm.value = params.bpm;
      }

      const instrument = createInstrument({
        type: params.instrument,
        volume: -10
      });

      let totalDuration = 0;
      const now = Tone.now();
      let time = now;

      for (let i = 0; i < params.notes.length; i++) {
        instrument.playNote(params.notes[i], params.durations[i], time);
        const noteDuration = Tone.Time(params.durations[i]).toSeconds();
        time += noteDuration;
        totalDuration += noteDuration;
      }

      const trackId = `melody_${Date.now()}`;

      return {
        success: true,
        trackId,
        message: `8-bit melody generated successfully with ${params.notes.length} notes`,
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