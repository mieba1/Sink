export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', 'https://p-1317230264.cos.ap-guangzhou.myqcloud.com')
  setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (event.method === 'OPTIONS') {
    return ''
  }
})
