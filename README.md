<h1 align="center">🐾 AuDoção - Encontre seu novo melhor amigo</h1>

<p align="center">
  <img src="https://img.shields.io/badge/status-em_constru%C3%A7%C3%A3o-red" alt="Status: em construção" />
</p>

O **AuDoção** é uma plataforma web focada em facilitar o processo de adoção responsável de animais em Recife e região. O projeto combina um design moderno e minimalista com uma interface intuitiva para conectar protetores e futuros adotantes.

<!-- 📸 Adicione aqui um screenshot ou GIF da interface funcionando -->
<!-- <p align="center"><img src="link-do-screenshot" width="80%" /></p> -->

## 🚀 Tecnologias Utilizadas

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/CSS_Grid_%26_Flexbox-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Grid & Flexbox" />
</p>

* **HTML5**: Estrutura semântica e acessível
* **Sass (SCSS)**: Pré-processador CSS para uma estilização modular e organizada
* **Flexbox & CSS Grid**: Para layouts responsivos e alinhamentos precisos
* **Google Fonts**: Tipografia moderna (Poppins) focada em legibilidade

## 🎨 Design System

O visual do projeto segue uma estética **Clean & Glassmorphism**, priorizando:

* **Cores Principais**: Amarelo (Energia e Atenção) e Azul Escuro (Confiança e Seriedade)
* **Componentes**: Cards arredondados, botões estilo "pílula" e efeitos de desfoque (backdrop-filter)
* **Responsividade**: Interface adaptável para dispositivos móveis e desktop

## 📁 Estrutura de Pastas

```
audocao/
├── scss/           # Arquivos fonte do Sass
│   ├── pages/      # Estilos específicos por página (_home.scss, _login.scss, etc)
│   └── main.scss   # Arquivo mestre que importa os módulos
├── src/            # Ativos (Imagens de pets e ícones)
├── home.html       # Página principal de listagem
├── login.html      # Página de autenticação
└── style.css       # CSS compilado (gerado pelo Sass)
```

## ⚙️ Como rodar o projeto

**1. Clone o repositório**

```bash
git clone https://github.com/seu-usuario/audocao.git
```

**2. Compile o Sass**

Certifique-se de ter o Dart Sass instalado. No terminal, na raiz do projeto, execute:

```bash
sass scss/main.scss style.css --watch
```

**3. Abra o navegador**

Basta abrir o arquivo `home.html` no seu navegador de preferência.

## 🛠️ Funcionalidades

- [x] Interface de Login e Cadastro com validação visual
- [x] Home com Grid responsivo de pets
- [x] Filtros por espécie (Cães, Gatos e Outros)
- [x] Perfil detalhado do animal com formulário de interesse
- [ ] Integração com Backend/API para listagem real de animais

---

<p align="center">
🎨 <strong>Desenvolvedores:</strong> Paula Arruda e Carolina Batatinha<br>
