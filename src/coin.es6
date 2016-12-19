let Device = require('spb25-device');


let urv = () => Math.random() || urv();

class Coin extends Device {
    next (entries, bias) {
        let i = random(bias);

        return super.next(entries[i]);
    }

    /**
     * Initialize index
     * @param  {Set|Map} table
     * @return {Promise}
     */
    init (table) {
        let entries = Array.from(table.keys());

        let bias, load;

        if (String(table) == '[object Map]') // bad
            load = Array.from(table.values()),
            bias = load[0] / (load[0] + load[1]);

        return super.init(entries, bias);
    }
}


/**
 * Biased coin toss simulator
 * @param  {Number} bias
 * @return {Number}      index of side [0,1]
 */
function random (bias=1/2) {
    let x = Math.random() > bias;

    return Number(x);
}

module.exports = Coin;
