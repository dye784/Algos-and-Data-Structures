
class Graph {
  constructor(v, e) {
    this.numVertices = v || 0;
    this.numEdges = e || 0;
    this.verticies = Array(v);
    this.verticiesInit();
  }

  verticiesInit() {
    for (var i = 0; i < v; i++) {
      this.verticies[i] = []
    }
  }

  addEdge(vertex1, vertex2) {
    this.verticies[vertex1].push(vertex2);
    this.verticies[vertex2].push(vertex1);
    this.numEdges++;
  }

  adjacentVertices(v) {
    return this.verticies[v]
  }

  degree(v) {
    return this.vertices[v].length;
  }

  maxDegree() {
    return Math.max(...this.verticies.map((arr, index) => this.degree(index)));
  }

  averageDegree() {
    const degrees = this.verticies.map((arr, index) => this.degree(index));
    return degrees.reduce((a, b) => a + b) / degrees.length;
  }
}

// module.exports = Graph;

class DepthFirstSearch {
  constructor(graph, start) {
    this.marked = Array(graph.numVertices);
    this.edgeTo = Array(graph.numEdges);
    this.markedInit();
    this.componentId = 0;
  }

  markedInit() {
    for (var i = 0; i < this.marked.length; i++) {
      this.marked[i] = false
    }
  }

  search(graph, vertex) {
    this.marked[vertex] = true;
    this.components[vertex] = this.componentId;
    for (let w in graph.adjacentVertices(vertex)) {
      if (!this.marked[w]) {
        this.search(graph, w);
      }
      this.edgeTo[w] = vertex;
    }
  }

  hasPathTo(vertex) {
    return this.marked[vertex]
  }

  path(v, w) {
    if (!this.hasPathTo(vertex)) return null;

    let directions = w.toString();

    while (this.edgeTo[w] !== v) {
      directions += ' --> ' + this.edgeTo[w].toString()
      w = this.edgeTo[w]
    }

    directions += ' --> ' + v.toString();

    return directions;
  }

  connectedComponents(graph) {
    for (let i = 0; i < graph.verticies.length; i++) {
      if (!this.marked[i]) {
        this.search(graph, i);
        this.componentId++;
      }
    }
  }

}


let g2 = new Graph(13,13)

// let g = new Graph(13, 13);

// 13 13 0 5 4 3 0 1 9 12 6 4 5 4 0 2 11 12 9 10 0 6 7 8 9 11 5 3
g2.addEdge(0, 5)
g2.addEdge(4, 3)
g2.addEdge(0, 1)
g2.addEdge(9, 12)
g2.addEdge(6, 4)
g2.addEdge(5, 4)
g2.addEdge(0, 2)
g2.addEdge(11, 12)
g2.addEdge(9, 10)
g2.addEdge(0, 6)
g2.addEdge(7, 8)
g2.addEdge(9, 11)
g2.addEdge(5, 3)

console.log(g2.bag)

let dfs  = new DepthFirstSearch(g2, 0)
console.log(dfs.marked)

 // *  0: 2 1 5
 // *  1: 0 2
 // *  2: 0 1 3 4
 // *  3: 5 4 2
 // *  4: 3 2
 // *  5: 3 0

// let dfs = new DepthFirstSearch(g2, '5')
// console.log(dfs.search('0'))

// console.log(dfs.pathTo('5'))
// console.log(dfs.edgeTo)

let x = new Graph(9);
// console.log(x.vertices);
x.addEdge(1, 2);
x.addEdge(1, 0);
x.addEdge(2, 3);
x.addEdge(3, 4);
x.addEdge(5, 6);
x.addEdge(7, 8);
// console.log(x.vertices);
// console.log(x.maxDegree());
// console.log(x.averageDegree());




// let dfs = new DepthFirstPaths(5);
// dfs.connectedComponents(x);
// console.log(dfs.marked);
// console.log(dfs.edgeTo);
// console.log(dfs.components);
// // console.log(dfs.path(0, 4));

// class BreadthFirstPaths {
//   constructor(vertices) {
//     this.marked = Array(vertices);
//     this.edgeTo = Array(vertices);
//     this.markedInit();
//   }

//   markedInit() {
//     for (let i = 0; i < this.marked.length; i++) {
//       this.marked[i] = false;
//     }
//   }

//   breadthFirstSearch(graph, source) {
//     let queue = [source];
//     this.marked[source] = true;

//     while (queue.length) {
//       let v = queue.shift();
//       let adjacent = graph.adjacent(v);
//       adjacent.forEach(w => {
//         if (!this.marked[w]) {
//           queue.push(w);
//           this.marked[w] = true;
//           this.edgeTo[w] = v;
//         }
//       });
//     }
//   }
// }

// let bfs = new BreadthFirstPaths();
// bfs.breadthFirstSearch(x, 0);
// // console.log(bfs.marked);
// // console.log(bfs.edgeTo);
