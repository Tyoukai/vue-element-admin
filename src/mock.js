const Mock = require('mockjs')

const delayQueueDataFunction = function() {
    return {
        ip:'127.0.0.1',
        queueNodeInfos: [
            {
                dataSourceId: 2,
                metricId: 64,
                nextExecuteTime: '2023 09:23:34'
            }
        ]
    }
}

Mock.mock('/hermes/operation/delayQueue', 'get', delayQueueDataFunction)