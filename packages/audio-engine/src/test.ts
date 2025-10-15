import { AudioEngine, MelodyGenerator, RhythmGenerator, ChordGenerator } from './index.js';

async function testAudioEngine() {
  console.log('Testing 8-bit Audio Engine...');

  const melodyResult = await MelodyGenerator.generate({
    notes: ['C4', 'E4', 'G4', 'C5'],
    durations: ['4n', '4n', '4n', '2n'],
    instrument: 'square',
    bpm: 120
  });

  console.log('Melody test:', melodyResult);

  const rhythmResult = await RhythmGenerator.generate({
    pattern: 'basic_rock',
    bpm: 120,
    bars: 2
  });

  console.log('Rhythm test:', rhythmResult);

  const chordResult = await ChordGenerator.generate({
    key: 'C',
    progression: 'I-IV-V-I',
    voicing: 'triad'
  });

  console.log('Chord test:', chordResult);
}

testAudioEngine().catch(console.error);