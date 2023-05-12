<script lang="ts" setup>
import { ref } from 'vue';
import RInput from './components/input.vue';
import RTextarea from './components/textarea.vue';
const inputVal1 = ref('');
const inputVal2 = ref('');
const inputVal3 = ref('apple');
const textareaVal1 = ref('');
const textareaVal2 = ref('');
const handleInput1 = (val: string) => {
  inputVal1.value = val;
};
const handleInput2 = (val: string) => {
  inputVal2.value = val;
};

const handleInput3 = (val: string) => {
  inputVal3.value = val;
};
const handleTextareaVal1 = (val: string) => {
  textareaVal1.value = val;
};
const handleTextareaVal2 = (val: string) => {
  textareaVal2.value = val;
};
</script>
<template>
  <div>
    <div border-1 border-solid border-gray-300 p-3 rounded>
      <p font-bold mb-2>Input</p>
      <div mb-3>
        <p text-gray text-sm mb-1>可清除</p>
        <r-input v-model:value="inputVal1" clearable @update="handleInput1" />
      </div>
      <div mb-3>
        <p text-gray text-sm mb-1>显示统计</p>
        <r-input v-model:value="inputVal2" :max-length="20" clearable show-count @update="handleInput2" />
      </div>
      <div mb-3>
        <p text-gray text-sm mb-1>禁用</p>
        <r-input value="apple" :max-length="20" show-count disabled />
      </div>
      <div mb-3>
        <p text-gray text-sm mb-1>密码 type=password</p>
        <r-input value="apple" type="password" />
      </div>
      <div mb-3>
        <p text-gray text-sm mb-1>只读</p>
        <r-input value="pear" :max-length="20" show-count readonly />
      </div>
      <div mb-3>
        <p text-gray text-sm mb-1>尺寸</p>
        <r-input v-model:value="inputVal3" mb-1 size="small" placeholder="small" @update="handleInput3" />
        <r-input v-model:value="inputVal3" mb-1 size="medium" placeholder="medium" @update="handleInput3" />
        <r-input v-model:value="inputVal3" size="large" placeholder="large" @update="handleInput3" />
      </div>
    </div>
    <div border-1 border-solid border-gray-300 p-3 rounded mt-3>
      <p font-bold mb-2>Textarea</p>
      <div mb-3>
        <p text-gray text-sm mb-1>可清除</p>
        <r-textarea v-model:value="textareaVal1" clearable @update="handleTextareaVal1" />
      </div>
      <div mb-3>
        <p text-gray text-sm mb-1>显示统计</p>
        <r-textarea v-model:value="textareaVal2" :max-length="100" show-count clearable @update="handleTextareaVal2" />
      </div>
      <div mb-3>
        <p text-gray text-sm mb-1>禁用</p>
        <r-textarea v-model:value="textareaVal2" disabled />
      </div>
      <div mb-3>
        <p text-gray text-sm mb-1>只读</p>
        <r-textarea value="apple" readonly />
      </div>
      <div mb-3>
        <p text-gray text-sm mb-1>指定行数 row=10</p>
        <r-textarea value="apple" :rows="10" />
      </div>
    </div>
  </div>
</template>
