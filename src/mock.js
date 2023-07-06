const Mock = require('mockjs')

const delayQueueDataFunction = function() {
    return {
        ip:'172.16.106.9',
        queueNodeInfos: [
            {
                dataSourceId: 3,
                metricId: 64,
                nextExecuteTime: '2023 09:23:39'
            }
        ]
    }
}

Mock.mock('/hermes/operation/delayQueue', 'get', delayQueueDataFunction)