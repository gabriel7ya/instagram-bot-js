  

<h1 align="center">
<br>
INSTAGRAM-BOT-JS
<br>
<br>
  <img src="src/screenshot.gif" alt="INSTAGRAM-BOT-JS" width="100%">
<br>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</h1>

<p align="center">O projeto visa buscar resultados de postagens de maneira automatizada, a fim de evitar erros humanos durante a captura e agilizar a produção de tarefas repetitivas nas mídias.</p>

<hr />


## Tecnologias e ferramentas utilizadas :hammer_and_wrench:

- 💹 **Node Js**
- 💹 **Puppeteer**


## Para executar o projeto :computer:
Para obter uma cópia local instalada e funcionando, siga estas etapas simples do exemplo.

1. Clone o repositório
  ```sh
  git clone https://github.com/gabriel7lib/instagram-bot-js.git
  ```
2. Navegue até o diretório
  ```sh
  cd instagram-bot-js
  ```
3. Baixe os pacotes (puppeteer)
  ```sh
  npm install 
  ```


## Como usar :clapper:

4. Rode o comando passando a `URL` da publicação do instagram como argumento
  ```sh
  node app [URL_DA_POSTAGEM]
  ```

Você deve receber um retorno como esse:
  ```sh
  [
    'user_insta',
    'user.instagram',
    'u_insta.gram',
    'instagram-user',
    'u.ser_insta',
  ]
  ```
Essas foram as pessoas que comentaram na postagem. O código já elimina repetições.


## Licença
[![MIT License][license-shield]][license-url]


<!-- CONTACT -->
## Contato

Gabriel Oliveira - [@irmaodomateus](https://instagram.com/irmadomateus) - gabriel@biozsec.com.br

Link do projeto: [https://github.com/gabriel7lib/instagram-bot-js](https://github.com/gabriel7lib/instagram-bot-js)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/gabriel7lib/instagram-bot-js?style=for-the-badge
[contributors-url]: https://github.com/gabriel7lib/instagram-bot-js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gabriel7lib/instagram-bot-js?style=for-the-badge
[forks-url]: https://github.com/gabriel7lib/instagram-bot-js/network/members
[stars-shield]: https://img.shields.io/github/stars/gabriel7lib/instagram-bot-js?style=for-the-badge
[stars-url]: https://github.com/gabriel7lib/instagram-bot-js/stargazers
[issues-shield]: https://img.shields.io/github/issues/gabriel7lib/instagram-bot-js?style=for-the-badge
[issues-url]: https://github.com/gabriel7lib/instagram-bot-js/issues
[license-shield]: https://img.shields.io/github/license/gabriel7lib/instagram-bot-js?style=for-the-badge
[license-url]: https://github.com/gabriel7lib/instagram-bot-js/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gabriel7ya/
[product-screenshot]: images/screenshot.png
