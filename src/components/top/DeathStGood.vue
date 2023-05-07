<script setup lang="ts">
import goodImage from '@/assets/top/good_128.png';
import { Good } from '@/models/Good';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const apiUrl = import.meta.env.VITE_DSG_API_URL;
const good = ref<Good>();
const displayCount = ref<number | undefined>(0);
const pressedCount = ref<number>(0);
const progressValue = ref<number>(0);
const isFinished = ref<boolean>(false);

let intervalId: number | null = null;

onMounted(() => {
  getGood()
});

const getGood = async () => {
  const url = `${apiUrl}/goods?url=www.koba-masa.com`
  try {
    const response = await axios.get(url);
    good.value = response.data;
    displayCount.value = good.value?.counter;
  } catch (error) {
    console.error(error);
  }
};

const updateGood = async (counter:number) => {
  const url = `${apiUrl}/goods/${good.value?.id}`
  try {
    const data = {
      counter: counter,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await axios.patch(url, data, { headers });
    good.value = response.data;
    pressedCount.value = 0;
    displayCount.value = good.value?.counter
  } catch (error) {
    console.error('Error:', error);
  }
};

const pressGood = () => {
  if (isFinished.value)  {
    return;
  }

  if (!intervalId) {
    intervalId = window.setInterval(updateProgressBar, 100);
  }
  pressedCount.value++;
  displayCount.value = (good.value?.counter !== undefined ? good.value?.counter : 0) + pressedCount.value
}

const updateProgressBar = () => {
  progressValue.value++;
  if (progressValue.value >= 100) {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
    }
    isFinished.value = true;
    updateGood(pressedCount.value);
  }
}

</script>

<template>
  <div class="deathStGood">
    <div class="good">
      <img :src="goodImage" @click="pressGood()">
      <span class="counter">{{ displayCount }}</span>
    </div>
    <!-- <div class="light"></div> -->
    <div class="progress">
      <progress max="100" :value="progressValue" />
    </div>
  </div>
</template>

<style>
.deathStGood {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 50px;
  touch-action: manipulation;
}

.deathStGood .light {
  background: linear-gradient(to right, rgba(0, 250, 154, 1), rgba(0, 250, 154, 0.5));
  width: 50%;
  height: 130px;
  opacity: 50%;
}

.deathStGood .progress {
  display: flex;
  align-items: center;
  width: 50%;
}

.deathStGood .progress progress {
  width: 100%;
}

.deathStGood .good .counter {
  /* font-size: 256px; */
}

.deathStGood .good img:active {

}


</style>
