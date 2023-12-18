<script>
import articleDataService from "../services/ArticleDataService";
import ArticleDetails from "./Article.vue";

export default {
  name: "article-list",
  components: { ArticleDetails },

  //Les 2 fonction permettent dameliorer les performances
  mounted() {
    articleDataService.getAll().on("value", this.onDataChange);
  },

  beforeUnmount() {
    articleDataService.getAll().off("value", this.onDataChange);
  },

  data() {
    return {
      articles: [],
      currentArticle: null,
      currentIndex: -1,
    };
  },

  methods: {
    onDataChange(items) {
      let _articles = [];
      items.forEach((element) => {
        let key = element.key;
        let data = element.val();
        _articles.push({
          key: key,
          title: data.title,
          description: data.description,
          published: data.published,
        });
      });
      this.articles = _articles;
    },

    setActiveArticle(article, index) {
      this.currentArticle = article;
      this.currentIndex = index;
    },

    refreshList() {
    this.currentArticle = null;
      this.currentIndex = -1;
    },

    removeAllArticle() {
      articleDataService
        .deleteAll()
        .then(() => this.refreshList)
        .catch((e) => console.log(e));
    },
  },
};
</script>

<template>
  <div class="container list row m-auto">
    <h1>Articles LIST</h1>
    <div class="col-md-6">
      <ul class="list-group">
        <li
          :key="index"
          v-for="(unArticle, index) in articles"
          @click="setActiveArticle(unArticle, index)"
          class="list-group-item"
        > {{ unArticle.title }} </li>
      </ul>
      <button @click="removeAllArticle" class="m-3 btn btn-sm btn-danger">
        Tout Suppr.
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentArticle">
        <article-details v-bind="currentArticle"></article-details>
      </div>
      <div v-else>
        <p>Veuillez selectionner un article.</p>
      </div>
    </div>
  </div>
</template>
