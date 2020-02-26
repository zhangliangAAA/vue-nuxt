export default function ({ store, error }) {
  console.log('权限验证',store)
  
  if (!store.state.authUser) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}