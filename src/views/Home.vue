<template>
  <div>
    <ion-card v-for="post in posts" :key="post.data.id" style="border: 1px solid yellow;">
      <ion-card-content>
        <img :src="post.data.thumbnail" alt="">
        <ion-label color="light">{{post.data.title}}</ion-label>
        <ion-button color="tertiary" expand="full" @click="viewMore(post.data)">
          View more
        </ion-button>
      </ion-card-content>  
    </ion-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      posts: []
    }
  },
  async mounted(){
    const response = await axios.get('https://www.reddit.com/r/Nude_Selfie.json')
    this.posts = response.data.data.children;
    console.log(this.posts);
    
  },
  methods: {
    viewMore(post){
      this.$router.push({name: 'detail', params: { post }})
    }
  }
}
</script>