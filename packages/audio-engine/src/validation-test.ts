import { MelodyGenerator, RhythmGenerator, ChordGenerator } from './index.js';

async function testWithoutAudio() {
  console.log('Testing 8-bit Audio Engine (without audio context)...');

  const invalidMelodyResult = await MelodyGenerator.generate({
    notes: [],
    durations: ['4n'],
    instrument: 'square',
    bpm: 120
  });

  console.log('Invalid melody test:', invalidMelodyResult);

  const invalidBpmResult = await MelodyGenerator.generate({
    notes: ['C4'],
    durations: ['4n'],
    instrument: 'square',
    bpm: 300
  });

  console.log('Invalid BPM test:', invalidBpmResult);

  const invalidRhythmResult = await RhythmGenerator.generate({
    pattern: 'basic_rock',
    bpm: 120,
    bars: 20
  });

  console.log('Invalid rhythm test:', invalidRhythmResult);
}

testWithoutAudio().catch(console.error);