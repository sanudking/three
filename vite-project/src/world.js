import * as THREE from 'three';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
import { RNG } from './rng';

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0x0aff00 });

export class World extends THREE.Group{
    /** @type {{ id: number; instanceId: number }[][][]} */
    data=[];

    params = {
        seed:0,
        terrain:{
            scale :30,
            minHeight: 0.5,
            offset:0.2
        }
    }





    constructor(size={width:64,height:32}){
        super();
        this.size = size;
    }

    generate() {
        this.initializeTerrain();
        this.generateTerrain();
        this.generateMeshes();
    }

    generateTerrain() {
        const rng = new RNG(this.params.seed);
        const simplex = new SimplexNoise(rng);
        for (let x = 0; x < this.size.width; x++) {
            for (let z = 0; z < this.size.width; z++) {


                const value = simplex.noise(x / this.params.terrain.scale, z / this.params.terrain.scale);
                const scaledNoise =this.params.terrain.offset + value * this.params.terrain.minHeight;
                let height = Math.floor(scaledNoise * this.size.height);
                height = Math.max(0, Math.min(this.size.height - 1, height)); // Clamp height between 0 and size.height-1
                for (let y = 0; y <= height; y++) {
                    this.setBlockId(x, y, z, 1);
                }
            }
        }
    }




    initializeTerrain() {
        this.data = [];
        for (let x = 0; x < this.size.width; x++) {
            const slice = [];
            for (let y = 0; y < this.size.height; y++) {
                const row = [];
                for (let z = 0; z < this.size.width; z++) {
                    row.push({ id: 0
                        , instanceId: null });
                }
                slice.push(row);
            }
            this.data.push(slice);
        }

    }
    

    generateMeshes() {
    this.clear(); // Clear any existing children before generating new ones
    const count =
        this.size.width *
        this.size.width *
        this.size.height;

    const instancedMesh = new THREE.InstancedMesh(geometry,material,count);

    instancedMesh.count = 0;

    const matrix = new THREE.Matrix4();

    for (let x = 0; x < this.size.width; x++) {
        for (let y = 0; y < this.size.height; y++) {
            for (let z = 0; z < this.size.width; z++) {
                const blockId = this.getBlock(x, y, z).id;
                const instanceId = instancedMesh.count;

                if (blockId !== 0) {
                    matrix.setPosition(x + 0.5, y + 0.5, z + 0.5);
                    instancedMesh.setMatrixAt(instanceId, matrix);
                    this.setBlockInstanceId(x, y, z, instanceId);
                    instancedMesh.count++;
                }
            }
        }
    }
    instancedMesh.instanceMatrix.needsUpdate = true;
    this.add(instancedMesh);
    }


    getBlock(x, y, z) {
        if(this.inBounds(x, y, z)) {
            return this.data[x][y][z];
        }
        return null;
    }
    setBlockId(x, y, z, id) {
        if(this.inBounds(x, y, z)) {
            this.data[x][y][z].id = id;
        }
    }
    setBlockInstanceId(x, y, z, instanceId) {
        if(this.inBounds(x, y, z)) {
            this.data[x][y][z].instanceId = instanceId;
        }
    }

    inBounds(x, y, z) {
        return (
            x >= 0 && x < this.size.width &&
            y >= 0 && y < this.size.height &&
            z >= 0 && z < this.size.width
        );
    }
}

