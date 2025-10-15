import { InstrumentType, InstrumentConfig } from '../types.js';
import { SquareSynth } from './SquareSynth.js';
import { TriangleSynth } from './TriangleSynth.js';
import { SawtoothSynth } from './SawtoothSynth.js';
import { PulseSynth } from './PulseSynth.js';
import { NoiseSynth } from './NoiseSynth.js';
import { BaseInstrument } from './BaseInstrument.js';

export function createInstrument(config: InstrumentConfig): BaseInstrument {
  switch (config.type) {
    case 'square':
      return new SquareSynth(config);
    case 'triangle':
      return new TriangleSynth(config);
    case 'sawtooth':
      return new SawtoothSynth(config);
    case 'pulse':
      return new PulseSynth(config);
    case 'noise':
      return new NoiseSynth(config);
    default:
      return new SquareSynth(config);
  }
}