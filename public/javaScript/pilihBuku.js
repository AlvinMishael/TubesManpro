console.log(document.getElementById("pilih-buku"));
//console.log(document.getElementById("pilih-buku").value);
const dropDown = document.getElementById('pilih-buku'); 
console.log(dropDown);
 dropDown.addEventListener('change', change);
let chart ;

 fetch('/barData1',{
  method:'post',
  headers:{"Content-Type":"application/json"}
})
.then(response => response.json())
.then(data=>{
  const dataLabel = [];
  const dataFrekuensi = [];
  for(let i = 0;i<data.length;i++){
    dataLabel[i] = data[i].Source;
    dataFrekuensi[i] = data[i].weight
  }
  
  chart = new Chart(document.getElementById("grafik"), {
    type: 'horizontalBar',
    data: {
      labels: dataLabel,
      datasets: [
        {
          label: "Frekuensi",
          backgroundColor: ["#ff6700", "#ff7619","#ff8533","#ff954d","#ffa466", "#ffb380", "#ffc299", "#ffd1b3", "#ffe1cc", "#fff0e6"],
          data: dataFrekuensi
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      },

      scales: {
        xAxes: [{
          
          display: true,
          ticks: {
              beginAtZero: true
              
          }
        }],
        
      }
    }
  });
  

})

function change(e){
    console.log("method")
    console.log(document.getElementById("pilih-buku").value);
    if(document.getElementById("pilih-buku").value == 1 ){
        console.log(1);
        document.getElementById("gambarBuku").src="Book 1.jpeg";
        document.getElementById("gambarBuku").className="-scale-75 mt-8 - ml-24 h-10"
        console.log(document.getElementById("gambarBuku").className)
        fetch('/barData1',{
          method:'post',
          headers:{"Content-Type":"application/json"}
        })
        .then(response => response.json())
        .then(data=>{
          const dataLabel = [];
          const dataFrekuensi = [];
          for(let i = 0;i<data.length;i++){
            dataLabel[i] = data[i].Source;
            dataFrekuensi[i] = data[i].weight
          }
          chart.destroy();
          chart = new Chart(document.getElementById("grafik"), {
            type: 'horizontalBar',
            data: {
              labels: dataLabel,
              datasets: [
                {
                  label: "Frekuensi",
                  backgroundColor: ["#ff6700", "#ff7619","#ff8533","#ff954d","#ffa466", "#ffb380", "#ffc299", "#ffd1b3", "#ffe1cc", "#fff0e6"],
                  data: dataFrekuensi
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: false,
                text: 'Predicted world population (millions) in 2050'
              },
              scales: {
                xAxes: [{
                  
                  display: true,
                  ticks: {
                      beginAtZero: true
                      
                  }
                }],
               
              }
            }
          });

        

        

        })
    }
    else if (document.getElementById("pilih-buku").value == 2){
        console.log(2);
        document.getElementById("gambarBuku").src="Book 2.jpg";
        document.getElementById("gambarBuku").className="object-fill mt-8 ml-24 h-40"
        console.log(document.getElementById("gambarBuku").className)
        fetch('/barData2',{
          method:'post',
          headers:{"Content-Type":"application/json"}
        })
        .then(response => response.json())
        .then(data=>{
          const dataLabel = [];
          const dataFrekuensi = [];
          for(let i = 0;i<data.length;i++){
            dataLabel[i] = data[i].Source;
            dataFrekuensi[i] = data[i].weight
          }
          chart.destroy();
          chart =  new Chart(document.getElementById("grafik"), {
            type: 'horizontalBar',
            data: {
              labels: dataLabel,
              datasets: [
                {
                  label: "Frekuensi",
                  backgroundColor: ["#ff6700", "#ff7619","#ff8533","#ff954d","#ffa466", "#ffb380", "#ffc299", "#ffd1b3", "#ffe1cc", "#fff0e6"],
                  data: dataFrekuensi
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: false,
                text: 'Predicted world population (millions) in 2050'
              },
              scales: {
                xAxes: [{
                  display: true,
                  ticks: {
                      beginAtZero: true
                      
                  }
                }]
              }
            }
          });

        })
    }
    else if (document.getElementById("pilih-buku").value == 3){
        console.log(3);
        document.getElementById("gambarBuku").src="Book 3.jpg";
        document.getElementById("gambarBuku").className="object-fill mt-8 ml-24 h-40"
        console.log(document.getElementById("gambarBuku").className)
        fetch('/barData3',{
          method:'post',
          headers:{"Content-Type":"application/json"}
        })
        .then(response => response.json())
        .then(data=>{
          const dataLabel = [];
          const dataFrekuensi = [];
          for(let i = 0;i<data.length;i++){
            dataLabel[i] = data[i].Source;
            dataFrekuensi[i] = data[i].weight
          }
          chart.destroy();
          chart = new Chart(document.getElementById("grafik"), {
            type: 'horizontalBar',
            data: {
              labels: dataLabel,
              datasets: [
                {
                  label: "Frekuensi",
                  backgroundColor: ["#ff6700", "#ff7619","#ff8533","#ff954d","#ffa466", "#ffb380", "#ffc299", "#ffd1b3", "#ffe1cc", "#fff0e6"],
                  data: dataFrekuensi
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: false,
                text: 'Predicted world population (millions) in 2050'
              },
              scales: {
                xAxes: [{
                  display: true,
                  ticks: {
                      beginAtZero: true
                      
                  }
                }]
              }
            }
          });
        })
    }
    else if (document.getElementById("pilih-buku").value == 4){
        console.log(4);
        document.getElementById("gambarBuku").src="Book 4.jpg";
        document.getElementById("gambarBuku").className="object-fill mt-8 ml-24 h-40"
        console.log(document.getElementById("gambarBuku").className)
        fetch('/barData4',{
          method:'post',
          headers:{"Content-Type":"application/json"}
        })
        .then(response => response.json())
        .then(data=>{
          const dataLabel = [];
          const dataFrekuensi = [];
          for(let i = 0;i<data.length;i++){
            dataLabel[i] = data[i].Source;
            dataFrekuensi[i] = data[i].weight
          }
          chart.destroy();
          chart = new Chart(document.getElementById("grafik"), {
            type: 'horizontalBar',
            data: {
              labels: dataLabel,
              datasets: [
                {
                  label: "Frekuensi",
                  backgroundColor: ["#ff6700", "#ff7619","#ff8533","#ff954d","#ffa466", "#ffb380", "#ffc299", "#ffd1b3", "#ffe1cc", "#fff0e6"],
                  data: dataFrekuensi
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: false,
                text: 'Predicted world population (millions) in 2050'
              },
              scales: {
                xAxes: [{
                  display: true,
                  ticks: {
                      beginAtZero: true
                      
                  }
                }]
              }
            }
          });
        })
    }
    else if (document.getElementById("pilih-buku").value == 5){
        console.log(5);
        document.getElementById("gambarBuku").src="Book 5.jpeg";
        document.getElementById("gambarBuku").className="object-fill mt-8 ml-24 h-40"
        console.log(document.getElementById("gambarBuku").className)
        fetch('/barData5',{
          method:'post',
          headers:{"Content-Type":"application/json"}
        })
        .then(response => response.json())
        .then(data=>{
          const dataLabel = [];
          const dataFrekuensi = [];
          for(let i = 0;i<data.length;i++){
            dataLabel[i] = data[i].Source;
            dataFrekuensi[i] = data[i].weight
          }
          chart.destroy();
          chart = new Chart(document.getElementById("grafik"), {
            type: 'horizontalBar',
            data: {
              labels: dataLabel,
              datasets: [
                {
                  label: "Frekuensi",
                  backgroundColor: ["#ff6700", "#ff7619","#ff8533","#ff954d","#ffa466", "#ffb380", "#ffc299", "#ffd1b3", "#ffe1cc", "#fff0e6"],
                  data: dataFrekuensi
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: false,
                text: 'Predicted world population (millions) in 2050'
              },
              scales: {
                xAxes: [{
                  display: true,
                  ticks: {
                      beginAtZero: true
                      
                  }
                }]
              }
            }
          });
        })
    }
    else{
        document.getElementById("gambarBuku").src="allBook copy.png";
    }
} 
