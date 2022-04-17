/**
 * 
 * @param {function} area 
 * @param {function} vol 
 * @param {String} input 
 */

function solve(area, vol, input) {
    const cube = JSON.parse(input);
    const result = [];
    for(let c of cube){
        const cubeArea = area.apply(c);
        const cubeVolume = vol.apply(c);
        result.push({
            area: cubeArea,
            volume: cubeVolume
        });
    }
    return result;
}
const input = '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"}{"x":"5","y":"2","z":"10"}]';
    
solve(area, vol, input);

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


