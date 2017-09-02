module.exports = {
    getAmount: function (coinType) {
        // COINS:
        // [p]enny
        // [n]ickel
        // [d]ime
        // [q]uarter
        let types = {
            'p': 1,
            'n': 5,
            'd': 10,
            'q': 25,
        }

        if (!types.hasOwnProperty(coinType)) {
            throw new Error('Unrecognized coin ' + coinType);
        }

        console.log(types, coinType);

        return types[coinType];
    },
};
