
class Graph {
  constructor(v, e) {
    this.numVertices = v;
    this.numEdges = e;
    this.bag = Array(v);
    for (var i = 0; i < v; i++) {
      this.bag[i] = []
    }
  }

  addEdge(vertex1, vertex2) {
    this.bag[vertex1].push(vertex2);
    this.bag[vertex2].push(vertex1);
  }

  adjacentVertices(v) {
    console.log("this.bag[v]", this.bag[v])
    return this.bag[v]
  }
}

// module.exports = Graph;

class DepthFirstSearch {
  constructor(graph, start) {
    debugger;
    this.marked = Array(graph.numVertices);
    // this.start = start;
    this.search(graph, start);
  }

  search(graph, vertex) {
    this.marked[vertex] = true;
    for (let w in graph.adjacentVertices(vertex)) {
      if (!this.marked[w]) {
        this.search(graph, w);
      }
    }
  }

  hasPathTo(vertex) {
    return this.marked[vertex]
  }

  pathTo(vertex) {
    if (!this.hasPathTo(vertex)) return null;

    const path = [];
    for (let i = vertex; i !== this.start; i = this.edgeTo[i]) {
      path.push(i)
    }

    path.push(this.start)
    return path
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



// public static void main(String[] args) {
//         In in = new In(args[0]);
//         Graph G = new Graph(in);
//         int s = Integer.parseInt(args[1]);
//         DepthFirstSearch search = new DepthFirstSearch(G, s);
//         for (int v = 0; v < G.V(); v++) {
//             if (search.marked(v))
//                 StdOut.print(v + " ");
//         }

//         StdOut.println();
//         if (search.count() != G.V()) StdOut.println("NOT connected");
//         else                         StdOut.println("connected");
//     }
