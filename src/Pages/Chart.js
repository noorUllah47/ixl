import React,{useState,useEffect} from 'react';
import Highcharts, { chart } from 'highcharts';

// class Donut extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
    
//           series: [{
       
//         data: [5]
//     },  ]
       
//         }
//     }
  
//     highChartsRender() {
//         Highcharts.chart({
//           tooltip:false,
//             chart: {
//               width: 700,
//               type: 'scatter',
//               margin: [50],
//               events: {
//                 click: function (e) {
//                   // find the clicked values and the series
//                   console.log("VAluesX",e.xAxis[0].value,"VAluesY",e.yAxis[0].value,this.series[1].data)
//                   var x = Math.round(e.xAxis[0].value),
//                     y = Math.round(e.yAxis[0].value),
//                     series = this.series[0];
//                     series = this.series[1];

          
//                   // Add it
//                   series.addPoint([x, y]);
          
//                 }
//               },
//               renderTo: 'atmospheric-composition'
//             },
//             title: {
//               verticalAlign: 'top',
//               floating: true,
//               text: 'plot here',
//               style: {
//                 fontSize: '30px',
//               }
//             },
//             accessibility: {
//               announceNewData: {
//                 enabled: true
//               }
//             },
//             xAxis: {
//               gridLineWidth: 1,
//               minPadding: 0.2,
//               maxPadding: 0.2,
//               maxZoom: 60
//             },
//             yAxis: {
              
//               title: {
//                 text: 'Value'
//               },
//               minPadding: 0.2,
//               maxPadding: 0.2,
//               maxZoom: 60,
//               plotLines: [{
//                 value: 0,
//                 width: 1,
//                 color: '#808080'
//               }]
//             },
//             legend: {
//               enabled: false
//             },
//             exporting: {
//               enabled: false
//             },
//             plotOptions: {
//               marker:{
//                 enabled:false
//               },
//               series: {
//                 lineWidth: 1,
//                 point: {
//                   events: {
//                     click: function (e) {
//                       console.log(e)
//                       if (this.series.data.length > 1) {
//                         this.remove();
//                       }
                    
//                     }
//                   }
//                 }
//               }
//             },
//             series: this.state.series
//         });
//     }

//     componentDidMount() {
//         this.highChartsRender();
//     }

//    	render() {
//        	return (
//             <div id="atmospheric-composition">
//             </div>
//        	);
//    	}
// }

// export default Donut;

function Donut() {
  const [series, setseries] = useState(     [{
    id:1,
    name: 'Jane',
    data: [1, 0, 4]
}, ]
           )

function addAnotherPoint(){
  setLine(1)
  console.log(series,Line)
  setseries([...series,{
  
  name: 'jon',
  data: [ 8]
}])
}

function removePoint(index){
  // const list =[...series];
  // list.splice(index,1)
  // setseries(list)
  chart.series[0].removePoint(0);
}
        const [Line, setLine] = useState(0)
  function highChartsRender() {
  Highcharts.chart({
    // tooltip:true,
      chart: {
        showAxes: true,

        width: 700,
        type: 'scatter',
        margin: [50],
        events: {
          click: function (e) {
            // find the clicked values and the series
            console.log("VAluesX",e.xAxis[0].value,"VAluesY",e.yAxis[0].value,this.series[Line].name,"Line====",Line)
            var x = Math.round(e.xAxis[0].value),
              y = Math.round(e.yAxis[0].value),
              series = this.series[Line];


    
            // Add it
            series.addPoint([x, y]);
    
          }
        },
        renderTo: 'atmospheric-composition'
      },
      title: {
        verticalAlign: 'top',
        floating: true,
        text: 'plot here',
        style: {
          fontSize: '20px',
        }
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        max: 10,
        min: 0,

        maxZoom: 60
      },
      yAxis: {
        
        title: {
          text: 'Value'
        },
        minPadding: 0.2,
        max: 10,
        min: 0,

        maxPadding: 0.2,
        maxZoom: 60,
        // plotLines: [{
        //   value: 0,
        //   width: 1,
        //   color: '#808080'
        // }]
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        marker:{
          enabled:false
        },
        series: {
          lineWidth: 1,
          point: {
            events: {
              click: function (e) {
                console.log(e)
                console.log("remove event",this.series.name,Line)
                if(this.series.name==="Jane"){
                  setLine(0)
                  if (this.series.data.length > 0) {
                    this.remove();
                  }
                }
                if(this.series.name==="Jon"){
                  setLine(1)
                  if (this.series.data.length > 0) {
                    this.remove();
                  }
                }else{
                  setLine(0)
                  if (this.series.data.length > 0) {
                    this.remove();
                  }
                }
              
              }
            }
          }
        }
      },
      series: series
  });
}

useEffect(() => {
  highChartsRender()
}, [series,Line])

  return (
    <>
    <div id="atmospheric-composition">
    </div>
      <button onClick={addAnotherPoint} className='btn btn-primary'>Add Point</button>
      </>
  )
}

export default Donut