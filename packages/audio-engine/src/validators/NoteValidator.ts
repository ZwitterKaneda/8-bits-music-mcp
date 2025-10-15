import { Note, Duration } from '../types.js';

export class NoteValidator {
  private static readonly VALID_NOTES = /^[A-G][#b]?[0-9]$/;
  private static readonly VALID_DURATIONS: Duration[] = ['16n', '8n', '4n', '2n', '1n'];

  static validateNote(note: Note): boolean {
    return this.VALID_NOTES.test(note);
  }

  static validateDuration(duration: Duration): boolean {
    return this.VALID_DURATIONS.includes(duration);
  }

  static validateNoteRange(notes: Note[]): { valid: boolean; outOfRangeNotes: Note[] } {
    const outOfRangeNotes: Note[] = [];
    
    for (const note of notes) {
      if (!this.validateNote(note)) {
        outOfRangeNotes.push(note);
      }
    }

    return {
      valid: outOfRangeNotes.length === 0,
      outOfRangeNotes
    };
  }

  static validateDurations(durations: Duration[]): { valid: boolean; invalidDurations: Duration[] } {
    const invalidDurations: Duration[] = [];
    
    for (const duration of durations) {
      if (!this.validateDuration(duration)) {
        invalidDurations.push(duration);
      }
    }

    return {
      valid: invalidDurations.length === 0,
      invalidDurations
    };
  }
}