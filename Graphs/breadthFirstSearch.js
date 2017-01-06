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

module.exports = BreadthFirstSearch;
