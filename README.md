# 🎵 8-Bit Music MCP Server

[![npm version](https://img.shields.io/npm/v/8-bits-music-mcp.svg)](https://www.npmjs.com/package/8-bits-music-mcp)
[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-blue.svg)](https://modelcontextprotocol.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A powerful Model Context Protocol (MCP) server for generating authentic 8-bit music with real-time audio synthesis capabilities. Built for AI assistants like Claude to create retro-style music compositions with professional audio output.

## 📋 Table of Contents

- [✨ Features](#-features)
- [📦 Installation](#-installation)
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

## 📦 Installation

### Via npm

```bash
npm install -g 8-bits-music-mcp
```

### Via yarn

```bash
yarn global add 8-bits-music-mcp
```

### Via npx (no installation required)

```bash
npx 8-bits-music-mcp
```

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn**

## 🚀 Quick Start

### Option 1: Install from npm (Recommended)

```bash
# Install globally
npm install -g 8-bits-music-mcp

# Or install locally in your project
npm install 8-bits-music-mcp
```

### Option 2: Clone and Build from Source

```bash
# Clone the repository
git clone https://github.com/ZwitterKaneda/8-bits-music-mcp.git
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
notepad %APPDATA%\Claude\claude_desktop_config.json
```

**If installed via npm globally:**
```json
{
  "mcpServers": {
    "8bits-music": {
      "command": "npx",
      "args": ["-y", "8-bits-music-mcp"]
    }
  }
}
```

**If cloned from source:**
```json
{
  "mcpServers": {
    "8bits-music": {
      "command": "node",
      "args": ["C:\\full\\path\\to\\8bits-music-mcp\\packages\\mcp-server\\dist\\server.js"]
    }
  }
}
```

> **Note:** Replace `C:\\full\\path\\to` with your actual installation path. Use double backslashes (`\\`) on Windows.

After editing, restart Claude Desktop for changes to take effect.
</details>

### Cursor IDE

<details>
<summary>Click to expand configuration steps</summary>

1. Go to **Settings** → **MCP Servers**
2. Add new server:
   - **Name:** `8bits-music`
   - **Command:** `npx` (if installed via npm) or `node` (if from source)
   - **Args (npm):** `["-y", "8-bits-music-mcp"]`
   - **Args (source):** `["C:\\full\\path\\to\\8bits-music-mcp\\packages\\mcp-server\\dist\\server.js"]`
3. Save and restart Cursor
</details>

### VS Code with MCP Extension

<details>
<summary>Click to expand configuration steps</summary>

1. Install the "Model Context Protocol" extension from VS Code Marketplace
2. Open VS Code settings (`Ctrl+,` or `Cmd+,`)
3. Search for "MCP"
4. In settings.json, add:

**If installed via npm:**
```json
{
  "mcp.servers": {
    "8bits-music": {
      "command": "npx",
      "args": ["-y", "8-bits-music-mcp"]
    }
  }
}
```

**If cloned from source:**
```json
{
  "mcp.servers": {
    "8bits-music": {
      "command": "node",
      "args": ["C:\\full\\path\\to\\8bits-music-mcp\\packages\\mcp-server\\dist\\server.js"]
    }
  }
}
```
</details>

## 🎮 Available Tools

### 🎹 `create_8bit_melody`
Create 8-bit melodies with specific notes and durations.

**Parameters:**
- `notes` (string[]): Array of musical notes (e.g., ["C4", "E4", "G4"])
- `durations` (string[]): Note durations ("4n" = quarter, "8n" = eighth, etc.)
- `instrument` (string): Waveform type ("square", "triangle", "sawtooth", "pulse", "noise")
- `bpm` (number): Tempo in beats per minute (60-200)

**Example:**
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

**Parameters:**
- `pattern` (string): Rhythm pattern ("rock", "techno", "waltz", "custom")
- `bpm` (number): Tempo in beats per minute
- `bars` (number): Number of measures to generate

**Example:**
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

**Parameters:**
- `key` (string): Musical key (e.g., "C", "Am", "G#")
- `progression` (string): Chord progression (e.g., "I-V-vi-IV", "ii-V-I")
- `voicing` (string): Chord type ("triad", "seventh", "extended")

**Example:**
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

**Parameters:**
- `tracks` (string[]): Array of track IDs to export
- `format` (string): Output format ("wav", "midi")
- `outputPath` (string): File path for the exported audio

**Example:**
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

### Example 1: Simple Melody

Ask Claude:
> "Create a simple 8-bit melody in C major with a square wave at 120 BPM"

Claude will use the tools to generate something like:
```
Notes: C4, E4, G4, C5, G4, E4, C4
Durations: quarter notes
Instrument: Square wave
```

### Example 2: Complete Game Theme

Ask Claude:
> "Create a retro video game theme with a catchy melody and energetic drums at 160 BPM, then export it as WAV"

Claude will:
1. Generate a lead melody using `create_8bit_melody`
2. Add a rhythm section with `create_8bit_rhythm`
3. Export the composition with `export_audio_composition`

### Example 3: Chord Progression

Ask Claude:
> "Generate a I-V-vi-IV chord progression in the key of G major"

### Example 4: Full Composition Workflow

```javascript
// This is what happens behind the scenes when you ask Claude
// to create a complete 8-bit composition

const composition = [
  // Step 1: Create main melody
  {
    tool: "create_8bit_melody",
    arguments: {
      notes: ["C4", "D4", "E4", "G4", "E4", "D4", "C4", "A3"],
      durations: ["8n", "8n", "8n", "4n", "8n", "8n", "4n", "2n"],
      instrument: "square",
      bpm: 160
    }
  },
  // Step 2: Add bass line
  {
    tool: "create_8bit_melody",
    arguments: {
      notes: ["C2", "C2", "G2", "G2"],
      durations: ["4n", "4n", "4n", "4n"],
      instrument: "triangle",
      bpm: 160
    }
  },
  // Step 3: Add drums
  {
    tool: "create_8bit_rhythm",
    arguments: {
      pattern: "techno",
      bpm: 160,
      bars: 8
    }
  },
  // Step 4: Export final mix
  {
    tool: "export_audio_composition",
    arguments: {
      tracks: ["melody_123", "bass_124", "rhythm_125"],
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
│   │   ├── src/
│   │   │   ├── server.ts    # Main MCP server
│   │   │   ├── tools/       # Tool implementations
│   │   │   └── types/       # TypeScript definitions
│   │   └── dist/            # Compiled JavaScript
│   │
│   └── audio-engine/        # Audio synthesis engine
│       ├── src/
│       │   ├── synthesizer.ts
│       │   ├── instruments.ts
│       │   └── effects.ts
│       └── dist/
│
├── examples/                # Usage examples and templates
│   ├── basic-melody.js
│   ├── game-theme.js
│   └── full-composition.js
│
├── docs/                    # Documentation
│   ├── API.md
│   ├── TOOLS.md
│   └── EXAMPLES.md
│
├── package.json             # Root package configuration
├── tsconfig.json            # TypeScript configuration
├── README.md                # This file
└── LICENSE                  # MIT License
```

### Technical Stack

- **MCP Server:** TypeScript, @modelcontextprotocol/sdk
- **Audio Engine:** Tone.js for Web Audio API synthesis
- **Build System:** TypeScript compiler with ESM support
- **Package Management:** npm workspaces for monorepo structure
- **Runtime:** Node.js 18+ with ES modules

### How It Works

1. **MCP Server:** Exposes tools that AI assistants can call
2. **Audio Engine:** Processes musical data and generates audio
3. **Tone.js:** Handles real-time synthesis using Web Audio API
4. **Export Module:** Converts audio to WAV/MIDI formats

## 🎹 Instruments & Sounds

| Instrument | Description | Waveform | Best Use | Example Games |
|------------|-------------|----------|----------|---------------|
| **Square** | Classic 8-bit square wave | `□` | Lead melodies, arpeggios | Super Mario Bros, Mega Man |
| **Triangle** | Smooth triangle wave | `△` | Bass lines, soft leads | Zelda, Metroid |
| **Sawtooth** | Bright sawtooth wave | `⊿` | Rich chords, aggressive leads | Castlevania |
| **Pulse** | Variable pulse width | `▭` | Authentic NES-style sounds | Final Fantasy |
| **Noise** | White/Pink noise | `⚡` | Drums, percussion, effects | All retro games |

### Instrument Characteristics

**Square Wave:**
- Bright and punchy
- 50% duty cycle
- Perfect for main melodies
- Classic NES sound

**Triangle Wave:**
- Smooth and mellow
- Great for bass
- Softer than square
- Used in many bass lines

**Sawtooth Wave:**
- Rich in harmonics
- Aggressive sound
- Good for chords
- Modern chiptune favorite

**Pulse Wave:**
- Variable width (10-90%)
- Thinner sound
- Authentic to NES
- Great for variety

**Noise:**
- Random waveform
- Percussion sounds
- Hi-hats and cymbals
- Sound effects

## 🎼 Music Theory Support

### Scales
- **Major:** Bright, happy sound
- **Minor:** Dark, melancholic sound
- **Pentatonic:** Simple, Asian-influenced
- **Blues:** Soulful, expressive
- **Chromatic:** All 12 notes

### Chord Progressions

| Progression | Description | Mood | Example Songs |
|-------------|-------------|------|---------------|
| **I-IV-V-I** | Classic rock | Uplifting | Twist and Shout |
| **I-V-vi-IV** | Pop progression | Emotional | Don't Stop Believin' |
| **ii-V-I** | Jazz standard | Sophisticated | Autumn Leaves |
| **I-vi-IV-V** | 50s progression | Nostalgic | Stand By Me |
| **i-VI-III-VII** | Minor epic | Epic | Andalusian cadence |

### Rhythm Patterns

**Basic Rock (4/4):**
```
Kick:  X---X---X---X---
Snare: ----X-------X---
HiHat: X-X-X-X-X-X-X-X-
```

**Techno (4/4):**
```
Kick:  X---X---X---X---
Snare: ----X-------X---
HiHat: X-X-X-X-X-X-X-X-
Clap:  ----X-------X---
```

**Waltz (3/4):**
```
Kick:  X-----X-----X---
Snare: --X-----X-----X-
```

### Tempo Guidelines

- **Slow (60-80 BPM):** Ballads, atmospheric
- **Moderate (80-120 BPM):** Most game themes
- **Fast (120-160 BPM):** Action, battle themes
- **Very Fast (160-200 BPM):** Boss fights, intense scenes

## 🔧 Development

### Building from Source

```bash
# Clone and setup
git clone https://github.com/ZwitterKaneda/8-bits-music-mcp.git
cd 8bits-music-mcp

# Install dependencies for all workspaces
npm install

# Build all packages
npm run build

# Or build individually
npm run build --workspace=packages/audio-engine
npm run build --workspace=packages/mcp-server
```

### Running Tests

```bash
# Test audio engine
npm run test --workspace=packages/audio-engine

# Integration tests
npm run test:integration --workspace=packages/mcp-server

# Test all
npm test
```

### Development Mode

```bash
# Start development server with hot reload
npm run dev

# Watch mode for audio engine
npm run dev --workspace=packages/audio-engine

# Watch mode for MCP server
npm run dev --workspace=packages/mcp-server
```

### Project Structure

```typescript
// Example: Creating a custom tool

import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const myCustomTool: Tool = {
  name: 'my_custom_tool',
  description: 'Does something cool with 8-bit audio',
  inputSchema: {
    type: 'object',
    properties: {
      param1: { type: 'string' },
      param2: { type: 'number' }
    },
    required: ['param1']
  }
};
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues, feature requests, and pull requests.

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/YourUsername/8-bits-music-mcp.git
   ```

2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, documented code
   - Add tests for new features
   - Update documentation as needed

4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Link any related issues
   - Wait for review

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add JSDoc comments for public APIs
- Ensure tests pass before submitting
- Update README if adding features

### Ideas for Contributions

- 🎵 New instrument types
- 🎼 Additional chord progressions
- 🥁 More rhythm patterns
- 🎨 Better audio effects
- 📚 More usage examples
- 🐛 Bug fixes
- 📖 Documentation improvements

## 🐛 Troubleshooting

### Common Issues

**Issue: "Module not found" error**
```bash
# Solution: Rebuild the project
npm run build
```

**Issue: Audio not playing**
```bash
# Solution: Check audio output settings
# Ensure speakers/headphones are connected
# Try a different audio backend if on Linux
```

**Issue: Permission denied on Windows**
```bash
# Solution: Run terminal as Administrator
# Or adjust execution policies
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Issue: Claude Desktop not detecting the server**
```bash
# Solution: 
# 1. Check the config file path is correct
# 2. Use absolute paths with double backslashes on Windows
# 3. Restart Claude Desktop after config changes
# 4. Check the MCP server logs
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ⚠️ No warranty provided
- ⚠️ Liability limited

## 🙏 Acknowledgments

- **[Tone.js](https://tonejs.github.io/)** - Web Audio framework for interactive music
- **[Model Context Protocol](https://modelcontextprotocol.io/)** - Standard for AI tool integration
- **8-bit Music Community** - Inspiration from classic video game composers
- **Koji Kondo** - Nintendo composer who defined 8-bit music
- **Grant Kirkhope** - Rare composer (Banjo-Kazooie, GoldenEye)
- **Yuzo Koshiro** - Sega composer (Streets of Rage)

## 🌟 Showcase

Projects using 8-Bit Music MCP:
- Game developers creating retro soundtracks
- Music producers exploring chiptune
- AI assistants composing game music
- Educational tools for music theory

**Want to showcase your project?** Open an issue or PR!

## 📚 Resources

- **[Official Documentation](https://github.com/ZwitterKaneda/8-bits-music-mcp/wiki)**
- **[API Reference](https://github.com/ZwitterKaneda/8-bits-music-mcp/blob/main/docs/API.md)**
- **[Examples](https://github.com/ZwitterKaneda/8-bits-music-mcp/tree/main/examples)**
- **[MCP Documentation](https://modelcontextprotocol.io/docs)**
- **[Tone.js Docs](https://tonejs.github.io/docs/)**

## 👨‍💻 Author

**Daniel Díaz** ([@ZwitterKaneda](https://github.com/ZwitterKaneda))

- 🐦 Twitter: [@ZwitterKaneda](https://twitter.com/ZwitterKaneda)
- 🌐 Website: [Your website]
- 📧 Email: [Your email]

## 📞 Support

- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/ZwitterKaneda/8-bits-music-mcp/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/ZwitterKaneda/8-bits-music-mcp/discussions)
- 💬 **Community Chat:** [Discord](https://discord.gg/your-invite)
- 📚 **Documentation:** Check the [/examples](examples/) folder for detailed usage examples
- ⭐ **Star this repo** if you find it useful!

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/ZwitterKaneda/8-bits-music-mcp?style=social)
![GitHub forks](https://img.shields.io/github/forks/ZwitterKaneda/8-bits-music-mcp?style=social)
![GitHub issues](https://img.shields.io/github/issues/ZwitterKaneda/8-bits-music-mcp)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ZwitterKaneda/8-bits-music-mcp)
![npm downloads](https://img.shields.io/npm/dt/8-bits-music-mcp)

## 🗺️ Roadmap

### Version 1.x (Current)
- [x] Basic melody generation
- [x] Rhythm patterns
- [x] Chord progressions
- [x] WAV export
- [x] MIDI export

### Version 2.0 (Planned)
- [ ] Real-time MIDI input
- [ ] More instrument types
- [ ] Audio effects (reverb, delay)
- [ ] Pattern sequencer
- [ ] Visual waveform editor

### Version 3.0 (Future)
- [ ] Multi-track mixing
- [ ] Advanced synthesis
- [ ] Plugin system
- [ ] Web interface
- [ ] Cloud rendering

## ❓ FAQ

**Q: Does this work on Linux?**  
A: Yes! Node.js 18+ required. May need ALSA libraries.

**Q: Can I use this commercially?**  
A: Yes! MIT License allows commercial use.

**Q: Does it support VST plugins?**  
A: Not yet, but it's on the roadmap.

**Q: Can I export to MP3?**  
A: Currently WAV and MIDI only. Use external tools to convert.

**Q: How do I contribute?**  
A: Check the [Contributing](#-contributing) section above!

---

<div align="center">

## **Ready to create some 8-bit magic? 🎮✨**

Start by installing the package and configuring your MCP client!

```bash
npm install -g 8-bits-music-mcp
```

*"The perfect tool for game developers, musicians, and AI enthusiasts who love the classic sound of 8-bit music."*

**[⭐ Star this repo](https://github.com/ZwitterKaneda/8-bits-music-mcp)** • **[🐛 Report Bug](https://github.com/ZwitterKaneda/8-bits-music-mcp/issues)** • **[💡 Request Feature](https://github.com/ZwitterKaneda/8-bits-music-mcp/issues)**

</div>

---

<div align="center">
  
Made with ❤️ and lots of ☕ by Daniel Díaz

**Happy chiptune composing! 🎵🎮**

</div>
