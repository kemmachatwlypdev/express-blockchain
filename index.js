const express = require('express');
const sha256 = require('crypto-js/sha256');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

class Block {
    constructor(
        index,
        timestamp,
        transaction,
        precedingHash = ''
    ) {
        this.index = index;
        this.index = timestamp;
        this.index = transaction;
        this.index = precedingHash;
        this.hash = this.computeHash();
    }

    computeHash() {
        return sha256(
            this.index +
            this.precedingHash +
            this.timestamp +
            JSON.stringify(this.transaction)
        ).toString();
    }
}