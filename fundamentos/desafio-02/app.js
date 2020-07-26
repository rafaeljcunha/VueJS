new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    exibirAlerta() {
      alert("Alertar exibido!");
    },
    armezenarValor(event) {
      const { value } = event.target;
      this.valor = value;
    },
  },
});
