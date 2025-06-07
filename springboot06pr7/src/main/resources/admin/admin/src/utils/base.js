const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot06pr7/",
            name: "springboot06pr7",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot06pr7/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的校医务室健康服务系统"
        } 
    }
}
export default base
