let app = new Vue({
  el: '#app',
  data: {
    addedName: '',
    addedComment: '',
    comments: [],
    reviews: [
      { name: 'Mary Jane, mother of 5', text: 'I absolutely love using this website to discover and store all of my recipes, so I can easily share them with my college-age daughters!' },
      { name: 'Kathryn Reynolds, grandmother', text: 'I have collected and saved all of my favorite family recipes here, so my grandkids can keep cooking them!' }
    ]
  },
  methods: {
    addComment() {
      if (this.comments.length === 0)
        this.comments = new Array;

      this.comments.push({
        author: this.addedName,
        text: this.addedComment,
      });
      this.addedName = '';
      this.addedComment = '';
    },
  }
});

var demo = new Vue({
  el: '#demo',
  data: {
    info: ["I just love using this website!", "Other review", "Third review"]
  }
})
