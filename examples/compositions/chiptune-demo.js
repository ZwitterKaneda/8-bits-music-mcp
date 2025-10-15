const chiptuneDemo = [
  {
    tool: "create_8bit_melody",
    arguments: {
      notes: ["C5", "D5", "E5", "G5", "E5", "D5", "C5", "A4"],
      durations: ["8n", "8n", "8n", "4n", "8n", "8n", "4n", "2n"],
      instrument: "square",
      bpm: 160
    }
  },
  {
    tool: "create_8bit_melody",
    arguments: {
      notes: ["C3", "C3", "G3", "G3", "C3", "C3", "F3", "F3"],
      durations: ["2n", "2n", "2n", "2n", "2n", "2n", "2n", "2n"],
      instrument: "triangle",
      bpm: 160
    }
  },
  {
    tool: "create_8bit_rhythm",
    arguments: {
      pattern: "techno",
      bpm: 160,
      bars: 8
    }
  },
  {
    tool: "export_audio_composition",
    arguments: {
      tracks: ["melody_lead", "melody_bass", "rhythm_drums"],
      format: "wav",
      outputPath: "./chiptune-demo.wav"
    }
  }
];

console.log("Complete Chiptune demonstration:");
chiptuneDemo.forEach((step, index) => {
  console.log(`\n${index + 1}. ${step.tool}`);
});