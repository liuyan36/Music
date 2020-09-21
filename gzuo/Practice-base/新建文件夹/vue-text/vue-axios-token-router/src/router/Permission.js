import router from "./index"

/* 权限处理 */
router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        // 读取token
        const token = localStorage.getItem("token");
        if (token) {
            next();
        } else {
            next({
                path: '/login'
            })
        }
    }
    next();
})