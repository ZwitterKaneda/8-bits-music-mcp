/**
 * Ejemplo: Crear un patrón de batería 8-bit
 */

const drumBeatExample = {
  tool: "create_8bit_rhythm",
  arguments: {
    pattern: "techno",
    bpm: 130,
    bars: 4
  }
};

console.log("Ejemplo de ritmo techno:");
console.log(JSON.stringify(drumBeatExample, null, 2));