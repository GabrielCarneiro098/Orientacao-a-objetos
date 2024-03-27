import express from "express";
import cors from "cors";
import crypto from "crypto";
import { User } from "./User";
import { Tweet } from "./Tweet";

const app = express();

app.use(express.json());
app.use(cors());

var usuarioLogado = {
  id: "a02ffe94-19a9-400f-81a7-7f49a2774ff9",
  name: "Gabriel",
  username: "gabrieldev",
};

const users = [
  {
    id: "a02ffe94-19a9-400f-81a7-7f49a2774ff9",
    name: "Gabriel",
    username: "gabrieldev",
    email: "teste@teste",
    password: "senha",
  },
];
const tweets = [
  {
    id: "e14c1287-3217-410c-a9af-279deefc7efc",
    userId: "gabrieldev",
    content: "Bom dia",
    reply: true,
    likes: [],
    replies: [],
  },
];

//FUNÇÕES ----
function cadastrarUsuario(
  nome: string,
  username: string,
  email: string,
  password: string
) {
  const newUser = new User(nome, username, email, password);

  const sameId = users.some((element) => element.id === newUser.id);
  const sameUsername = users.some(
    (element) => element.username === newUser.username
  );

  if (sameUsername) {
    return "Username já esta em uso";
  } else {
    if (sameId === false) {
      console.log("mesmo id");
      newUser.id = crypto.randomUUID();
      users.push(newUser);
      return "Cadastrado com sucesso!";
    }
  }
}

function cadastrarTweet(userId: string, conteudo: string, reply: boolean) {
  const newTweet = new Tweet(userId, conteudo, reply);

  const sameId = tweets.some((element) => element.id === newTweet.id);

  if (sameId) {
    newTweet.id = crypto.randomUUID();
  }

  tweets.push(newTweet);
  return "Tweet cadastrado";
}

function darLike(posicao: number) {
  if (tweets[posicao - 1].likes.includes(usuarioLogado.username)) {
    const sameUsername = tweets[posicao - 1].likes.findIndex(
      (element) => element === usuarioLogado.username
    );

    tweets[posicao - 1].likes.splice(sameUsername, 1);
    return "ja deu like";
  } else {
    tweets[posicao - 1].likes.push(usuarioLogado.username);
    return "deu like";
  }
}

app.get("/", function (req, res) {
  res.status(200).send("Bem vindo ao Growtwitter");
});

app.get("/user", function (req, res) {
  res.json(users);
});

app.post("/user", function (req, res) {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const validacao = cadastrarUsuario(name, username, email, password);

  if (validacao === "Cadastrado com sucesso!") {
    res.status(200).send(validacao);
  } else {
    res.status(400).send(validacao);
  }
});

app.get("/tweet", function (req, res) {
  res.status(200).send(exibirTweets());
});

app.post("/tweet", function (req, res) {
  const content = req.body.content;
  const reply = req.body.reply;

  if (req.body.content === "" || req.body.content === undefined) {
    res.status(400).send("Digite alguma coisa");
  } else {
    const tweet = cadastrarTweet(usuarioLogado.username, content, reply);
    res.status(200).send(tweet);
  }
});

app.post("/like", function (req, res) {
  const like = req.body.like;
  if (like === "" || like === undefined) {
    res.status(400).send("selecione um tweet");
  } else {
    darLike(like);
    tweets.forEach((tweet) => {
      console.log(`@${tweet.userId}: ${tweet.content}\n likes: ${tweet.likes}`);
    });
  }
  res.status(200).send("rodou");
});

app.post("/login", function (req, res) {
  const username = req.body.username;

  usuarioLogado.username = username;
  res.status(200).send(usuarioLogado);
});
//exibir Tweet

function exibirTweets() {
  tweets.forEach((tweet) => {
    console.log(`@${tweet.userId}: ${tweet.content} \n ${tweet.likes}`);
  });
}

app.listen(3000, function () {
  console.log("Aplicação rodando: http://localhost:3000/");
});
