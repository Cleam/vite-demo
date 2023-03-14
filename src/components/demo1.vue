<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive, ref, toRef } from "vue";
import { useAppStore } from "../sotres/appStore";

defineProps<{ title: string }>();
const appStore = useAppStore();
const { count: c } = storeToRefs(appStore);

const count = toRef(appStore, "count");

const count2 = ref(appStore.count);

const appInfo = reactive(appStore.appInfo);

// console.log(count === c); // false

const increment = appStore.increment; // toRef(appStore, "increment");
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="card">
    <button type="button" @click="count2++">count2 is {{ count2 }}</button>
    <br />
    <br />
    <button type="button" @click="appInfo.count++">
      appInfo.count is {{ appInfo.count }}
    </button>
    <br />
    <br />
    <button type="button" @click="count++">count is {{ count }}</button>
    <br />
    <br />
    <button type="button" @click="c++">c is {{ c }}</button>
    <br />
    <br />
    <button type="button" @click="increment">
      increment: {{ appStore.count }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
