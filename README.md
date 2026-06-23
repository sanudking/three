# Three.js Minecraft Terrain Generation

A Minecraft-inspired terrain generation project built with Three.js and Vite. This project demonstrates procedural voxel terrain generation using a seeded random number generator, allowing the same world to be recreated from the same seed.

## Live Demo

https://three-qaq1.vercel.app/

## Demo Video

[![Watch the demo video](./Screenshot%202026-06-23%20at%202.12.40%E2%80%AFPM.png)](./Screen%20Recording%202026-06-23%20at%202.12.47%E2%80%AFPM.mov)

## Screenshot

![Project Screenshot](./Screenshot%202026-06-23%20at%202.12.40%E2%80%AFPM.png)

## Features

- Procedural terrain generation
- Seeded world generation
- Deterministic random number generation
- Interactive terrain controls with lil-gui
- Three.js 3D rendering
- Fast Vite development environment

## Technologies

- JavaScript (ES Modules)
- Three.js
- Vite
- lil-gui

## Installation

```bash
git clone https://github.com/sanudking/three.git
cd three
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── main.js      # Scene setup and rendering
├── world.js     # Terrain generation
├── rng.js       # Seeded random number generator
├── ui.js        # GUI controls
└── style.css    # Styling

public/
package.json
README.md
```

## World Generation

The terrain is generated using a seeded pseudo-random number generator (PRNG). Using the same seed always produces the same terrain, making world generation reproducible.

Current configurable parameters include:

- Width
- Height
- Scale
- Seed
- Minimum Height
- Height Offset

## Controls

Use the GUI panel to modify terrain parameters and regenerate the world in real time.

## Future Improvements

- Biomes
- Trees and vegetation
- Cave generation
- Chunk loading
- Infinite terrain generation
- Player movement
- Collision detection
- Save/load world seeds
- Day/night cycle

## Author

**Sudhanshu Kumar**

GitHub: https://github.com/sanudking

## License

MIT License