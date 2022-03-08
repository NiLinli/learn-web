<template>
  <div>
    <v-expand :height="66" :value="false">
      <div class="dynamic-item-content" slot="content">
        <span class="dynamic-item-content-item" :key="eventIndex" v-for="(event, eventIndex) in focusItem.list">
          {{ event.name }}：{{ event.value }}
        </span>
      </div>
      <div class="expand-icon" slot="expand-text">
        <img :src="$getFullStaticPath('/statn.png')" />
      </div>
      <div class="expand-icon" slot="shrink-text">
        <img :src="$getFullStaticPath('/static/direct/weclient/icon_up.png')" />
      </div>
    </v-expand>
  </div>
</template>

<script>
export default {
  method() {},
};
</script>

<style></style>
