import React,{useState,useEffect} from 'react';
import Highcharts, { chart } from 'highcharts';


function Donut({ans,gInput}) {
  const [series, setseries] = useState(     [{
    id:1,
    name: 'Jane',
    data: [[8,9]]
}, ]
           )


           function SeriesShift(name){
             console.log("------------------",name)
             if(name==="Jane"){

               setLine(0)
             }
             if(name==="Jon"){
              setLine(1)
              console.log(series,Line)
              if(series.length<2){
              setseries([...series,{
              
              name: 'jon',
              data: [ 8]
            }])
            } 
              setLine(1)

             }
           }
// function addAnotherPoint(){
//   setLine(1)
//   console.log(series,Line)
//   if(series.length<2){
//   setseries([...series,{
  
//   name: 'jon',
//   data: [ 8]
// }])
// }


// }
 function getPoint(){

  console.log("Seriiesss-------------------X",series[0].data[0][0],"Y",series[0].data[0][1],"asnssss",ans)

  gInput({x:series[0].data[0][0],y:series[0].data[0][1]})
}
function removePoint(x,y){
  // const list =[...series[0].data];
  // list.splice(index,0)
  // chart.series[0].data[0].remove()
  series[0].data[0][0]=x
  series[0].data[0][1]=y

  highChartsRender()
  console.log("00000000000===============>",chart.series)
  // setseries(list)
  // chart.series[0].removePoint(0);
}
        const [Line, setLine] = useState(0)
  function highChartsRender() {
  Highcharts.chart({
    tooltip:true,
      chart: {
        showAxes: true,
       height:480,
        width: 700,
        type: 'scatter',
        margin: [50],
        events: {
          click: function (e) {
            // find the clicked values and the series
            console.log("VAluesX",Math.round(e.xAxis[0].value),"VAluesY",Math.round(e.yAxis[0].value),this.series[Line].data,"Line====",Line,this.series[0].data)
            var x = Math.round(e.xAxis[0].value),
              y = Math.round(e.yAxis[0].value),
              series = this.series[Line];
              // Add it
              if(this.series[0].data.length===1){
                removePoint(x,y)
                console.log("ssssssssss",series) 
                getPoint()
              }
              if(this.series[0].data.length<1){
                
                series.addPoint([x, y]);
                getPoint()
            }
           
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
        tickInterval: 1,

        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        max: 10,
        min: -10,

        maxZoom: 60,
        plotLines: [{
          color: '#212529',
            width: 2,
        value:0
        }]
      },
      yAxis: {
        tickInterval: 1,

        minorGridLineColor: '#E0E0E0',
        minorGridLineWidth: 1,
        minorTickLength: 0,
        // minorTickInterval: 'auto',
        title: {
          text: 'Value'
        },
        minPadding: 0.2,
        max: 10,
        min: -9,

        maxPadding: 0.2,
        maxZoom: 60,
        plotLines: [{
          color: '#212529',
            width: 2,
        value:0
        }]
      },
     
    legend: false,
      exporting: {
        enabled: false
      },
      plotOptions: {
        marker:{
          enabled:false
        },
        series: {
          lineWidth: 1,
          events: {
            click: function (event) {
              // alert(this.name)
          // if(this.name==="Jane"){
          //     setLine(0)
          //   }
          //   if(this.name==="Jon"){
          //     setLine(1)
          //   }
          // SeriesShift(this.name)
            }
        },
          point: {
            events: {
           
              
              click: function (e) {
                console.log(e)
                console.log("remove event",this.series.name,Line)
               
                  if (this.series.data.length > 0) {
                    this.remove();
                    
                  
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
    <div className='graphmain' id="atmospheric-composition">
    </div>
      {/* <button onClick={addAnotherPoint} className='btn btn-primary'>Add Point</button> */}
      <div className='seriesbtns'>
      {/* <button onClick={()=>SeriesShift("Jane")} className='sm serbbtn btn btn-primary mx-3'>Line1</button>
      <button onClick={()=>SeriesShift("Jon")} className='sm btn serbbtn btn-secondary '>Line2</button> */}
      </div>
      </>
  )
}

export default Donut