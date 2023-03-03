import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const appInfo = reactive({
    name: "app",
    count: 0,
  });

  const updateName = (name: string) => {
    appInfo.name = name;
  };

  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  return { appInfo, updateName, count, increment };
});
