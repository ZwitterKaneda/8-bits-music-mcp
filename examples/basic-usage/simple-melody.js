const simpleMelodyExample = {
  tool: "create_8bit_melody",
  arguments: {
    notes: ["C4", "E4", "G4", "C5", "E5", "G5", "C6"],
    durations: ["4n", "4n", "4n", "4n", "4n", "4n", "2n"],
    instrument: "square",
    bpm: 120
  }
};

console.log("Simple melody example:");
console.log(JSON.stringify(simpleMelodyExample, null, 2));