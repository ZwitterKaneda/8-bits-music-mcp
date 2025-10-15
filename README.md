# 🎵 8-Bit Music MCP Server

[![npm version](https://img.shields.io/npm/v/8-bits-music-mcp.svg)](https://www.npmjs.com/package/8-bits-music-mcp)
[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-blue.svg)](https://modelcontextprotocol.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Transform your AI assistant into a retro game music composer! This MCP server gives Claude, Cursor, and other AI tools the power to create authentic 8-bit chiptunes with professional audio output.

## 🚀 Quick Start (2 minutes)

### Step 1: Install Node.js

Make sure you have **Node.js 18 or higher** installed:
```bash
node --version
```

If you don't have it, download it from [nodejs.org](https://nodejs.org/)

### Step 2: Configure Your AI Assistant

Choose your preferred AI tool and follow the configuration:

#### 🤖 **Claude Desktop** (Most Popular)

1. Open Claude Desktop configuration file:
   - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
   - **Linux:** `~/.config/Claude/claude_desktop_config.json`

2. Add this configuration:
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

3. **Restart Claude Desktop**

4. Look for the 🔌 icon in Claude Desktop - you should see "8bits-music" connected!

#### 💻 **Cursor IDE**

1. Go to **Settings** → **Features** → **MCP Servers**
2. Click **Add MCP Server**
3. Enter:
   - **Name:** `8bits-music`
   - **Command:** `npx`
   - **Args:** `-y`, `8-bits-music-mcp`
4. Save and restart Cursor

#### 🔧 **VS Code with MCP Extension**

1. Install the [Model Context Protocol extension](https://marketplace.visualstudio.com/items?itemName=modelcontextprotocol.mcp)
2. Open settings (`Ctrl+,` or `Cmd+,`)
3. Search for "MCP Servers"
4. Add to `settings.json`:
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
5. Reload VS Code

### Step 3: Start Creating Music! 🎮

Open your AI assistant and try:

> *"Create a retro game theme song with a catchy melody at 140 BPM using a square wave"*

> *"Make an 8-bit boss battle theme with drums and export it as WAV"*

> *"Generate a calm exploration theme in C major with triangle waves"*

That's it! Your AI can now compose 8-bit music! 🎉

---

## 📋 Table of Contents

- [What Can It Do?](#-what-can-it-do)
- [Usage Examples](#-usage-examples)
- [Available Tools](#-available-tools)
- [Instruments & Sounds](#-instruments--sounds)
- [Music Theory Guide](#-music-theory-guide)
- [Troubleshooting](#-troubleshooting)
- [Advanced Configuration](#-advanced-configuration)
- [For Developers](#-for-developers)

## ✨ What Can It Do?

Your AI assistant can now:

| Capability | Description | Example |
|------------|-------------|---------|
| 🎹 **Create Melodies** | Compose custom note sequences with any instrument | "Make a happy melody in C major" |
| 🥁 **Generate Rhythms** | Add drum patterns and percussion | "Add techno drums at 130 BPM" |
| 🎶 **Chord Progressions** | Create harmonies based on music theory | "Generate a I-V-vi-IV progression" |
| 💾 **Export Audio** | Save compositions as WAV or MIDI files | "Export this as game-theme.wav" |
| 🎮 **Game Music Styles** | Create authentic retro game soundtracks | "Make a Super Mario style theme" |

## 🎵 Usage Examples

### Example 1: Your First 8-Bit Song

Just ask your AI assistant:

```
Create a simple 8-bit melody with these notes: C4, E4, G4, C5 
using quarter notes and a square wave at 120 BPM
```

The AI will use the MCP server to generate the music and give you a track ID!

### Example 2: Complete Game Theme

```
I need a retro platformer game theme:
1. Main melody with square wave
2. Bass line with triangle wave  
3. Techno drums
4. Export everything as "platformer-theme.wav"
```

The AI will:
- Create the melody using `create_8bit_melody`
- Add bass using another `create_8bit_melody` call
- Generate drums with `create_8bit_rhythm`
- Export the mix with `export_audio_composition`

### Example 3: Boss Battle Music

```
Create an intense boss battle theme:
- Fast tempo (160 BPM)
- Aggressive sawtooth lead
- Heavy drum pattern
- Dark chord progression
```

### Example 4: Interactive Composition

```
Start with a C major scale melody, then:
1. Add a I-V-vi-IV chord progression
2. Layer some drums
3. Show me the track details
4. Export as MIDI so I can edit it
```

The AI handles all the technical details - you just describe what you want!

## 🎮 Available Tools

The MCP server provides these tools to your AI assistant:

### 🎹 create_8bit_melody
Creates melodic sequences with authentic 8-bit sounds.

**AI can specify:**
- Musical notes (e.g., C4, E4, G4)
- Note durations (quarter, eighth, half notes)
- Instrument type (square, triangle, sawtooth, pulse, noise)
- Tempo (60-200 BPM)

### 🥁 create_8bit_rhythm
Generates drum and percussion patterns.

**Available patterns:**
- `basic_rock` - Classic rock beat
- `techno` - Electronic four-on-the-floor
- `waltz` - 3/4 time signature
- `custom` - AI-designed patterns

### 🎶 generate_chord_progression
Creates chord progressions based on music theory.

**Common progressions:**
- `I-V-vi-IV` - Pop/rock (C-G-Am-F)
- `I-IV-V-I` - Classic rock
- `ii-V-I` - Jazz standard
- `I-vi-IV-V` - 50s progression

### 💾 export_audio_composition
Exports your creation to audio files.

**Formats:**
- `WAV` - High quality audio
- `MIDI` - Editable in music software

## 🎹 Instruments & Sounds

| Instrument | Sound | Best For | Famous Games |
|------------|-------|----------|--------------|
| **Square Wave** | `□` Bright, punchy | Lead melodies, main themes | Super Mario Bros, Mega Man |
| **Triangle Wave** | `△` Smooth, mellow | Bass lines, gentle leads | The Legend of Zelda, Metroid |
| **Sawtooth Wave** | `⊿` Rich, aggressive | Power chords, intense leads | Castlevania |
| **Pulse Wave** | `▭` Thin, authentic NES | Arpeggios, harmonies | Final Fantasy |
| **Noise** | `⚡` Random, percussive | Drums, explosions, effects | All retro games |

### Sound Examples

**Square Wave:** The iconic "beep" sound - bright and clear
```
Perfect for: Main melodies, catchy hooks, Mario-style themes
```

**Triangle Wave:** Smooth and bass-heavy
```
Perfect for: Bass lines, underwater themes, atmospheric sounds
```

**Sawtooth Wave:** Rich in harmonics, powerful
```
Perfect for: Action themes, aggressive leads, rock-style music
```

## 🎼 Music Theory Guide

Don't worry if you're not a musician! Here's what the AI understands:

### Common Scales
- **Major Scale:** Happy, bright (Do-Re-Mi-Fa-Sol-La-Ti-Do)
- **Minor Scale:** Sad, dark, emotional
- **Pentatonic:** Simple, Asian-influenced, always sounds good
- **Blues Scale:** Soulful, expressive

### Popular Chord Progressions

**I-V-vi-IV** (Pop Magic)
```
Examples: "Don't Stop Believin'", "Let It Be"
Use for: Emotional, singalong themes
```

**I-IV-V** (Rock Classic)
```
Examples: "La Bamba", "Twist and Shout"  
Use for: Upbeat, energetic themes
```

**vi-IV-I-V** (Sad Progression)
```
Examples: "Grenade", "Apologize"
Use for: Melancholic, emotional scenes
```

### Tempo Guide
- **60-80 BPM:** Slow, atmospheric (menu music)
- **90-120 BPM:** Moderate (exploration themes)
- **130-160 BPM:** Fast (action levels)
- **160-200 BPM:** Very fast (boss battles)

## 🔧 Troubleshooting

### "MCP server not connecting"

**Windows:**
1. Open Command Prompt and run: `npx 8-bits-music-mcp`
2. If you see "8-Bits Music MCP Server running on stdio" - the server works!
3. Check your config file path: `%APPDATA%\Claude\claude_desktop_config.json`
4. Make sure you used **double backslashes** if using absolute paths
5. Restart Claude Desktop completely

**macOS/Linux:**
1. Test the server: `npx 8-bits-music-mcp`
2. Check config: `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
3. Verify Node.js version: `node --version` (needs 18+)

### "Package not found" error

```bash
# Clear npm cache
npm cache clean --force

# Try installing globally first
npm install -g 8-bits-music-mcp

# Then use in config
{
  "mcpServers": {
    "8bits-music": {
      "command": "8-bits-music-mcp"
    }
  }
}
```

### "Module not found" error

The package is updating. Wait a few minutes and try:
```bash
npx clear-npx-cache
npx 8-bits-music-mcp
```

### Server starts but AI can't use it

1. Check the 🔌 icon in Claude Desktop - is "8bits-music" listed?
2. Try asking: *"What MCP servers are available?"*
3. Restart your AI assistant completely
4. Check server logs in Claude Desktop settings

### Still having issues?

- 📖 [Check the full documentation](https://github.com/ZwitterKaneda/8-bits-music-mcp/issues)
- 🐛 [Report a bug](https://github.com/ZwitterKaneda/8-bits-music-mcp/issues/new)
- 💬 [Ask the community](https://github.com/ZwitterKaneda/8-bits-music-mcp/discussions)

## ⚙️ Advanced Configuration

### Using a Specific Version

```json
{
  "mcpServers": {
    "8bits-music": {
      "command": "npx",
      "args": ["8-bits-music-mcp@1.0.4"]
    }
  }
}
```

### Local Installation (Faster)

```bash
# Install globally
npm install -g 8-bits-music-mcp

# Use in config
{
  "mcpServers": {
    "8bits-music": {
      "command": "8-bits-music-mcp"
    }
  }
}
```

### Environment Variables

```json
{
  "mcpServers": {
    "8bits-music": {
      "command": "npx",
      "args": ["-y", "8-bits-music-mcp"],
      "env": {
        "NODE_ENV": "production",
        "OUTPUT_DIR": "/path/to/music/folder"
      }
    }
  }
}
```

## 👨‍💻 For Developers

### Want to contribute or customize?

```bash
# Clone the repository
git clone https://github.com/ZwitterKaneda/8-bits-music-mcp.git
cd 8-bits-music-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Test locally
node packages/mcp-server/dist/server.js
```

### Project Structure

```
8-bits-music-mcp/
├── packages/
│   ├── mcp-server/          # MCP protocol implementation
│   └── audio-engine/        # 8-bit audio synthesis
├── examples/                # Usage examples
└── docs/                    # Full documentation
```

### Tech Stack

- **MCP Server:** TypeScript, @modelcontextprotocol/sdk
- **Audio Engine:** Tone.js for Web Audio API synthesis
- **Build:** TypeScript with ES modules
- **Runtime:** Node.js 18+

### API Documentation

Full API docs available at: [API Reference](https://github.com/ZwitterKaneda/8-bits-music-mcp/blob/main/docs/API.md)

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📊 Stats

![npm downloads](https://img.shields.io/npm/dt/8-bits-music-mcp)
![GitHub stars](https://img.shields.io/github/stars/ZwitterKaneda/8-bits-music-mcp?style=social)
![GitHub issues](https://img.shields.io/github/issues/ZwitterKaneda/8-bits-music-mcp)

## 🗺️ Roadmap

### ✅ Version 1.x (Current)
- Basic melody generation
- Rhythm patterns
- Chord progressions
- WAV/MIDI export

### 🚧 Version 2.0 (Coming Soon)
- Real-time audio preview
- More instrument types
- Audio effects (reverb, delay, distortion)
- Pattern sequencer
- Visual waveform display

### 💭 Version 3.0 (Future)
- Multi-track mixing console
- VST plugin support
- Cloud rendering
- Collaborative composition
- Web-based editor

## ❓ FAQ

**Q: Do I need to install anything besides Node.js?**  
A: Nope! Just Node.js 18+ and the npx command (comes with Node.js).

**Q: Can I use this commercially?**  
A: Yes! MIT License allows commercial use.

**Q: Does it work on Linux/Mac/Windows?**  
A: Yes, all platforms with Node.js 18+ are supported.

**Q: Can I export to MP3?**  
A: Currently only WAV and MIDI. Use external tools like FFmpeg to convert WAV to MP3.

**Q: How do I make the AI create specific styles?**  
A: Just describe what you want! Try: "Create a Mega Man style boss theme" or "Make a Zelda dungeon atmosphere"

**Q: Can I edit the exported files?**  
A: Yes! Export as MIDI to edit in any DAW (Ableton, FL Studio, Logic, etc.)

**Q: Is internet required?**  
A: Only for the first install. After that, it works offline.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

**TL;DR:** Use it however you want, commercially or personally. No restrictions!

## 🙏 Acknowledgments

- **[Anthropic](https://anthropic.com)** - For creating the Model Context Protocol
- **[Tone.js](https://tonejs.github.io/)** - Amazing Web Audio framework
- **Koji Kondo** - Nintendo composer who defined 8-bit music
- **The Chiptune Community** - For keeping retro music alive

## 👨‍💻 Author

**Daniel Díaz** ([@ZwitterKaneda](https://github.com/ZwitterKaneda))

## 📞 Support

- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/ZwitterKaneda/8-bits-music-mcp/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/ZwitterKaneda/8-bits-music-mcp/discussions)
- ⭐ **Star this project** if you find it useful!

---

<div align="center">

## **Ready to create 8-bit magic? 🎮✨**

Add this to your AI assistant and start composing retro game music in seconds!

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

**[Get Started Now](#-quick-start-2-minutes)** • **[Report Bug](https://github.com/ZwitterKaneda/8-bits-music-mcp/issues)** • **[Request Feature](https://github.com/ZwitterKaneda/8-bits-music-mcp/issues)**

---

*Made with ❤️ and lots of ☕ by the 8-bits-music-mcp team*

**Happy chiptune composing! 🎵🎮**

</div>
