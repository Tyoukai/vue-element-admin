const Mock = require('mockjs')

const delayQueueQueryResponse = function() {
    return {
        ip:'172.16.106.9',
        queueNodeInfos: [
            {
                dataSourceId: 3,
                metricId: 64,
                nextExecuteTime: '2023 09:23:39'
            },
            {
                dataSourceId: 3,
                metricId: 65,
                nextExecuteTime: '2023 09:23:49'
            }
        ]
    }
}

const deleteQueueDeleteResponse = function() {
    return {
        code: 0,
        msg: 'success'
    }
}

Mock.mock('/hermes/operation/delayQueue', 'get', delayQueueQueryResponse)

Mock.mock('/hermes/operation/delayQueue', 'delete', deleteQueueDeleteResponse)