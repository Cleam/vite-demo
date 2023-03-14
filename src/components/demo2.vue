<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive, ref, toRef } from "vue";
import { useAppStore } from "../sotres/appStore";

defineProps<{ title: string }>();
const appStore = useAppStore();
const refA = ref({
  wechat: {
    name: "wechat",
    nick: "wechat",
  },
});
const changName = () => {
  refA.value.wechat = {
    name: "haha",
    nick: "wechat",
  };
};

let refB = reactive({ name: "张三", age: 35 });
const changeRefB = () => {
  // 这种操作无法触发响应式
  refB = { name: "李四", age: 30 };
};
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="card">
    <p>name: {{ refA.wechat.name }}</p>
    <p>nick: {{ refA.wechat.nick }}</p>
    <br />
    <button @click="changName">change name</button>
    <br />
    <p>name: {{ refB.name }}</p>
    <p>age: {{ refB.age }}</p>
    <br />
    <button @click="changeRefB">change refB</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
