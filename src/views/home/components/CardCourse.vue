<template>
    <div class="">
        <li>
            <span :class="['card', 'bg-' + bgName]">
                <span class="icon">
                    <img :src="[image !== '' ? image : require('@/assets/images/logo.svg')]" :alt="title">
                </span>
                <span class="title">{{title}}</span>
                <span class="action">
                    <router-link :to="{name: 'campus.modules'}" class="btn laravel">Acessar</router-link>
                </span>
            </span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </li>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardCourse',
    props: ['title', 'image', 'bgName']
  }
  </script>
  