# Three.js Minecraft Terrain Generation

A Minecraft-inspired terrain generation project built with Three.js and Vite. The project uses a seeded random number generator to create deterministic procedural worlds.

## Features

- Procedural terrain generation
- Seeded world generation
- Three.js 3D rendering
- Vite development environment
- Deterministic random number generation

## Technologies

- JavaScript (ES Modules)
- Three.js
- Vite

## Installation

```bash
git clone https://github.com/sanudking/three.git
cd three
npm install
```

## Run

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Project Structure

```text
src/
├── main.js
├── world.js
├── rng.js
├── ui.js
└── style.css

public/
package.json
README.md
```

## World Generation

The project uses a seeded pseudo-random number generator (PRNG). The same seed always produces the same terrain, making world generation reproducible.

## Future Improvements

- Biomes
- Trees and vegetation
- Caves
- Chunk loading
- Player movement
- Save/load world seeds

## Author

Sudhanshu Kumar

## License

MIT