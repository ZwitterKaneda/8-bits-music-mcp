/**
 * Composición clásica de sonido 8-bit (tipo Mario Bros)
 */

const classic8BitComposition = [
  {
    tool: "create_8bit_melody",
    arguments: {
      notes: ["E4", "E4", "E4", "C4", "E4", "G4", "G3"],
      durations: ["8n", "8n", "4n", "8n", "4n", "2n", "2n"],
      instrument: "square",
      bpm: 180
    }
  },
  {
    tool: "create_8bit_rhythm",
    arguments: {
      pattern: "basic_rock", 
      bpm: 180,
      bars: 8
    }
  },
  {
    tool: "export_audio_composition",
    arguments: {
      tracks: ["melody_123", "rhythm_456"],
      format: "wav",
      outputPath: "./classic-8bit-theme.wav"
    }
  }
];

console.log("Composición clásica 8-bit (ejemplo Mario Bros):");
classic8BitComposition.forEach((step, index) => {
  console.log(`\nPaso ${index + 1}: ${step.tool}`);
  console.log(JSON.stringify(step.arguments, null, 2));
});