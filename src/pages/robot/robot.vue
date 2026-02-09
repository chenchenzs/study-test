<template>
  hello chenchen1
</template>


<script setup lang="ts">
import useCloudbase from '@/utils/useCloudbase';

useCloudbase({
  msg: "你好"
}, "aiserver").then(res => {
  console.log(res)
})

</script>
<style lang="scss">
@import './robot.scss';
</style>
