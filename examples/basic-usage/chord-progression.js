const chordProgressionExample = {
  tool: "generate_chord_progression",
  arguments: {
    key: "C",
    progression: "I-V-vi-IV",
    voicing: "triad"
  }
};

console.log("Pop chord progression example:");
console.log(JSON.stringify(chordProgressionExample, null, 2));