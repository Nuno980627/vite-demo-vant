<template>
  <h1>环境变量</h1>
  <h3>type:{{ type }}</h3>
  <h3>baseAPI:{{ baseAPI }}</h3>
  <h1>Pinia</h1>
  <h3>pinia count:{{ store.counter }}</h3>
  <h3>pinia name:{{ store.name }}</h3>
  <h3>destructure actions/解构:{{ isAdmin }}</h3>
  <h3>action change:{{ actionMode }}</h3>
  <h1>other</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>views/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div className="test-postcss">test</div>
</template>
<script setup lang="ts">
  import { ref, onActivated } from 'vue'
  import { useStore } from '@/store/index'
  import { storeToRefs } from 'pinia'
  //pinia
  //directly get access
  const store = useStore()
  const { isAdmin, actionMode } = storeToRefs(store)
  store.$patch({
    counter: store.counter + 1,
    name: 'Abalam'
  })
  isAdmin.value = 'ok reactive'
  store.setAction('action info')
  //prop
  // defineProps<{ msg: string }>()
  //环境变量
  const count = ref(0)
  const type = ref('')
  type.value = import.meta.env.MODE
  const baseAPI = ref('')
  baseAPI.value = import.meta.env.VITE_APP_API_BASE_URL
  //生命周期
  onActivated(() => {
    console.log('1235667')
  })
</script>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
  .test-postcss {
    width: 20px;
    height: 30px;
    color: #42b983;
  }
</style>
