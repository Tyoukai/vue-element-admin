<template>
    <div>
        <h1>三方数据源延迟队列情况</h1>
        <br>
        <div v-for="(delayQueueInfo, index) in delayQueueInfos" :key="index">
            <h3>{{ delayQueueInfo.ip }}</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>数据源id</th>
                        <th>指标id</th>
                        <th>下次执行时间</th>
                        <th>操作</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(queueNodeInfo, index) in delayQueueInfo.queueNodeInfos" :key="index">
                        <td>{{ queueNodeInfo.dataSourceId }}</td>
                        <td>{{ queueNodeInfo.metricId }}</td>
                        <td>{{ queueNodeInfo.nextExecuteTime }}</td>
                        <td><button type="button" class="btn btn-danger" @click="deleteDelayQueueInfo(queueNodeInfo.dataSourceId, queueNodeInfo.metricId)">从队列中删除</button></td>
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
                    let delayQueueInfo = {ip: response.data.ip, queueNodeInfos: []}
                    for (let m = 0; m < response.data.queueNodeInfos.length; m++) {
                        let queueNodeInfo = {dataSourceId: 0, metricId: 0, nextExecuteTime : ''}
                        queueNodeInfo.dataSourceId = response.data.queueNodeInfos[m].dataSourceId
                        queueNodeInfo.metricId = response.data.queueNodeInfos[m].metricId
                        queueNodeInfo.nextExecuteTime = response.data.queueNodeInfos[m].nextExecuteTime
                        delayQueueInfo.queueNodeInfos.push(queueNodeInfo)
                    }
                    this.delayQueueInfos.push(delayQueueInfo)
                }, error => {
                    console.log('error query url:' + url)
                }
            )
        },
        deleteDelayQueueInfo(dataSourceId, metricId) {
            console.log(dataSourceId + ',' + metricId)
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