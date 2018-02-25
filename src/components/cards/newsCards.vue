<template>
  <div class="section">

    <p>{{topNewsByCountry()}}</p>


         <!--Icon Section   -->
      <div class="row">

        <div v-for="article in stories">
          <div class="col s12 m4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" :src="article.urlToImage">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{article.title}}<i class="material-icons right">more_vert</i></span>
                <p><a :href="article.url">link to story</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{article.title}}<i class="material-icons right">close</i></span>
                <p>{{article.description}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

  </div>
</template>

<script>
  export default {

    data() {
      return {
        stories: []
      }
    },
    methods: {
      topNewsByCountry(){
        //this.stories = this.$store.dispatch('topStoriesByCountry').articles
        // var url = 'https://newsapi.org/v2/top-headlines?' +
        //   'country=us&' +
        //   'apiKey=bf85157524fa4a32929d280e1d6a145f';
        // var req = new Request(url);
        
        this.$http.get('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=bf85157524fa4a32929d280e1d6a145f')
          .then(response => {
            this.stories = response.data.articles;
          })
          .catch( error => {
            console.log(error)
          })

      }
    }

  }
</script>
