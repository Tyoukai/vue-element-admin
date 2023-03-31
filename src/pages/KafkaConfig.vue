<template>
    <div class="row" style="width: 100%; height: 100%; margin-left: 10px">
        <h1 style="border-bottom: 1px solid #eee; padding-bottom: 10px">蓝凌消息重试</h1>
        <br>
        <div class="clo-md-4" style="width:30%; margin-left:25px;" >
            <div class="dropdown">
                <button type="button" class="btn dropdown-toggle" id="dropdownMenu1" 
                data-toggle="dropdown">
                    {{messageType}}
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                    <li role="presentation" @click="changeMessageType('结束消息')">
                        <a role="menuitem" tabindex="-1" href="#">结束消息</a>
                    </li>
                    <li role="presentation" @click="changeMessageType('驳回消息')">
                        <a role="menuitem" tabindex="-1" href="#">驳回消息</a>
                    </li>
                </ul>
            </div>
        </div>
        <br>
        <div class="clo-md-4" style="width:30%; margin-left: 25px;">
            <div class="input-group">
                <span class="input-group-addon">流程id：</span>
                <input type="text" v-model="flowId" class="form-control" placeholder="流程id">
            </div>
        </div>
        <br>
        <div class="clo-md-4" style="width:30%; margin-left: 25px;">
            <button type="button" class="btn btn-success" @click="sendKafkaMessage()">确定</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'KafkaConfig',
        data() {
            return {
                messageType: '消息重试类型',
                flowId: ''
            }
        },
        methods: {
            changeMessageType(type) {
                this.messageType = type
            },
            sendKafkaMessage() {
                if (this.messageType === '消息重试类型') {
                    alert('请选择消息类型！')
                    return
                }
                if (this.flowId === '') {
                    alert('请填写对应的流程id！')
                    return
                }
                let urlProxy = 'http://localhost:8080/test/api';
                let url = 'http://172.16.125.224:8100/test/api'
                axios.get(urlProxy).then(
                    response => {
                        console.log(response.data)
                    },
                    error => {
                        console.log(error.message)
                    }
                )
            }
        }
    }
</script>

<style>

</style>