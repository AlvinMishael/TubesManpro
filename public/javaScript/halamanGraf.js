/*fetch('/grafData')
.then(response => response.json())
.then((data)=>console.log(data)) */

const dropDown = document.getElementById('pilih-buku');
dropDown.addEventListener('change',graf);

fetch('/grafData1',{
  method:'post',
  headers:{"Content-Type":"application/json"}
})
.then(response => response.json())
.then(data=>{
  console.log(data);
  var arrVertex = [];
  var index = 0;
  for(let i = 0;i<data.length;i++){
    var vertex = {id:index+1,label:data[i].Source}
    console.log(arrVertex.some(e=>e.label===vertex.label))
    if(arrVertex.some(e=>e.label===vertex.label)==false){
      arrVertex.push(vertex);
      index++;
    }
    vertex = {id:index+1,label:data[i].Target}
    if(arrVertex.some(e=>e.label===vertex.label)==false){
      arrVertex.push(vertex);
      index++;
    }
  }
  //console.log(arrVertex);
  var arrEdges = [];
  for(let i = 0;i<data.length;i++){
    var source = data[i].Source;
    var target = data[i].Target;
    const idxSource = arrVertex.findIndex(e=>e.label===source)+1;
    const idxTarget = arrVertex.findIndex(e=>e.label===target)+1;
    var edge = {from:idxSource,to:idxTarget}
    arrEdges.push(edge);
  }

  var nodes = new vis.DataSet(arrVertex);
  var edges = new vis.DataSet(arrEdges);
  // create a network
  var container = document.getElementById("graf");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {};
  var network = new vis.Network(container, data, options);
})

function graf(e){
  var book = document.getElementById('pilih-buku').value;
  console.log(book);
  if(book==2){
    fetch('/grafData2',{
      method:'post',
      headers:{"Content-Type":"application/json"}
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data);
      var arrVertex = [];
      var index = 0;
      for(let i = 0;i<data.length;i++){
        var vertex = {id:index+1,label:data[i].Source}
        console.log(arrVertex.some(e=>e.label===vertex.label))
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
        vertex = {id:index+1,label:data[i].Target}
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
      }
      //console.log(arrVertex);
      var arrEdges = [];
      for(let i = 0;i<data.length;i++){
        var source = data[i].Source;
        var target = data[i].Target;
        const idxSource = arrVertex.findIndex(e=>e.label===source)+1;
        const idxTarget = arrVertex.findIndex(e=>e.label===target)+1;
        var edge = {from:idxSource,to:idxTarget}
        arrEdges.push(edge);
      }
    
      var nodes = new vis.DataSet(arrVertex);
      var edges = new vis.DataSet(arrEdges);
      // create a network
      var container = document.getElementById("graf");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new vis.Network(container, data, options);
    })
  }
  else if(book==3){
    fetch('/grafData3',{
      method:'post',
      headers:{"Content-Type":"application/json"}
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data);
      var arrVertex = [];
      var index = 0;
      for(let i = 0;i<data.length;i++){
        var vertex = {id:index+1,label:data[i].Source}
        console.log(arrVertex.some(e=>e.label===vertex.label))
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
        vertex = {id:index+1,label:data[i].Target}
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
      }
      //console.log(arrVertex);
      var arrEdges = [];
      for(let i = 0;i<data.length;i++){
        var source = data[i].Source;
        var target = data[i].Target;
        const idxSource = arrVertex.findIndex(e=>e.label===source)+1;
        const idxTarget = arrVertex.findIndex(e=>e.label===target)+1;
        var edge = {from:idxSource,to:idxTarget}
        arrEdges.push(edge);
      }
    
      var nodes = new vis.DataSet(arrVertex);
      var edges = new vis.DataSet(arrEdges);
      // create a network
      var container = document.getElementById("graf");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new vis.Network(container, data, options);
    })
  }
  else if(book==4){
    fetch('/grafData4',{
      method:'post',
      headers:{"Content-Type":"application/json"}
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data);
      var arrVertex = [];
      var index = 0;
      for(let i = 0;i<data.length;i++){
        var vertex = {id:index+1,label:data[i].Source}
        console.log(arrVertex.some(e=>e.label===vertex.label))
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
        vertex = {id:index+1,label:data[i].Target}
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
      }
      //console.log(arrVertex);
      var arrEdges = [];
      for(let i = 0;i<data.length;i++){
        var source = data[i].Source;
        var target = data[i].Target;
        const idxSource = arrVertex.findIndex(e=>e.label===source)+1;
        const idxTarget = arrVertex.findIndex(e=>e.label===target)+1;
        var edge = {from:idxSource,to:idxTarget}
        arrEdges.push(edge);
      }
    
      var nodes = new vis.DataSet(arrVertex);
      var edges = new vis.DataSet(arrEdges);
      // create a network
      var container = document.getElementById("graf");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new vis.Network(container, data, options);
    })
  }
  else if(book==5){
    fetch('/grafData5',{
      method:'post',
      headers:{"Content-Type":"application/json"}
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data);
      var arrVertex = [];
      var index = 0;
      for(let i = 0;i<data.length;i++){
        var vertex = {id:index+1,label:data[i].Source}
        console.log(arrVertex.some(e=>e.label===vertex.label))
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
        vertex = {id:index+1,label:data[i].Target}
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
      }
      //console.log(arrVertex);
      var arrEdges = [];
      for(let i = 0;i<data.length;i++){
        var source = data[i].Source;
        var target = data[i].Target;
        const idxSource = arrVertex.findIndex(e=>e.label===source)+1;
        const idxTarget = arrVertex.findIndex(e=>e.label===target)+1;
        var edge = {from:idxSource,to:idxTarget}
        arrEdges.push(edge);
      }
    
      var nodes = new vis.DataSet(arrVertex);
      var edges = new vis.DataSet(arrEdges);
      // create a network
      var container = document.getElementById("graf");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new vis.Network(container, data, options);
    })
  }
  else if(book==1){
    fetch('/grafData1',{
      method:'post',
      headers:{"Content-Type":"application/json"}
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data);
      var arrVertex = [];
      var index = 0;
      for(let i = 0;i<data.length;i++){
        var vertex = {id:index+1,label:data[i].Source}
        console.log(arrVertex.some(e=>e.label===vertex.label))
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
        vertex = {id:index+1,label:data[i].Target}
        if(arrVertex.some(e=>e.label===vertex.label)==false){
          arrVertex.push(vertex);
          index++;
        }
      }
      //console.log(arrVertex);
      var arrEdges = [];
      for(let i = 0;i<data.length;i++){
        var source = data[i].Source;
        var target = data[i].Target;
        const idxSource = arrVertex.findIndex(e=>e.label===source)+1;
        const idxTarget = arrVertex.findIndex(e=>e.label===target)+1;
        var edge = {from:idxSource,to:idxTarget}
        arrEdges.push(edge);
      }
    
      var nodes = new vis.DataSet(arrVertex);
      var edges = new vis.DataSet(arrEdges);
      // create a network
      var container = document.getElementById("graf");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new vis.Network(container, data, options);
    })
  }
}

