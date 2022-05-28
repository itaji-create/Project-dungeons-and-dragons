# Boas vindas ao repositório do projeto Trybers and Dragons!


  <summary><strong>👨‍💻 Descrição do Projeto</strong></summary><br />

  Neste projeto foi aplicado os princípios da arquitetura `SOLID` e os princípios de `POO` em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos `RPG` (_Role Playing Game_).

  ---

  <summary><strong>🐉 Contextualizando 🐲</strong></summary><br />
  As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados **monstros** que não possuem uma raça específica, mas podem lutar.

  Alguns seres também possuem uma **energia** e, ao treinarem o uso da energia, passam a possuir um **arquétipo**. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em D&D, podemos citar guerreiro, mago e necromante.

  Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.

### 1 - Classe `Race`

  <summary><strong>➕ Detalhes </strong></summary>

No universo quase todos os seres racionais têm uma raça e, embora todas as raças de personagens sejam humanoides, cada uma tem as suas particularidades.

A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nos habitantes desse universo.


### 2 - Classes que herdam de `Race`
  
Já foi dito anteriormente que há uma diversidade de raças neste universo e agora chegou a hora de você saber mais a respeito de algumas delas. Nesta segunda *quest*, você irá criar classes para quatro raças que existem no mundo.


### 3 - Crie a interface `Energy`
  
Energia é um atributo vital para a maioria dos seres. No contexto de `Trybers and Dragons`, a energia gasta ao se andar, nadar, escalar ou lutar é chamada de *"stamina"* .
Contudo, esse universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta é chamada de *"mana"*.

<br>

---

### 4 - Classe `Archetype`

<details>
  <summary><strong>➕ Detalhes </strong></summary>
  
Dentro do nosso universo, os seres têm talentos especiais e cada um desses talentos tem o seu nome dentro de T&D.
Aqui vamos ter alguns atributos super legais e necessários, que representarão o nome, a potência do seu ataque especial e o custo energético para utilizá-lo. Por isso, sua próxima *quest* será.


### 5 - Classes que herdam de `Archetype`
  
Como você pode imaginar, há diversos arquétipos diferentes no mundo de *Trybers and Dragons*, cada um com as suas peculiaridades e alinhamentos.
Agora, chegou a hora de você conhecer alguns desses arquétipos. E o que poderia ser melhor para isso do que criar classes para eles?

### 6 - interface `Fighter`
  
Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos, convicções e personalidades pode não ser um lugar sempre amigável. Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas. Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.


### 7 - Classe `Character`


Maravilha! Agora já temos tanto as nossas raças quanto os nossos arquétipos e interfaces definidos. Mas antes de sair por aí entrando em tavernas e calabouços.

Cada personagem será composta tanto por uma raça quanto por um arquétipo. Essa classe reunirá um conjunto de características que terão o poder de fazer desse ser o mais único possível. Além disso, personagens devem possuir tudo o que se espera de alguém que luta.

---

### 8 - interface `SimpleFighter`

Uau, o nosso universo de T&D está ficando fabuloso! No entanto, nem todo mundo que luta possui capacidades avançadas, como ter uma defesa ou realizar ataques especiais. Dito isto, vamos para mais uma *quest*: **criar a interface lutador simples**

---

### 9 - Classe `Monster`

Se existem seres que implementam a `interface Fighter`, deve existir seres que implementam a `interface SimpleFighter` também, não é ? Estes são os `Monsters`, criaturas bestiais que apenas atacam outros seres.

---

### 10 - Classe `PVP`

A ideia do mundo de T&D ser completamente pacífico provavelmente já deve ter desaparecido da sua mente depois das suas últimas *quests*. 
Nesse mundo, existem lutas, muitas delas inclusive épicas, denominadas `Battles` (batalhas). Sua representação geral/abstrata já foi fornecida anteriormente, entretanto, existem tipos específicos de batalhas. Uma dessas batalhas chamamos de `PVP`, batalhas entre personagens (ou *player versus player*), que só podem acontecer entre personagens lutadores (`Fighters`). 🧙‍♀️ ⚔️ 🧙‍♂️

---

### 11 - Classe `PVE`

<details>
  <summary><strong>➕ Detalhes </strong></summary>

Nem todas as batalhas são entre personagens lutadoras (`Character`), afinal, há perigos à solta que espreitam ao escurecer, em densas florestas ou em calabouços profundos.

Monstros representam alguns destes perigos, assim, temos as batalhas do tipo `PVE`(*player versus environment*), em que personagens (sempre do tipo `Fighter`) podem lutar contra um ou mais monstros assustadores (`SimpleFighter`).

### 12 - Classe `Dragon`


Seria muito estranho se esse mundo se chamasse Trybers and Dragons e não existissem `Dragons`, não é mesmo?
Estes seres magníficos são representados como monstros aqui, mas com a característica especial de possuírem elevados valores de pontos de vida.


---

### 13 - objetos no arquivo `index`

Agora repare que, por mais que a gente saiba o que são `Monster`, `Character`, `Dragon`, `PVE`, etc, nenhum desses foi visto em ação. Então a sua última *quest* para completar essa aventura é dar vida às suas personagens e criar algumas instâncias das classes criadas anteriormente. 🪄
