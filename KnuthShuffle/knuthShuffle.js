
const knuthShuffle = (deck) => {
  for(let i = 0; i < deck.length; i++) {

    // i needs to be inclusive
    let r = Math.floor(Math.random() * (i + 1))

    swap(deck, i, r)
  }
}

const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

module.exports = knuthShuffle
