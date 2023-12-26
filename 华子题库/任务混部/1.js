const rl = require('readline').createInterface({ input: process.stdin })
let iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
void async function () {
    let taskNum = await readline()
    let tasks = []
    for (let i = 0; i < taskNum; i++) {
        let arr = await readline()
        tasks.push(arr.split(' '))
    }
    rl.close()
    console.log(tasks);
}()

function minServerNum(tasks) {
    // 任务按结束时间排序
    tasks.sort((a,b)=>a[1]-b[1])
    // 初始化服务器列表
    const servers = []
    // 遍历任务列表
    for(const task of tasks) {
        let assigned = false // 标记该任务是否已经分配到服务器
        // 检查是否存在可用的服务器
        for(const serve of servers) {
            // 当前任务的开始时间在服务器的时间不重叠
            if(serve[1] <= task[0]){
                // 该服务器可以容纳该任务
                serve[1] = task[0]
                assigned = true
                break
            }
        }
        if(!assigned) {
            // 增加一个新的服务器来容纳任务
            servers.push()
        }
        // 移除已完成的任务
        servers.forEach((server, index) => {
            if(server[1] <= task[1]){
                servers.splice(index, 1)
            }
        })
    }
}