const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push('Ralph');
}
function destructivelyPrependCat() {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
const newcats = ["Broom"];
function appendCat() {
    let newcats = ([...cats, "Broom"])
    return newcats;
}
function prependCat() {
    let newcats = (["Arnold", ...cats])
    return newcats;
}
function removeLastCat(name) {
    return cats.slice(0, cats.length -1);
}
function removeFirstCat(name) {
    return cats.slice(1)
}