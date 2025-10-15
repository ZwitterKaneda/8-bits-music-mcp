import { z } from 'zod';
import { Tool } from '../tool.js';
import { RhythmGenerator } from '@zwitterkaneda/8bits-music-audio-engine';

const rhythmInputSchema = z.object({
  pattern: z.enum(['basic_rock', 'techno', 'waltz', 'custom']).default('basic_rock'),
  bpm: z.number().min(60).max(200).default(120),
  bars: z.number().min(1).max(16).default(4),
});

export const createRhythmTool: Tool = {
  name: 'create_8bit_rhythm',
  description: 'Create an 8-bit rhythm pattern (drums) with specified pattern and BPM.',
  inputSchema: rhythmInputSchema,
  execute: async (args: z.infer<typeof rhythmInputSchema>) => {
    try {
      const result = await RhythmGenerator.generate({
        pattern: args.pattern,
        bpm: args.bpm,
        bars: args.bars,
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
          pattern: args.pattern,
          bpm: args.bpm,
          bars: args.bars,
          duration: result.duration,
          description: getPatternDescription(args.pattern)
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to create rhythm pattern',
        error: (error as Error).message,
      };
    }
  },
};

function getPatternDescription(pattern: string): string {
  const descriptions: Record<string, string> = {
    basic_rock: 'Kick on 1 and 3, snare on 2 and 4, hi-hat eighth notes',
    techno: 'Four-on-the-floor kick, snare on 2 and 4, closed hi-hat sixteenth notes',
    waltz: '3/4 time signature: Kick on 1, snare on 3'
  };
  return descriptions[pattern] || 'Custom rhythm pattern';
}