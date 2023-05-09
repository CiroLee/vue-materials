<template>
  <div border border-solid border-gray-300 p-sm mb-4>
    <div mt-10px>
      <div font-bold mb-8px text-xl>switch</div>
      <p flex content-center mb-12px>
        <span inline-block w-60px mr-16px text-right>large: </span>
        <Switch size="large" checked @change="switchChange" />
      </p>
      <p flex content-center mb-12px>
        <span inline-block w-60px mr-16px text-right>default: </span>
        <Switch size="medium" />
      </p>
      <p flex content-center mb-12px>
        <span inline-block w-60px mr-16px text-right>small: </span>
        <Switch size="small" />
      </p>
      <p flex content-center mb-12px>
        <span inline-block w-60px mr-16px text-right>禁用: </span>
        <Switch size="small" disabled />
      </p>
    </div>
  </div>
  <div border border-solid border-gray-300 p-sm>
    <div font-bold text-xl mb-8px>radio</div>
    <div mb-2>
      <p>基本使用</p>
      <div mt-1 children:mr-2>
        <radio :checked="r1 === 'peach'" @update:checked="(checked) => handleFruitChange('peach', checked)">桃子</radio>
        <radio :checked="r1 === 'apple'" @update:checked="(checked) => handleFruitChange('apple', checked)">苹果</radio>
        <radio :checked="r1 === 'banana'" @update:checked="(checked) => handleFruitChange('banana', checked)">
          香蕉
        </radio>
      </div>
      <div mt-2 children:mr-2>
        <radio
          type="circle"
          :checked="r1 === 'peach'"
          @update:checked="(checked) => handleFruitChange('peach', checked)">
          桃子
        </radio>
        <radio
          type="circle"
          :checked="r1 === 'apple'"
          @update:checked="(checked) => handleFruitChange('apple', checked)">
          苹果
        </radio>
        <radio
          type="circle"
          :checked="r1 === 'banana'"
          @update:checked="(checked) => handleFruitChange('banana', checked)">
          香蕉
        </radio>
        <radio
          type="circle"
          :checked="r1 === 'pineapple'"
          disabled
          @update:checked="handleFruitChange('pineapple', $event)">
          凤梨
        </radio>
      </div>
    </div>
    <div mb-2>
      <p>radio组</p>
      <div mt-1 children:mr-2>
        <p my-1 text-sm text-gray-5>水平方向</p>
        <radio-group :default-key="r2" :options="options" @update:value="handleStacksChange" />
      </div>
      <div mt-1 children:mr-2>
        <p my-1 text-sm text-gray-5>垂直方向</p>
        <radio-group
          direction="vertical"
          type="circle"
          :default-key="r2"
          :options="options"
          @update:value="handleStacksChange" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Switch from './components/switch/index.vue';
import Radio from './components/radio.vue';
import RadioGroup, { type Option } from './components/radio-group.vue';
const r1 = ref('peach');
const r2 = ref('vue');
const options = [
  {
    label: 'vue',
    value: 'vue',
  },
  {
    label: 'react',
    value: 'react',
  },
  {
    label: 'angular',
    value: 'angular',
  },
  {
    label: 'solid',
    value: 'solid',
  },
  {
    label: 'svelete',
    value: 'svelete',
  },
];
const handleFruitChange = (str: string, checked: boolean) => {
  r1.value = str;
  console.log(str + ':', checked);
};
const handleStacksChange = (val: Option & { checked: boolean }) => {
  r2.value = val.value as string;
  console.log(val);
};
const switchChange = (checked: boolean) => {
  console.log(checked);
};
</script>
