class BreadthFirstSearch {
  constructor(graph) {
    this.marked = Array(graph.numVertices);
    this.edgeTo = Array(graph.numEdges);
    this.markedInit();
  }

  markedInit() {
    for (var i = 0; i < this.marked.length; i++) {
      this.marked[i] = false
    }
  }

  bfs(graph, source) {
    let queue = [source];
    this.marked[source] = true;

    while (queue.length) {

      let v = queue.shift();
      const adjacent = graph.adjacentVertices(v);
      adjacent.forEach(w => {
        if (!this.marked[w]) {
          queue.push(w);
          console.log(queue)
          this.marked[w] = true;
          this.edgeTo[w] = v;
        }
      });
    }
  }
}

// module.exports = BreadthFirstSearch;
const Graph = require('./adjacencyListGraph');
// let x = new Graph(9, 6);
// // console.log(x.vertices);
// x.addEdge(1, 2);
// x.addEdge(1, 0);
// x.addEdge(2, 3);
// x.addEdge(3, 4);
// x.addEdge(5, 6);
// x.addEdge(7, 8);

let y = new Graph(6, 8);
y.addEdge(0,1);
y.addEdge(0,2);
y.addEdge(0,5);
y.addEdge(1,2);
y.addEdge(2,4);
y.addEdge(2,3);
y.addEdge(3,4);
y.addEdge(3,5);

let search = new BreadthFirstSearch(y);
console.log(y)
search.bfs(y, 0);
console.log(search.marked);
console.log(search.edgeTo);
