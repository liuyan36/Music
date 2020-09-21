<template>
  <div class="home">
    123
  </div>
</template>

<script>
// @ is an alias to /src
import { getHomeMultidata } from '../api/home'
export default {
  name: 'Home',
  components: {
  },
  created() {
     this.getHomeMultidata()
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
