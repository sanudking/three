import {GUI} from "three/addons/libs/lil-gui.module.min.js";

export function setupUI(world) {
    
    const gui = new GUI();

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
