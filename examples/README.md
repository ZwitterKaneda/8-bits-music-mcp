# Usage Examples - 8-Bit Music MCP

This folder contains practical examples of how to use the 8-bit music MCP server.

## 📁 Structure

### `/basic-usage/`
Simple examples of each individual tool:
- `simple-melody.js` - Basic melody
- `drum-beat.js` - Rhythmic pattern
- `chord-progression.js` - Chord progression

### `/client-configs/`
Configurations for different MCP clients:
- `claude-desktop.json` - Claude Desktop
- `cursor-ide.json` - Cursor IDE
- `vs-code.json` - VS Code with MCP extension

### `/compositions/`
Complete compositions that combine multiple tools:
- `classic-8bit.js` - Classic style (Mario Bros)
- `game-theme.js` - Epic video game theme
- `chiptune-demo.js` - Complete demonstration

## 🎹 How to Use the Examples

1. **Configure the MCP client** using one of the files in `/client-configs/`
2. **Copy the absolute path** to your MCP server
3. **Use the examples** as reference to create your own compositions

## 🎵 Quick Example

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