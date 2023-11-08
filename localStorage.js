var { writeFileSync, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {

    constructor() {
        if (existsSync('localStorage.json')) {
            var txt = readFileSync('localStorage.json');
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    async setItem(key, value) {
        this.items[key] = value;
        this.writeItemsToLocalstorage();
    }

    async removeItem(key) {
        delete this.items[key];
        this.writeItemsToLocalstorage();
    }

    key(index) {
        let ind = Number(index);
        let keys = Object.keys(this.items);
        return this.items[keys[ind]];
    }

    clear() {
        this.items = {};
        unlink('localStorage.json', () => {
            console.log('localStorage file is removed');
        })
    }

    writeItemsToLocalstorage() {
        writeFileSync('localStorage.json', JSON.stringify(this.items), error => {
            if (error) {
                console.log('Error occurred during writing file');
            }
        })
    }

    print() {
        console.log(this.items);
    }
}

module.exports = new LocalStorage();