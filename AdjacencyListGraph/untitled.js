//implementation of graph API
class Graph {
  constructor(v, e) {
    this.numVertices = v || 0;
    this.numEdges = e || 0;
    this.vertices = Array(v);
    this.verticesInit();
  }

  verticesInit() {
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i] = [];
    }
  }

  //each index in the vertices array is a subarray containing a list of all the other connected node (indices)
  addEdge(v, w) {
    if (w > this.vertices.length - 1) return 'not a valid connection.';
    this.vertices[v].push(w);
    this.vertices[w].push(v);
    this.numEdges++;
  }

  adjacent(v) {
    return this.vertices[v];
  }

  degree(v) {
    return this.vertices[v].length;
  }

  maxDegree() {
    return Math.max(...this.vertices.map((arr, index) => this.degree(index)));
  }

  averageDegree() {
    const degrees = this.vertices.map((arr, index) => this.degree(index));
    return degrees.reduce((a, b) => a + b) / degrees.length;
  }
}

let x = new Graph(9);
// console.log(x.vertices);
x.addEdge(1, 2);
x.addEdge(1, 0);
x.addEdge(2, 3);
x.addEdge(3, 4);
x.addEdge(5, 6);
x.addEdge(7, 8);
// console.log('GRAPH', x);
// console.log(x.vertices);
// console.log(x.maxDegree());
// console.log(x.averageDegree());


class DepthFirstPaths {
  //pass in the number of vertices that the graph has, if you want
  constructor(vertices) {
    this.marked = Array(vertices);
    this.edgeTo = Array(vertices);
    this.markedInit();
    this.components = Array(vertices);
    this.count = 0;
  }

  markedInit() {
    for (let i = 0; i < this.marked.length; i++) {
      this.marked[i] = false;
    }
  }

  //edgeTo[w] === v means that edge v-w was taken to visit w for the first time
  depthFirstSearch(graph, vertex) {
    this.marked[vertex] = true;
    this.components[vertex] = this.count;
    const adjacent = graph.adjacent(vertex);
    adjacent.forEach(w => {
      console.log(w)
      if (!this.marked[w]) {
        this.depthFirstSearch(graph, w);
      }
      this.edgeTo[w] = vertex;
    });
  }

  //this is assuming depthFirstSearch has already been run
  path(v, w) {
    let string = w.toString();

    //done in their example using a for loop
    while (this.edgeTo[w] !== v) {
      string += ' --> ' + this.edgeTo[w].toString();
      w = this.edgeTo[w];
    }
    string += ' --> ' + v.toString();
    return string;
  }

  //assumes graph has not been search yet and that vertices are unmarked
  connectedComponents(graph) {
    for (let i = 0; i < graph.vertices.length; i++) {
      if (!this.marked[i]) {
        this.depthFirstSearch(graph, i);
        this.count++;
      }
    }
  }
}

let dfs = new DepthFirstPaths(5);
dfs.connectedComponents(x);
// console.log(dfs)
// console.log(dfs.marked);
// console.log(dfs.edgeTo);
// console.log(dfs.components);
// console.log(dfs.path(0, 4));

class BreadthFirstPaths {
  constructor(vertices) {
    this.marked = Array(vertices);
    this.edgeTo = Array(vertices);
    this.markedInit();
  }

  markedInit() {
    for (let i = 0; i < this.marked.length; i++) {
      this.marked[i] = false;
    }
  }

  breadthFirstSearch(graph, source) {
    let queue = [source];
    this.marked[source] = true;

    while (queue.length) {
      let v = queue.shift();
      let adjacent = graph.adjacent(v);
      adjacent.forEach(w => {
        if (!this.marked[w]) {
          queue.push(w);
          this.marked[w] = true;
          this.edgeTo[w] = v;
        }
      });
    }
  }
}

let bfs = new BreadthFirstPaths();
bfs.breadthFirstSearch(x, 0);
// console.log(bfs.marked);
// console.log(bfs.edgeTo);
