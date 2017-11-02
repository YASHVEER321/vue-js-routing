<template>
  <div class="hello">
 <h2>Hello this is second component</h2>
<div>
<el-row :gutter="10">
  <el-col :span="8"><div class="grid-content bg-purple-dark">First</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>



</div>
  </div>


</template>

<script>
export default {
  name: 'component2',
  props:['value'],
  data () {
    return {
      msg: ''
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    color:red
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>
