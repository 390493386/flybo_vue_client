<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}

@media screen and (max-width:500px) {
    #main-content {
        width: 100%;
        height: 100%;
    }
}

@media screen and (min-width:501px) {
    #main-content {
        width: 500px;
        height: 100%;
        margin-left: calc(50% - 250px)
    }
}

body {
    width: 100%;
    height: 100%;
    font-size: 0;
}
</style>
