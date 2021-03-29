import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as echarts from 'echarts';

class Businesses extends Component {
  state = {  }
  async componentDidMount(){
    // 基于准备好的dom，初始化echarts实例
    const myChart = await echarts.init(document.getElementById('businesses'));
    // 绘制图表
    myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }

  render() { 
    return (
      <React.Fragment>
        <h1>商机</h1>
        <div id="businesses" className="col" style={{height:400}}>
        </div>

        <Link className="btn btn-primary" to="/businesses/add">创建商机</Link>
      </React.Fragment>
    );
  }
}
 
export default Businesses;