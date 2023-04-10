<template>
  <div>
    <el-row :span="10" style="margin-bottom: 40px">
      <el-col :span="6">
        <el-card style="color: #409eff">
          <div><i class="el-icon-user-solid"/>用户总数</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">100</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color: #f56c6c">
          <div><i class="el-icon-money"/>销售总量</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">￥1000</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color: #f56c6c">
          <div><i class="el-icon-money"/>收益总额</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">￥1000</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color: #f56c6c">
          <div><i class="el-icon-money"/>收益总额</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">￥1000</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="main" style="width: 500px; height: 400px;"/>
      </el-col>
      <el-col :span="12">
        <div id="pie" style="width: 500px; height: 400px;" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: "Home",
    data() {
      return {

      }
    },
    mounted() { // 页面渲染之后再触发
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option = {
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [],
            type: 'line'
          },
          {
            data: [],
            type: 'bar'
          }
        ]
      };
      this.request.get("http://localhost:10086/echarts/example").then(res => {
        // 清空
        option.xAxis.data = res.data.x
        option.series[0].data = res.data.y
        option.series[1].data = res.data.y
        myChart.setOption(option);
      })



      // 饼图
      var pieChartDom = document.getElementById('pie');
      var myPieChart = echarts.init(pieChartDom);
      var pieOption = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      pieOption && myPieChart.setOption(pieOption);
    }
  }
</script>

<style scoped>

</style>
