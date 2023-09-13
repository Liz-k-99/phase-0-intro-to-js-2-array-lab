// Write your solution here!
let cats = ["Milo", "Otis", "Garfield" ];
const destructivelyAppendCat = (name) => {
return cats.push (name);
};
const destructivelyPrependCat = (name) => {
    return cats.unshift(name);
};

const destructivelyRemoveLastCat = (name) => {
    return cats.pop(name);
};

const destructivelyRemoveFirstCat  = (name) => {
    return cats.shift(name);
};
let appendCat = (name) => {
      let newCats = [...cats, name]
      return newCats;
};
let prependCat =  name => {
   let newCats = [name, ...cats]
   return newCats;
};

const removeLastCat = () => {
   let lostCats = cats.slice(0,-1)
   return lostCats;
};

const removeFirstCat = () => {
    let lostCat = cats.slice(1)
    return lostCat;
}