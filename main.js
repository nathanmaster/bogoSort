const express = require('express');
const app = express();
const port = 3000;


//check fun
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

//randomize
function randomizeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// sort loop
function bogoSort(arr) {
    let count = 0;
    while (!isSorted(arr)) {
        count++;
        randomizeArray(arr);
    }
    return { sortedarray: arr, count };
}

//endpoint
app.get(['/bogosort', '/'], (req, res) => {
    const arrLen = 10;
    const arr = Array.from({ length: arrLen }, () => Math.floor(Math.random() * 100) + 1);
    const result = bogoSort(arr);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Bogo Sort API listening on port ${port}`);
});