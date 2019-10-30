import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Aprendiz Node",
          avatar: "https://image.freepik.com/vetores-gratis/icone-de-perfil-masculino-avatar-hipster-homem-usar-fones-de-ouvido_48369-8728.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a descrição do que é Node JS?",
        comments: [
          {
            id: 1,
            author: {
              name: "Bot React",
              avatar: "https://jsonworld.com/content/uploads/blog-images/react.png"
            },
            content: "Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos. [ http://nodebr.com/o-que-e-node-js ]"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Mateus Aguiar",
          avatar: "https://avatars3.githubusercontent.com/u/53477918?s=460&v=4"
        },
        date: "04 Dez 2019",
        content: "Pessoal, alguém já terminou o desafio 9 para fezermos code review?",
        comments: [
          {
            id: 1,
            author: {
              name: "Bot React",
              avatar: "https://jsonworld.com/content/uploads/blog-images/react.png"
            },
            content: "Opa, Mateus! eu ja finalizei tudo, se quiser fazer agora, estou disponivel. Chama pv!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Mateus Aguiar",
          avatar: "https://avatars3.githubusercontent.com/u/53477918?s=460&v=4"
        },
        date: "04 Dez 2019",
        content: "Hoje finalizei o 4 desafio porposto pelo Bootcamp, onde o desafio pedia para fazer uma interface semelhante com a do Facebook utilizando React. ",
        comments: [
          {
            id: 1,
            author: {
              name: "Bot React",
              avatar: "https://jsonworld.com/content/uploads/blog-images/react.png"
            },
            content: "Show, Mateus!"
          }
        ]
      }
    ]
  };

  render(){
    return (
      <>
        <Header/>
        <div className="postlist">
          { 
            this.state.posts.map(
              post => <Post key={post.id} data={post} />
              
            ) 
          }
        </div>        
      </>
    );
  }
}

export default PostList;