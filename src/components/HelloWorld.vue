<template>
  <div class="hello">
    <h2>{{ msg }}</h2>

<el-container>
  <el-header>
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-menu-item index="2-4">item four</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">
  <router-link to="/comp2">About Us</router-link>
  </el-menu-item>
  <el-menu-item index="4">Login</el-menu-item>

</el-menu>

  </el-header>
  <el-container>
    <el-aside width="200px">Navigation Bar</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>


  </div>
</template>

<script>
import component2 from "./second"
import component3 from "./third"


export default {
    components:{
    // 'comp2':component2,
    //     'comp3':component3
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is the first component',
      activeIndex: '1',
        activeIndex2: '1'

    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }

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
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
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
