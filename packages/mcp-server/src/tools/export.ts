import { z } from 'zod';
import { Tool } from '../tool.js';
import { WAVExporter, MIDIExporter } from '@zwitterkaneda/8bits-music-audio-engine';

const exportInputSchema = z.object({
  tracks: z.array(z.string()).min(1).max(10),
  format: z.enum(['wav', 'midi']).default('wav'),
  outputPath: z.string().default('./output.wav'),
});

export const exportAudioTool: Tool = {
  name: 'export_audio_composition',
  description: 'Export a composition to WAV or MIDI file by combining tracks.',
  inputSchema: exportInputSchema,
  execute: async (args: z.infer<typeof exportInputSchema>) => {
    try {
      let result;
      
      if (args.format === 'wav') {
        result = await WAVExporter.export(args.tracks, args.outputPath);
      } else {
        result = await MIDIExporter.export(args.tracks, args.outputPath);
      }

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
          exportId: `export_${Date.now()}`,
          outputPath: args.outputPath,
          format: args.format,
          tracks: args.tracks,
          fileSize: result.fileSize
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to export composition',
        error: (error as Error).message,
      };
    }
  },
};