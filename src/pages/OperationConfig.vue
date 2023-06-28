<template>
    <div>
        <h1>三方数据源延迟队列情况</h1>
        <br>
        <h3>127.0.0.1</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>数据源id</th>
                    <th>指标id</th>
                    <th>下次执行时间</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                     <td>2</td> <!--{{delayQueueInfos[0].queueNodeInfo[0].dataSourceId}} -->
                    <td>64</td>
                    <td>2023 09:23:56</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'OperationConfig',
    // data() {
    //     delayQueueInfos: [
    //         {
    //             ip:'127.0.0.1',
    //             queueNodeInfo: [
    //                 {
    //                     dataSourceId: 2,
    //                     metricId: 64,
    //                     nextExecuteTime: '2023 09:23:34'
    //                 },
    //                 {
    //                     dataSourceId: 2,
    //                     metricId: 65,
    //                     nextExecuteTime: '2023 09:23:56'
    //                 }
    //             ]
    //         },
    //         {
    //             ip:'127.0.0.2',
    //             queueNodeInfo: [
    //                 {
    //                     dataSourceId: 3,
    //                     metricId: 64,
    //                     nextExecuteTime: '2023 09:23:34'
    //                 },
    //                 {
    //                     dataSourceId: 3,
    //                     metricId: 65,
    //                     nextExecuteTime: '2023 09:23:56'
    //                 }
    //             ]
    //         }
    //     ]
    // }
}
</script>

<style scoped>
</style>