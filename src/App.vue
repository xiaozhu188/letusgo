<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/bar">Bar</router-link>
      <router-link to="/foo">Foo</router-link>
    </div>
    <router-view />
  </div>
</template>
