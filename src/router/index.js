import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage'
import KafkaConfig from '../pages/KafkaConfig'
import RobotConfig from '../pages/RobotConfig'
import WatchdogConfig from '../pages/WatchdogConfig'

export default new VueRouter({
    routes: [
        {
            path:'/home',
            component: HomePage
        },
        {
            path:'/kafkaConfig',
            component: KafkaConfig
        },
        {
            path:'/robotConfig',
            component: RobotConfig
        },
        {
            path:'/watchdogConfig',
            component: WatchdogConfig
        }
    ]
})