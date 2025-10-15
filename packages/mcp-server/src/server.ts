#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import {
  createRhythmTool,
  createChordProgressionTool,
  exportAudioTool,
} from './tools/index.js';
import { createMelodyTool } from './tools/melody.js';

// Create MCP Server
const server = new Server(
  {
    name: '8-bits-music-mcp',
    version: '1.0.2',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Register list tools handler
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: createMelodyTool.name,
        description: createMelodyTool.description,
        inputSchema: {
          type: 'object',
          properties: {
            notes: {
              type: 'array',
              items: { type: 'string' },
              minItems: 1,
              maxItems: 32,
              description: 'Array of musical notes (e.g., ["C4", "E4", "G4"])'
            },
            durations: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['16n', '8n', '4n', '2n', '1n']
              },
              minItems: 1,
              maxItems: 32,
              description: 'Array of note durations'
            },
            instrument: {
              type: 'string',
              enum: ['square', 'triangle', 'sawtooth', 'pulse', 'noise'],
              default: 'square',
              description: 'Waveform type'
            },
            bpm: {
              type: 'number',
              minimum: 60,
              maximum: 200,
              default: 120,
              description: 'Tempo in beats per minute'
            }
          },
          required: ['notes', 'durations']
        }
      },
      {
        name: createRhythmTool.name,
        description: createRhythmTool.description,
        inputSchema: {
          type: 'object',
          properties: {
            pattern: {
              type: 'string',
              enum: ['basic_rock', 'techno', 'waltz', 'custom'],
              default: 'basic_rock',
              description: 'Rhythm pattern type'
            },
            bpm: {
              type: 'number',
              minimum: 60,
              maximum: 200,
              default: 120,
              description: 'Tempo in beats per minute'
            },
            bars: {
              type: 'number',
              minimum: 1,
              maximum: 16,
              default: 4,
              description: 'Number of measures'
            }
          },
          required: ['pattern', 'bpm', 'bars']
        }
      },
      {
        name: createChordProgressionTool.name,
        description: createChordProgressionTool.description,
        inputSchema: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description: 'Musical key (e.g., "C", "Am", "G#")'
            },
            progression: {
              type: 'string',
              description: 'Chord progression (e.g., "I-V-vi-IV")'
            },
            voicing: {
              type: 'string',
              enum: ['triad', 'seventh', 'extended'],
              description: 'Chord voicing type'
            }
          },
          required: ['key', 'progression', 'voicing']
        }
      },
      {
        name: exportAudioTool.name,
        description: exportAudioTool.description,
        inputSchema: {
          type: 'object',
          properties: {
            tracks: {
              type: 'array',
              items: { type: 'string' },
              description: 'Array of track IDs to export'
            },
            format: {
              type: 'string',
              enum: ['wav', 'midi'],
              description: 'Output format'
            },
            outputPath: {
              type: 'string',
              description: 'File path for exported audio'
            }
          },
          required: ['tracks', 'format', 'outputPath']
        }
      }
    ],
  };
});

// Register call tool handler
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    let result;
    switch (name) {
      case 'create_8bit_melody':
        result = await createMelodyTool.execute(args);
        break;
      case 'create_8bit_rhythm':
        result = await createRhythmTool.execute(args);
        break;
      case 'generate_chord_progression':
        result = await createChordProgressionTool.execute(args);
        break;
      case 'export_audio_composition':
        result = await exportAudioTool.execute(args);
        break;
      default:
        throw new Error(`Unknown tool: ${name}`);
    }

    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Error: ${(error as Error).message}`
      }],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('8-Bits Music MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
