# 8-bit Music MCP Server

Model Context Protocol server for generating 8-bit style music compositions.

## Overview

This MCP server provides tools for AI assistants to generate retro-style music including melodies, rhythms, and chord progressions. Built for integration with Claude and other MCP-compatible AI systems.

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

## Available Tools

### `generate_melody`
Generate 8-bit style melodies with customizable parameters.

**Parameters:**
- `notes` - Array of musical notes (e.g., ['C4', 'E4', 'G4'])
- `durations` - Note durations (['4n', '8n', '2n', etc.])
- `instrument` - Synth type ('square', 'triangle', 'sawtooth', 'pulse', 'noise')
- `bpm` - Beats per minute (60-200)

### `generate_rhythm`
Create drum patterns and rhythmic sequences.

**Parameters:**
- `pattern` - Rhythm style ('basic_rock', 'techno', 'waltz')
- `bpm` - Beats per minute (60-200)
- `bars` - Number of bars (1-16)

### `generate_chords`
Generate chord progressions in various keys.

**Parameters:**
- `key` - Musical key (e.g., 'C', 'F#', 'Bb')
- `progression` - Chord sequence ('I-IV-V-I', 'ii-V-I', etc.)
- `voicing` - Chord voicing ('triad', 'seventh')

### `export_audio`
Export generated music to MIDI or WAV format.

**Parameters:**
- `trackId` - ID of the generated track
- `format` - Export format ('midi', 'wav')
- `filename` - Output filename

## Development

```bash
npm run build  # Compile TypeScript
npm run dev    # Development mode
```

## MCP Configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "8bits-music": {
      "command": "node",
      "args": ["dist/server.js"]
    }
  }
}
```

## License

MIT