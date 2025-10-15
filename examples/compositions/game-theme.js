/**
 * Tema de videojuego épico en 8-bit
 */

const epicGameTheme = [
  {
    tool: "generate_chord_progression",
    arguments: {
      key: "C",
      progression: "I-V-vi-IV",
      voicing: "triad"
    }
  },
  {
    tool: "create_8bit_melody", 
    arguments: {
      notes: ["G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"],
      durations: ["4n", "4n", "4n", "4n", "4n", "4n", "4n", "2n"],
      instrument: "pulse",
      bpm: 140
    }
  },
  {
    tool: "create_8bit_rhythm",
    arguments: {
      pattern: "techno",
      bpm: 140,
      bars: 16
    }
  }
];

console.log("Tema épico de videojuego 8-bit:");
epicGameTheme.forEach((step, index) => {
  console.log(`\nPaso ${index + 1}: ${step.tool}`);
});