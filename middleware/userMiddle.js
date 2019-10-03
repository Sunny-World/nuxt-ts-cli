export default function({ store, redirect }) {
  // 未登录跳转登录页面
  if (store.state.isLogin === 0) {
    return redirect("/login");
  }
}
