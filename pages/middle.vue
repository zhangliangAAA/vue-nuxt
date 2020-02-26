<template>
  <div>
    <h1>middleware 应用于页面内</h1>
    <h3 class="red">Hello {{ name }}!</h3>
  </div>
</template>

<script>
import myaxios from "@/utils/request";
export default {
  // layout: "blog", //指定当前页面使用的布局（layouts 根目录下的布局文件）。详情请参考 关于 布局 的文档。
  asyncData({ req, res, params, error }) {
    // 最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
    // return { name: "World" };

    if (process.server) {
      console.log("服务端", req);
      return { name: "服务端" };
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve({ name: 345 });
        } else {
          reject("err");
          error({ statusCode: 404, message: "Post not found" });
        }
      }, 1000);
    });
  },
  fetch() {
    // 与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。
    // 不同的是 fetch 方法不会设置组件的数据。详情请参考 关于fetch方法的文档。
  },
  head() {
    // 配置当前页面的 Meta 标签, 详情参考 页面头部配置API。
  },
  loading: true,
  //如果设置为false，则阻止页面自动调用this.$nuxt.$loading.finish()和
  //this.$nuxt.$loading.start(),您可以手动控制它,请看例子,仅适用于在nuxt.config.js中设置loading的情况下。请参考API配置 loading 文档。
  transition: "", //指定页面切换的过渡动效, 详情请参考 页面过渡动效。
  scrollToTop: true,
  middleware: "auth",
};
</script>

<style>
.red {
  color: red;
}
</style>
