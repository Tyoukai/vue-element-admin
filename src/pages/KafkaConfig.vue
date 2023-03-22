<template>
    <div class="row" style="width: 100%; height: 100%; margin-left: 10px">
        <h1 style="border-bottom: 1px solid #eee; padding-bottom: 10px">蓝凌消息重试</h1>
        <br>
        <div class="clo-md-4" style="width:30%; margin-left:25px;" >
            <div class="dropdown">
                <button type="button" class="btn dropdown-toggle" id="dropdownMenu1" 
                data-toggle="dropdown">
                    审批节点类型
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                    <li role="presentation">
                        <a role="menuitem" tabindex="-1" href="#">结束节点</a>
                    </li>
                    <li role="presentation">
                        <a role="menuitem" tabindex="-1" href="#">审批节点</a>
                    </li>
                </ul>
            </div>
        </div>
        <br>
        <div class="clo-md-4" style="width:30%; margin-left: 25px;">
            <div class="input-group">
                <span class="input-group-addon">流程id：</span>
                <input type="text" class="form-control" placeholder="流程id">
            </div>
        </div>
        <br>
        <div class="clo-md-4" style="width:30%; margin-left: 25px;">
            <button type="button" class="btn btn-success">确定</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KafkaConfig'
}
</script>

<style>

</style>