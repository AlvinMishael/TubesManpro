//input node
var nodes = new vis.DataSet([
    { id: 1, label: "Dearen" },
    { id: 2, label: "Alvin" },
    { id: 3, label: "Vito" },
    { id: 4, label: "William" },
    { id: 5, label: "Neil" },
  ]);

  // input edge
  var edges = new vis.DataSet([
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 },
  ]);

  // create a network
  var container = document.getElementById("graf");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {};
  var network = new vis.Network(container, data, options);