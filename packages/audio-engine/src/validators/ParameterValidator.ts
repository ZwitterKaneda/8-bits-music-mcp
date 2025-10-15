export class ParameterValidator {
  static validateBPM(bpm: number): boolean {
    return bpm >= 60 && bpm <= 200;
  }

  static validateBars(bars: number): boolean {
    return bars >= 1 && bars <= 16;
  }

  static validateNotesCount(notes: any[]): boolean {
    return notes.length >= 1 && notes.length <= 32;
  }

  static validateTracksCount(tracks: any[]): boolean {
    return tracks.length >= 1 && tracks.length <= 10;
  }
}