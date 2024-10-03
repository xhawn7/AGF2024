// 基准大小
const baseSize: any = 16
// 设置 rem 函数
function setRem() {
    let clientW = document.documentElement.clientWidth;
    const scale = clientW / (clientW > 750 ? 1200 : 750)
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 1) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function() {
    setRem()
}
