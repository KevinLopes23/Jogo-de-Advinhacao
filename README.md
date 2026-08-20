<div align="center">
  <h1>🎮 Jogo de Adivinhação</h1>
  <p>Um divertido jogo de palavras construído com React, TypeScript e Vite.</p>
</div>

<br/>

<div align="center">
  <img src="./foto%201.png" alt="Demonstração do Jogo 1" width="45%" />
  &nbsp;&nbsp;
  <img src="./foto%202.png" alt="Demonstração do Jogo 2" width="45%" />
</div>

<br/>

## 📖 Sobre o Projeto

O **Jogo de Adivinhação** é um jogo interativo (estilo "Forca") onde o jogador recebe uma dica e precisa adivinhar a palavra correta, letra por letra. O jogo possui uma margem de tentativas baseada no tamanho da palavra e oferece feedback imediato sobre as letras acertadas e as tentativas esgotadas.

Desenvolvido focado em simplicidade e performance utilizando o ecossistema moderno do React.

## ✨ Funcionalidades

- 💡 **Dicas Dinâmicas:** Cada palavra desafio acompanha uma dica para auxiliar o jogador.
- 🔠 **Validação de Entradas:** O sistema impede que letras duplicadas sejam contabilizadas e notifica o usuário.
- 🎯 **Condição de Vitória/Derrota:** Limite de tentativas dinâmico (tamanho da palavra + 5 tentativas extras).
- 🔄 **Reinício Rápido:** Opção de reiniciar o jogo a qualquer momento ou automaticamente após o final de uma partida.
- 🎨 **Interface Componentizada:** Estrutura bem definida com componentes reutilizáveis para `Header`, `Input`, `Tip`, `Letter` e botões.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React 19](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript que adiciona tipagem estática.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build super rápida para projetos web modernos.
- **CSS Modules** - Para o escopo local e estilização dos componentes.

## 🛠️ Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter a seguinte ferramenta instalada em sua máquina:
- [Node.js](https://nodejs.org/en/) (Versão 18 ou superior recomendada)

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/KevinLopes23/Jogo-de-Advinhacao.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd Jogo-de-Advinhacao
   ```

3. Instale as dependências usando NPM, Yarn, PNPM ou Bun. Exemplo com NPM:
   ```bash
   npm install
   ```

4. Execute a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

5. O servidor iniciará localmente. Acesse no navegador:
   ```text
   http://localhost:5173
   ```

## 📂 Estrutura de Pastas Principais

```
src/
├── assets/         # Imagens, fontes e outros recursos estáticos
├── components/     # Componentes reutilizáveis da interface (Header, Input, Tip, etc)
├── utils/          # Lógicas utilitárias e lista de palavras (words.ts)
├── App.tsx         # Componente principal que gerencia o estado do jogo
├── main.tsx        # Ponto de entrada da aplicação React
└── global.css      # Estilos globais
```

## 🤝 Contribuindo

Este projeto é de código aberto e contribuições são muito bem-vindas! Se você quiser contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Faça o commit de suas alterações seguindo o padrão Conventional Commits (`git commit -m 'feat: adicionando nova funcionalidade'`)
4. Faça o push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo, estudá-lo e modificá-lo.
