import { z } from 'zod';
import { Tool } from '../tool.js';
import { ChordGenerator } from '@zwitterkaneda/8bits-music-audio-engine';

const chordsInputSchema = z.object({
  key: z.string().default('C'),
  progression: z.enum(['I-IV-V-I', 'ii-V-I', 'I-vi-ii-V', 'vi-IV-I-V', 'I-V-vi-IV']).default('I-IV-V-I'),
  voicing: z.enum(['triad', 'seventh', 'power']).default('triad'),
});

export const createChordProgressionTool: Tool = {
  name: 'generate_chord_progression',
  description: 'Generate an 8-bit chord progression based on music theory.',
  inputSchema: chordsInputSchema,
  execute: async (args: z.infer<typeof chordsInputSchema>) => {
    try {
      const result = await ChordGenerator.generate({
        key: args.key,
        progression: args.progression,
        voicing: args.voicing,
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
          key: args.key,
          progression: args.progression,
          voicing: args.voicing,
          chords: result.data?.chords,
          duration: result.duration
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to create chord progression',
        error: (error as Error).message,
      };
    }
  },
};