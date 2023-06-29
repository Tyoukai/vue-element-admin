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
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(queueNodeInfo, index) in delayQueueInfo.queueNodeInfos" :key="index">
                        <td>{{ queueNodeInfo.dataSourceId }}</td>
                        <td>{{ queueNodeInfo.metricId }}</td>
                        <td>{{ queueNodeInfo.nextExecuteTime }}</td>
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
            delayQueueInfos: [
                {
                    ip:'127.0.0.1',
                    queueNodeInfos: [
                        {
                            dataSourceId: 2,
                            metricId: 64,
                            nextExecuteTime: '2023 09:23:34'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        queryDelayQueueInfo() {
            this.delayQueueInfos = []
            let ip = '127.0.0.1'
            let url = 'http://' + ip + ':8080/test/api'

            axios.get(url).then(
                response => {
                    let delayQueueInfo = {ip: ip, queueNodeInfos: []}
                    for (let m = 0; m < response.data.queueNodes.length; m++) {
                        let queueNodeInfo = {dataSourceId: 0, metricId: 0, nextExecuteTime : ''}
                        queueNodeInfo.dataSourceId = response.data.queueNodes[m].dataSourceId
                        queueNodeInfo.metricId = response.data.queueNodes[m].metricId
                        queueNodeInfo.nextExecuteTime = response.data.queueNodes[m].nextExecuteTime
                        delayQueueInfo.queueNodeInfos.push(queueNodeInfo)
                    }
                    this.delayQueueInfos.push(delayQueueInfo)
                }, error => {
                    console.log('error query url:' + url)
                }
            )

            ip = '127.0.0.2'
            url = 'http://' + ip + ':8080/test/api'
            axios.get(url).then(
                response => {
                    let delayQueueInfo = {ip: ip, queueNodeInfos: []}
                    for (let m = 0; m < response.data.queueNodes.length; m++) {
                        let queueNodeInfo = {dataSourceId: 0, metricId: 0, nextExecuteTime : ''}
                        queueNodeInfo.dataSourceId = response.data.queueNodes[m].dataSourceId
                        queueNodeInfo.metricId = response.data.queueNodes[m].metricId
                        queueNodeInfo.nextExecuteTime = response.data.queueNodes[m].nextExecuteTime
                        delayQueueInfo.queueNodeInfos.push(queueNodeInfo)
                    }
                    this.delayQueueInfos.push(delayQueueInfo)
                }, error => {
                    console.log('error query url:' + url)
                }
            )


        }
    },
    mounted() {
        // this.timer = setInterval(this.queryDelayQueueInfo())
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
</style>