new Vue({
  el: "#desafio",
  data: {
    classe1: "destaque",
    perigo: true,
    classe3: "",
    classe4: "",
    cor5: "",
    estilo: {
      width: "100px",
      height: "100px",
    },
    width: "0",
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classe1 = this.classe1 === "destaque" ? "encolher" : "destaque";
      }, 2000);
    },
    iniciarProgresso() {
      let valor = 0;
      const temporizador = setInterval(() => {
        valor += 5;
        this.width = `${valor}%`;
        if (valor === 100) {
          return clearInterval(temporizador);
        }
      }, 500);
    },
    setPerigo(event) {
      if (event.target.value === "true") {
        this.perigo = true;
      } else if (event.target.value === "false") {
        this.perigo = false;
      }
    },
  },
});
