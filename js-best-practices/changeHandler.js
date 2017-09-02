// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
let coins = {
    'p': 1,
    'n': 5,
    'd': 10,
    'q': 25,
}

module.exports = {
    getAmount: function (coinType) {

        if (!coins.hasOwnProperty(coinType)) {
            throw new Error('Unrecognized coin ' + coinType);
        }

        return coins[coinType];
    },

    convertToChange: function (amount) {
        let change = [];
        let coinsByValue = Object.keys(coins).reverse();

        for (let name of coinsByValue) {
            let coin = coins[name];
            while (amount >= coin) {
                change.push(name);
                amount -= coin;
            }
        }

        return change;
    }
};
