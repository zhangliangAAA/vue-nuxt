<template>
  <div>
    <h2>students页面,path：/students/:id?</h2>
  </div>
</template>

<script>
export default {
  validate({ params, query }) {
    console.log('validate',params,query)
    if( !isNaN(params.id)){
      return true // 如果参数有效
    }else {
      throw new Error('student id must is a number！！')
    }
    
  // return false // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
}
}
</script>

<style></style>
