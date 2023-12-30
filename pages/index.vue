<template>
  <h1>Nuxt SEO</h1>
  <h2>{{$t('hello')}}</h2>
</template>

<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: t('hello')
})
</script>
