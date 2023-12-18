<script>
import articleDataService from "../services/ArticleDataService";

export default {
  name: article,
  props: [article],

  data() {
    return {
      currentArticle: null,
      message: "",
    };
  },

  watch: {
    article(article) {
      this.currentArticle = { ...article };
      this.message = "";
    },
  },

  methods: {
    updatePublished(status) {
      articleDataService
        .update(this.currentArticle.key, { published: status })
        .then(() => {
            this.currentArticle.published = status;
            this.message = "le status a été MAJ"
        })
        .catch((e)=>console.log(e));
    },
  },
};
</script>

<template>
  <h1>article</h1>
</template>
