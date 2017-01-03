const expect = require('chai').expect;
const Graph = require('./adjacencyListGraph');

xdescribe('Graph', () => {
  it('should generate the proper graph', () => {
    let g = new Graph(12);

    g.addEdge(0, 6)
    g.addEdge(0, 2)
    g.addEdge(0, 1)
    g.addEdge(0, 5)
    g.addEdge(1, 0)
    g.addEdge(2, 0)
    g.addEdge(3, 5)
    g.addEdge(3, 4)
    g.addEdge(4, 5)
    g.addEdge(4, 6)
    g.addEdge(4, 3)
    g.addEdge(5, 3)
    g.addEdge(5, 4)
    g.addEdge(5, 0)
    g.addEdge(6, 0)
    g.addEdge(6, 4)
    g.addEdge(7, 8)
    g.addEdge(8, 7)
    g.addEdge(9, 11)
    g.addEdge(9, 10)
    g.addEdge(9, 12)
    g.addEdge(10, 9)
    g.addEdge(11, 9)
    g.addEdge(11, 12)
    g.addEdge(12, 11)
    g.addEdge(12, 9)
    expect(g).to.equal(2)


 // *  0: 6 2 1 5
 // *  1: 0
 // *  2: 0
 // *  3: 5 4
 // *  4: 5 6 3
 // *  5: 3 4 0
 // *  6: 0 4
 // *  7: 8
 // *  8: 7
 // *  9: 11 10 12
 // *  10: 9
 // *  11: 9 12
 // *  12: 11 9

// let g = new Graph(13,13)

// 13 13 0 5 4 3 0 1 9 12 6 4 5 4 0 2 11 12 9 10 0 6 7 8 9 11 5 3
// g.addEdge(0, 5)
// g.addEdge(4, 3)
// g.addEdge(0, 1)
// g.addEdge(9, 12)
// g.addEdge(6, 4)
// g.addEdge(5, 4)
// g.addEdge(0, 2)
// g.addEdge(11, 12)
// g.addEdge(9, 10)
// g.addEdge(0, 6)
// g.addEdge(7, 8)
// g.addEdge(9, 11)
// g.addEdge(5, 3)

 // *  0: 2 1 5
 // *  1: 0 2
 // *  2: 0 1 3 4
 // *  3: 5 4 2
 // *  4: 3 2
 // *  5: 3 0

// let x = new Graph(9, 6);
// // console.log(x.vertices);
// x.addEdge(1, 2);
// x.addEdge(1, 0);
// x.addEdge(2, 3);
// x.addEdge(3, 4);
// x.addEdge(5, 6);
// x.addEdge(7, 8);
// // console.log(x.vertices);
// // console.log(x.maxDegree());
// // console.log(x.averageDegree());


  })
})
