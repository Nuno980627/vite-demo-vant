import router from '@/router'

// eslint-disable-next-line
router.beforeEach(async (to: any, from, next) => {
  // 设置标题
  document.title = to.meta.title || 'vite-Template'
  next()
})
