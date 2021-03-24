import * as echarts from 'echarts';
import React, { Component } from 'react';

class Index extends Component {
  componentDidMount(){
    const myChart = echarts.init(document.getElementById('content'));
    // 绘制图表
    myChart.setOption({   
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量1','销量2']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [
            {
            name: '销量1',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
            },
            {
                name: '销量2',
                type: 'line',
                data: [15, 30, 46, 46, 46, 30]
            }
        ]
    });
  }

  render() { 
    return (
      <div id="content" style={{width:'600px', height:'400px'}}></div>
    );
  }
}
 
export default Index;