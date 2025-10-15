import { MelodyGenerator, RhythmGenerator, ChordGenerator } from '@zwitterkaneda/8bits-music-audio-engine';

async function runIntegrationTest() {
  console.log('🧪 Running Integration Tests...\n');

  console.log('1. Testing Melody Generation...');
  const melodyResult = await MelodyGenerator.generate({
    notes: ['C4', 'E4', 'G4', 'C5'],
    durations: ['4n', '4n', '4n', '2n'],
    instrument: 'square',
    bpm: 120
  });
  console.log('Melody Result:', melodyResult);
  console.log('');

  console.log('2. Testing Rhythm Generation...');
  const rhythmResult = await RhythmGenerator.generate({
    pattern: 'basic_rock',
    bpm: 120,
    bars: 2
  });
  console.log('Rhythm Result:', rhythmResult);
  console.log('');

  console.log('3. Testing Chord Generation...');
  const chordResult = await ChordGenerator.generate({
    key: 'C',
    progression: 'I-IV-V-I',
    voicing: 'triad'
  });
  console.log('Chord Result:', chordResult);
  console.log('');

  console.log('✅ Integration tests completed!');
}

runIntegrationTest().catch(console.error);