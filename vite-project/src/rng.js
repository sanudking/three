export class RNG {
    m_w = 123456789;
    m_z = 987654321;
    mask = 0xffffffff;

    constructor(seed) {
        if (seed !== undefined) {
            this.m_w = seed >>> 0;
            this.m_z = (seed ^ 0x5a5a5a5a) >>> 0; // XOR with a constant to get a different initial state
        }
    }

    random() {
        this.m_z = ((36969 * (this.m_z & 65535)) + (this.m_z >>> 16)) >>> 0;
        this.m_w = ((18000 * (this.m_w & 65535)) + (this.m_w >>> 16)) >>> 0;
        const result = (((this.m_z << 16) >>> 0) + this.m_w) >>> 0;
        return result / 4294967296; // Convert to [0, 1)
    }
}