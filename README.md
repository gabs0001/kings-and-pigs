Com certeza\! A biblioteca **GSAP (GreenSock Animation Platform)** é um excelente detalhe para adicionar, pois ela é amplamente usada para criar animações de alta performance e vai reforçar a qualidade visual do seu projeto.

Vou atualizar o README do **Kings and Pigs** para incluir o uso da GSAP, destacando onde ela pode estar sendo utilizada (por exemplo, na transição entre níveis, no movimento da câmera, ou em pequenos detalhes do *player*).

-----

## 👑 Kings and Pigs: Level Builder e Animação 2D

Uma demonstração técnica de um ambiente 2D que foca na renderização dinâmica de mapas e detecção de colisão. O objetivo do jogador é guiar o personagem (*King*) através de diferentes níveis gerados com a ferramenta **Tiled**, alcançando a porta de saída para progredir.

-----

## ✨ Destaques Técnicos e Funcionalidades

Este projeto explora a implementação de uma *engine* de jogo 2D básica, sem o uso de *frameworks*, e utiliza uma biblioteca externa para garantir animações de alta qualidade.

  * **Renderização Dinâmica de Mapas:** Utilização da ferramenta **Tiled** para criar *tilemaps* (mapas de blocos) que são lidos e renderizados dinamicamente no **HTML5 Canvas**.
  * **Múltiplos Níveis:** Implementação de um sistema de progressão que carrega o próximo mapa ao alcançar a porta, com 3 níveis (*stages*) atualmente desenvolvidos.
  * **Detecção de Colisão Precisa:** Lógica de colisão implementada para interação do *player* com o mapa (chão, plataformas, paredes).
  * **Animação de *Sprites***: O *player* (*King*) possui animações fluidas controladas por *spritesheet* (parado, correndo).
  * **Controle de Física:** Implementação de um sistema de **Gravidade** para simular queda e pulo.

-----

## 💻 Tecnologias Utilizadas

Este projeto foi construído inteiramente com tecnologias web, JavaScript e uma ferramenta de *design* de níveis:

  * **HTML5 Canvas** (Renderização gráfica 2D)
  * **CSS3** (Estilização básica)
  * **JavaScript (Puro)** (Lógica do jogo, classes, física e controle)
  * **GSAP (GreenSock Animation Platform)**: Utilizada para criar animações fluidas, transições de câmera, efeitos de tela e detalhes da movimentação do *player*.
  * **Tiled** (Ferramenta para criação de mapas e exportação de dados de *tilemap* e colisão)

-----

## 🛠️ Primeiros Passos

Este projeto não requer dependências complexas (apenas um navegador web moderno).

### 📥 Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd kings-and-pigs
    ```
3.  **Abra o arquivo `index.html`** no seu navegador.

### 🕹️ Controles

| Ação | Tecla |
| :--- | :--- |
| Mover para Esquerda | **A** |
| Mover para Direita | **D** |
| Pular | **Espaço** |

-----

## 🧠 Refatorações e Implementações Próprias

Este projeto serviu como uma oportunidade para aprimorar o código base de um treinamento, focando em organização e performance:

  * **Refatoração de Classes:** Reestruturação das classes principais (Player, Sprite, Nível) para maior modularidade e aderência a princípios de POO.
  * **Ajustes Finos de Animação e Delay:** Otimização dos parâmetros de animação (*frame rate* e atraso de transição) para uma experiência visual mais fluida.
  * **Controle de Gravidade Customizado:** Ajustes na *engine* de física para tornar a sensação de pulo e queda mais responsiva.

-----

## ⚙️ Arquitetura do Mapa (Tiled)

O *design* de níveis é gerado externamente e consumido pelo JavaScript:

1.  **Criação no Tiled:** Os mapas (`.json` ou similar) definem onde estão os blocos (tiles), o *player* e a porta.
2.  **Camadas de Colisão:** Um grupo específico de blocos ou uma camada de objetos é usado para gerar os limites de colisão do cenário.
3.  **Renderização:** O JavaScript lê os dados do **Tiled** e renderiza os *tiles* corretos e, em seguida, utiliza os dados da camada de colisão para criar os *hitboxes* invisíveis no jogo.
