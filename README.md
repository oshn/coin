# Coin

Biased coin simulator

### Example

~~~js
const Coin = require('spb25-coin');

let config = new Map(
        [ ['Exo'  , 40]
        , ['Hopar', 60]
        ]);

let coin = new Coin(config);

coin.derive().then(console.log); // more likely 'Hopar'
~~~


## Install

~~~sh
npm install spb25-coin
~~~


### License

MIT License
