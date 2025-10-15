# 🎵 8-Bit Music MCP Server

[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-blue.svg)](https://modelcontextprotocol.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A powerful Model Context Protocol (MCP) server for generating authentic 8-bit music with real-time audio synthesis capabilities. Built for AI assistants like Claude to create retro-style music compositions with professional audio output.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🔌 Client Configuration](#-client-configuration)
- [🎮 Available Tools](#-available-tools)
- [🎵 Usage Examples](#-usage-examples)
- [🏗️ Architecture](#️-architecture)
- [🎹 Instruments & Sounds](#-instruments--sounds)
- [🎼 Music Theory Support](#-music-theory-support)
- [🔧 Development](#-development)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎹 **Authentic 8-bit Synthesis** | Generate retro sounds with classic waveforms (square, triangle, sawtooth, pulse, noise) |
| 🎼 **Intelligent Composition** | Create melodies, rhythms, and chord progressions based on music theory |
| 🔧 **MCP Integration** | Works with Claude Desktop, Cursor, VS Code, and any MCP-compatible client |
| 📁 **Multi-format Export** | Export to WAV and MIDI formats |
| 🎮 **Professional Templates** | Predefined patterns that always sound great |
| ⚡ **Real-time Generation** | Instant audio generation and playback |

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn**

### MCP Server Installation

```bash
# Clone the repository
git clone https://github.com/ZwitterKaneda/8bits-music-mcp.git
cd 8bits-music-mcp

# Install dependencies
npm install

# Build the project
npm run build
```
## 🔌 Client Configuration

### Claude Desktop

<details>
<summary>Click to expand configuration steps</summary>

Edit Claude Desktop configuration file:

**macOS:**
```bash
nano ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

**Windows:**
```bash
nano %APPDATA%/Claude/claude_desktop_config.json
```

Add server configuration:
```json
{
  "mcpServers": {
    "8bits-music": {
      "command": "node",
      "args": ["/full/path/to/8bits-music-mcp/packages/mcp-server/dist/server.js"]
    }
  }
}
```
</details>

### Cursor IDE

<details>
<summary>Click to expand configuration steps</summary>

1. Go to **Settings** → **MCP Servers**
2. Add new server:
   - **Name:** `8bits-music`
   - **Command:** `node`
   - **Args:** `["/full/path/to/8bits-music-mcp/packages/mcp-server/dist/server.js"]`
</details>

### VS Code with MCP Extension

<details>
<summary>Click to expand configuration steps</summary>

1. Install the "Model Context Protocol" extension
2. In settings, add:
```json
{
  "mcp.servers": {
    "8bits-music": {
      "command": "node",
      "args": ["/full/path/to/8bits-music-mcp/packages/mcp-server/dist/server.js"]
    }
  }
}
```
</details>
## 🎮 Available Tools

### 🎹 `create_8bit_melody`
Create 8-bit melodies with specific notes and durations.

```json
{
  "tool": "create_8bit_melody",
  "arguments": {
    "notes": ["C4", "E4", "G4", "C5"],
    "durations": ["4n", "4n", "4n", "2n"],
    "instrument": "square",
    "bpm": 120
  }
}
```

### 🥁 `create_8bit_rhythm`
Generate drum rhythm patterns.

```json
{
  "tool": "create_8bit_rhythm", 
  "arguments": {
    "pattern": "techno",
    "bpm": 130,
    "bars": 4
  }
}
```

### 🎶 `generate_chord_progression`
Create chord progressions based on music theory.

```json
{
  "tool": "generate_chord_progression",
  "arguments": {
    "key": "C",
    "progression": "I-V-vi-IV",
    "voicing": "triad"
  }
}
```

### 💾 `export_audio_composition`
Export compositions to audio files.

```json
{
  "tool": "export_audio_composition",
  "arguments": {
    "tracks": ["melody_123", "rhythm_456"],
    "format": "wav",
    "outputPath": "./my-composition.wav"
  }
}
```
## 🎵 Usage Examples

### Create a Classic Video Game Theme

```bash
# The LLM can use sequences like this:
1. create_8bit_melody - Main melody
2. create_8bit_rhythm - Background rhythm  
3. export_audio_composition - Export to WAV
```

### Complete Chiptune Composition

```javascript
// Example workflow
const composition = [
  {
    tool: "create_8bit_melody",
    arguments: {
      notes: ["C4", "D4", "E4", "G4", "E4", "D4", "C4", "A3"],
      durations: ["8n", "8n", "8n", "4n", "8n", "8n", "4n", "2n"],
      instrument: "square",
      bpm: 160
    }
  },
  {
    tool: "create_8bit_rhythm",
    arguments: {
      pattern: "techno",
      bpm: 160,
      bars: 8
    }
  },
  {
    tool: "export_audio_composition",
    arguments: {
      tracks: ["melody_123", "rhythm_456"],
      format: "wav",
      outputPath: "./game-theme.wav"
    }
  }
];
```
## 🏗️ Architecture

```
8bits-music-mcp/
├── packages/
│   ├── mcp-server/          # MCP server with tools
│   └── audio-engine/        # Audio synthesis engine
├── examples/                # Usage examples and templates
└── docs/                   # Documentation
```

### Technical Stack

- **MCP Server:** TypeScript, @modelcontextprotocol/sdk
- **Audio Engine:** Tone.js for Web Audio API synthesis
- **Build System:** TypeScript compiler
- **Package Management:** npm workspaces

## 🎹 Instruments & Sounds

| Instrument | Description | Best Use |
|------------|-------------|----------|
| **Square** | Classic 8-bit square wave | Lead melodies, arpeggios |
| **Triangle** | Smooth triangle wave | Bass lines, soft leads |
| **Sawtooth** | Bright sawtooth wave | Rich chords, aggressive leads |
| **Pulse** | Variable pulse width | Authentic NES-style sounds |
| **Noise** | White/Pink noise | Drums, percussion, effects |

## 🎼 Music Theory Support

- **Scales:** Major, Minor, Pentatonic, Blues
- **Chord Progressions:** I-IV-V-I, ii-V-I, I-V-vi-IV, and more
- **Rhythm Patterns:** Basic Rock, Techno, Waltz, Custom
- **Tempo Range:** 60-200 BPM

## 🔧 Development

### Building from Source

```bash
# Clone and setup
git clone https://github.com/ZwitterKaneda/8bits-music-mcp.git
cd 8bits-music-mcp

# Install dependencies
npm install

# Build all packages
npm run build

# Start development server
npm run dev
```

### Running Tests

```bash
# Test audio engine
npm run test --workspace=packages/audio-engine

# Integration tests
npm run test:integration --workspace=packages/mcp-server
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues, feature requests, and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Tone.js](https://tonejs.github.io/)** - Web Audio framework for interactive music
- **[Model Context Protocol](https://modelcontextprotocol.io/)** - Standard for AI tool integration
- **8-bit Music Community** - Inspiration from classic video game composers

## 👨‍💻 Author

**Daniel Díaz** ([@ZwitterKaneda](https://github.com/ZwitterKaneda))

## 📞 Support

- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/ZwitterKaneda/8bits-music-mcp/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/ZwitterKaneda/8bits-music-mcp/discussions)
- 📚 **Documentation:** Check the [/examples](examples/) folder for detailed usage examples

---

<div align="center">

**Ready to create some 8-bit magic? 🎮✨**

Start by configuring your MCP client and let the retro compositions begin!

*"The perfect tool for game developers, musicians, and AI enthusiasts who love the classic sound of 8-bit music."*

</div>