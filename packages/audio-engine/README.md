# 8-bit Music Audio Engine

Audio engine for generating 8-bit style music using Web Audio API and Tone.js.

## Features

- **Instruments**: Square, Triangle, Sawtooth, Pulse, and Noise synthesizers
- **Generators**: Melody, rhythm, and chord progression generation
- **Validators**: Parameter and note validation
- **Exporters**: MIDI and WAV export capabilities

## Installation

```bash
npm install
```

## Usage

```typescript
import { MelodyGenerator, RhythmGenerator, ChordGenerator } from './index.js';

// Generate a melody
const melody = await MelodyGenerator.generate({
  notes: ['C4', 'E4', 'G4', 'C5'],
  durations: ['4n', '4n', '4n', '2n'],
  instrument: 'square',
  bpm: 120
});

// Generate a rhythm
const rhythm = await RhythmGenerator.generate({
  pattern: 'basic_rock',
  bpm: 120,
  bars: 2
});

// Generate chord progression
const chords = await ChordGenerator.generate({
  key: 'C',
  progression: 'I-IV-V-I',
  voicing: 'triad'
});
```

## API Reference

### Instruments
- `square` - Classic square wave synth
- `triangle` - Triangle wave synth  
- `sawtooth` - Sawtooth wave synth
- `pulse` - Pulse wave synth
- `noise` - White noise synth

### Rhythm Patterns
- `basic_rock` - Standard rock beat
- `techno` - Electronic dance pattern
- `waltz` - 3/4 time signature

### Chord Progressions
- `I-IV-V-I` - Classic major progression
- `ii-V-I` - Jazz progression
- `I-vi-ii-V` - Circle progression
- `vi-IV-I-V` - Pop progression
- `I-V-vi-IV` - Popular progression

## Development

```bash
npm run build  # Compile TypeScript
npm run dev    # Development mode
npm test       # Run tests
```

## License

MIT