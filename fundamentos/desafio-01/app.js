new Vue({
  el: "#desafio",
  data: {
    name: "Rafael Cunha",
    idade: 27,
    image:
      "https://image.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg",
  },
  methods: {
    xIdade() {
      return this.idade * 3;
    },
    mathRandom() {
      return Math.random(0, 1);
    },
  },
});

//
