const Mock = require('mockjs')

const delayQueueQueryResponse = function() {
    return {
        "code": 0,
        "msg": "success",
        "data": {
            "ip": "172.0.0.1",
            "queueNodeInfos": {
                "metricQueue": [{
                        "key": "om_0_1",
                        "nextExecuteTime": "2023 09:23:34"
                    },
                    {
                        "key": "om_0_2",
                        "nextExecuteTime": "2023 19:23:34"
                    }
                ],
                "phaserForQueryLatestMetric": [{
                        "key": "om_0_5",
                        "nextExecuteTime": "2023 09:23:34"
                    },
                    {
                        "key": "om_0_6",
                        "nextExecuteTime": "2023 19:23:34"
                    }
                ],
                "phaserForCheck": [{
                        "key": "om_0_5",
                        "nextExecuteTime": "2023 09:23:34"
                    },
                    {
                        "key": "om_0_6",
                        "nextExecuteTime": "2023 19:23:34"
                    }
                ]
            }
        }
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