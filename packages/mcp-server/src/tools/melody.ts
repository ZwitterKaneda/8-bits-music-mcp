import { z } from 'zod';
import { Tool } from '../tool.js';
import { MelodyGenerator } from '@zwitterkaneda/8bits-music-audio-engine';

const melodyInputSchema = z.object({
  notes: z.array(z.string()).min(1).max(32),
  durations: z.array(z.enum(['16n', '8n', '4n', '2n', '1n'])).min(1).max(32),
  instrument: z.enum(['square', 'triangle', 'sawtooth', 'pulse', 'noise']).default('square'),
  bpm: z.number().min(60).max(200).default(120),
});

export const createMelodyTool: Tool = {
  name: 'create_8bit_melody',
  description: 'Create an 8-bit melody pattern with specified notes, durations, and instrument.',
  inputSchema: melodyInputSchema,
  execute: async (args: z.infer<typeof melodyInputSchema>) => {
    try {
      if (args.notes.length !== args.durations.length) {
        return {
          success: false,
          message: 'Number of notes must match number of durations',
          error: `Got ${args.notes.length} notes but ${args.durations.length} durations`
        };
      }

      const result = await MelodyGenerator.generate({
        notes: args.notes,
        durations: args.durations,
        instrument: args.instrument,
        bpm: args.bpm,
      });

      if (!result.success) {
        return {
          success: false,
          message: result.message,
          error: result.error
        };
      }

      return {
        success: true,
        message: result.message,
        data: {
          trackId: result.trackId,
          notes: args.notes,
          durations: args.durations,
          instrument: args.instrument,
          bpm: args.bpm,
          duration: result.duration,
          estimatedDuration: `${args.durations.length * (60 / args.bpm) * 4}s`
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to create melody',
        error: (error as Error).message,
      };
    }
  },
};