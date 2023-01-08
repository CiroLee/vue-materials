<template>
  <div>
    <h2 class="g-title">avatar</h2>
    <div p-20px>
      <h4 font-700 mb-12px>基础使用 - circle</h4>
      <div class="row" flex items-center>
        <avatar size="xlarge" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar size="large" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar size="small" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
      </div>
    </div>
    <div p-20px>
      <h4 font-700 mb-12px>基础使用 - square</h4>
      <div class="row" flex items-center>
        <avatar size="xlarge" shape="square" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar size="large" shape="square" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar shape="square" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar shape="square" size="small" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
      </div>
    </div>
    <div p-20px>
      <h4 font-700 mb-12px>文字和颜色</h4>
      <div class="row" flex items-center>
        <avatar size="xlarge" text="永" bg-color="#fc4848" />
        <avatar size="large" text="永" bg-color="#33fe7a" />
        <avatar text="永" bg-color="#569fda" />
        <avatar size="small" text="永" bg-color="#ff7c00" />
      </div>
    </div>
    <div p-20px>
      <h4 font-700 mb-12px>头像组 - options</h4>
      <avatar-group :options="avatarOptions" size="large" />
    </div>
    <div p-20px>
      <h4 font-700 mb-12px>头像组 - slot</h4>
      <avatar-group>
        <avatar url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar text="+3" />
      </avatar-group>
    </div>
    <div p-20px>
      <h4 font-700 mb-12px>状态: 在线(online) 离线(offline)</h4>
      <div class="row" flex items-center>
        <avatar size="large" status="online" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar
          size="large"
          shape="square"
          status="offline"
          url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
      </div>
    </div>
    <div p-20px>
      <h4 font-700 mb-12px>红点</h4>
      <div class="row" flex items-center>
        <avatar size="large" :dot="true" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar size="large" dot="99" url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
        <avatar
          size="large"
          shape="square"
          dot="99"
          url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Avatar from './components/avatar.vue';
import type { AvatarProps } from './components/avatar.vue';
import AvatarGroup from './components/avatarGroup.vue';
const avatarOptions: AvatarProps[] = [
  {
    url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200',
    boxShadow: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200',
    boxShadow: false,
  },
  {
    text: '永',
    bgColor: '#9C27B0',
    boxShadow: false,
  },
  {
    text: '+3',
    boxShadow: false,
  },
];
</script>
<style lang="scss" scoped>
.row .avatar:not(:last-child) {
  margin-right: 16px;
}
</style>
