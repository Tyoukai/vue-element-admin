<template>
    <div>
        <h1>三方数据源延迟队列情况</h1>
        <br>
        <div v-for="(delayQueueInfo, index) in delayQueueInfos" :key="index">
            <h3>{{ delayQueueInfo.ip }}</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>key</th>
                        <th>下次执行时间</th>
                        <th>操作</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(queueNodeInfo, index) in delayQueueInfo.queueNodeInfos" :key="index">
                        <td>{{ queueNodeInfo.key }}</td>
                        <td>{{ queueNodeInfo.nextExecuteTime }}</td>
                        <td><button type="button" class="btn btn-danger" @click="deleteDelayQueueInfo(queueNodeInfo.key, queueNodeInfo.queueName, delayQueueInfo.ip)">从队列中删除</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'OperationConfig',
    data() {
        return {
            timer: "",
            delayQueueInfos: []
        }
    },
    methods: {
        queryDelayQueueInfo() {
            this.delayQueueInfos = []
            let ip = 'localhost'
            let url = 'http://' + ip + ':8080/hermes/operation/delayQueue'

            axios.get('/hermes/operation/delayQueue').then(
                response => {
                    console.log(response.data)
                    let data = response.data.data
                    let delayQueueInfo = {ip: data.ip, queueNodeInfos: []}
                    let metricQueue = data.queueNodeInfos.metricQueue
                    for (let m = 0; m < metricQueue.length; m++) {
                        let queueNodeInfo = {key: '', nextExecuteTime : '', queueName: ''}
                        queueNodeInfo.queueName = 'metricQueue'
                        queueNodeInfo.key = metricQueue[m].key
                        queueNodeInfo.nextExecuteTime = metricQueue[m].nextExecuteTime
                        delayQueueInfo.queueNodeInfos.push(queueNodeInfo)
                    }
                    

                    let phaserForQueryLatestMetric = data.queueNodeInfos.phaserForQueryLatestMetric
                    for (let n = 0; n < phaserForQueryLatestMetric.length; n++) {
                        let queueNodeInfo = {key: '', nextExecuteTime : '', queueName: ''}
                        queueNodeInfo.queueName = 'phaserForQueryLatestMetric'
                        queueNodeInfo.key = phaserForQueryLatestMetric[n].key
                        queueNodeInfo.nextExecuteTime = phaserForQueryLatestMetric[n].nextExecuteTime
                        delayQueueInfo.queueNodeInfos.push(queueNodeInfo)

                    }

                    let phaserForCheck = data.queueNodeInfos.phaserForCheck
                    for (let n = 0; n < phaserForCheck.length; n++) {
                        let queueNodeInfo = {key: '', nextExecuteTime : '', queueName: ''}
                        queueNodeInfo.queueName = 'phaserForCheck'
                        queueNodeInfo.key = phaserForCheck[n].key
                        queueNodeInfo.nextExecuteTime = phaserForCheck[n].nextExecuteTime
                        delayQueueInfo.queueNodeInfos.push(queueNodeInfo)

                    }

                    this.delayQueueInfos.push(delayQueueInfo)
                }, error => {
                    console.log('error query url:' + url)
                }
            )
        },
        deleteDelayQueueInfo(key, queueName, ip) {
            console.log(key + ',' + queueName + ',' + ip)
            axios.delete('/hermes/operation/delayQueue').then(
                response => {
                    console.log(response.data)
                    this.queryDelayQueueInfo()
                }, error => {
                    console.log('error delete /hermes/operation/delayQueue', error)
                }
            )
        }
    },
    mounted() {
        this.timer = setInterval(this.queryDelayQueueInfo(), 10000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
</style>