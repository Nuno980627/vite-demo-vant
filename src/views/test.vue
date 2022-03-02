<template>
  <div>
    <van-uploader v-model="fileList" multiple />
    <input type="file" accept="image/*" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onActivated } from 'vue'
  export default defineComponent({
    setup() {
      const fileList = ref([
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true },
      ])
      onActivated(() => {
        console.log(789)
      })
      return {
        fileList,
      }
    },
  })
</script>
