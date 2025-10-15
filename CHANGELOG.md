# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-XX-XX

### Added
- Initial release of 8-Bits Music MCP Server
- MCP server with four main tools:
  - `create_8bit_melody` - Generate 8-bit melodies with specific notes and durations
  - `create_8bit_rhythm` - Create drum patterns with predefined rhythms
  - `generate_chord_progression` - Music theory-based chord progressions
  - `export_audio_composition` - Export compositions to WAV/MIDI formats
- Audio engine with five 8-bit instruments:
  - Square wave synthesizer
  - Triangle wave synthesizer  
  - Sawtooth wave synthesizer
  - Pulse wave synthesizer
  - Noise generator for percussion
- Comprehensive music theory support:
  - Multiple scale types (major, minor, pentatonic, blues)
  - Common chord progressions (I-IV-V-I, ii-V-I, I-V-vi-IV, etc.)
  - Rhythm patterns (basic_rock, techno, waltz)
- Real-time audio synthesis using Tone.js
- TypeScript implementation for type safety
- Workspace configuration with npm workspaces
- Integration tests and build scripts
- Examples for common use cases
- Support for multiple MCP clients:
  - Claude Desktop
  - Cursor IDE
  - VS Code with MCP extension

### Technical Features
- Built with TypeScript for enhanced developer experience
- Modular architecture separating MCP server from audio engine
- Comprehensive input validation with Zod schemas
- Professional project structure following best practices
- MIT license for open source usage

## [0.1.0] - 2024-XX-XX

### Added
- Initial project setup and foundation
- Basic MCP server structure
- Audio engine prototype
- Development tooling and configuration