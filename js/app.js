const LIST = [
  {
    id: 1,
    nome: "Yoda",
    avatar: "images/yoda.png",
  },
  {
    id: 2,
    nome: "C3PO",
    avatar: "images/c3po.png",
  },
  {
    id: 3,
    nome: "Chewbacca",
    avatar: "images/chewbacca.png",
  },
  {
    id: 4,
    nome: "Han Solo",
    avatar: "images/hansolo.png",
  },
  {
    id: 5,
    nome: "Princess Leia",
    avatar: "images/leia.png",
  },
  {
    id: 6,
    nome: "R2D2",
    avatar: "images/r2d2.png",
  },
  {
    id: 7,
    nome: "Darth Vader",
    avatar: "images/vader.png",
  },
  {
    id: 8,
    nome: "Luke Skywalker",
    avatar: "images/luke.png",
  },
];
const App = new Vue({
  el: "#app",
  data: {
    title: "Star Wars Lego",
    username: "Ramon",
    characters: LIST,
    searchName: "",
  },
  methods: {
    like(username) {
      alert(`O personagem ${username} recebeu um like!`);
    },
    remove(id) {
      const list = this.characters;
      const result = list.filter((item) => {
        return item.id !== id;
      });
      this.characters = result;
    },
    search() {
      if (this.searchName === "") {
        return alert("O campo de busca é obrigatório.");
      }
      const list = (this.characters = LIST);

      const result = list.filter((item) => {
        return item.nome.toLowerCase().includes(this.searchName.toLowerCase());
      });

      if (result.length <= 0) {
        alert("Nenhum personagem com esse nome foi encontrado.");
      } else {
        this.characters = result;
      }
    },
  },
});
