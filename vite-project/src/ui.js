import {GUI} from "three/addons/libs/lil-gui.module.min.js";

export function setupUI(world) {
    
const gui = new GUI();

const style = document.createElement("style");
    style.textContent = `
    .lil-gui {
        background: rgba(0,0,0,0.15) !important;
        backdrop-filter: blur(10px);
    }

    .lil-gui .title,
    .lil-gui .controller,
    .lil-gui .children,
    .lil-gui input,
    .lil-gui button {
        background: transparent !important;
    }

    .lil-gui {
        right: 10px !important;
        left: auto !important;
        bottom: 10px !important;
        top: auto !important;
    }
    `;
    document.head.appendChild(style);


    gui.add(world.size,'width',8,128,1).name("Width");
    gui.add(world.size,'height',8,128,1).name("Height");
    const folder = gui.addFolder("Terrain");
    folder.add(world.params,'seed',0,1000).name("Seed");
    folder.add(world.params.terrain,'scale',1,100,1).name("Scale");
    folder.add(world.params.terrain,'minHeight',0,1,0.01).name("Min Height");
    folder.add(world.params.terrain,'offset',-1,1,0.01).name("Offset");
    gui.onChange(() => {
        world.generate();
    }); 

}
