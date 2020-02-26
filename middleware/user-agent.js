export default function(context) {
  console.log("middleware-userAgent")

  // context.userAgent = process.server
  //   ? context.req.headers["user-agent"]
  //   : navigator.userAgent
}
