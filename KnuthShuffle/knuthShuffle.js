
const knuthShuffle = (deck) => {
  for(let i = 0; i < deck.length; i++) {

    // i needs to be inclusive
    let r = Math.floor(Math.random() * (i + 1))

    let temp = deck[i]
    this.deck[i] = this.deck[r]
    this.deck[r] = temp;
  }
}

module.exports = knuthShuffle
