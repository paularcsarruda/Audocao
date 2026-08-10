
# 🐾 AuDoção - Encontre seu novo melhor amigo 

O **AuDoção** é uma plataforma web focada em facilitar o processo de adoção responsável de animais em Recife e região. O projeto combina um design moderno e minimalista com uma interface intuitiva para conectar protetores e futuros adotantes.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as melhores práticas de front-end:

```
* **HTML5**: Estrutura semântica e acessível.
* **Sass (SCSS)**: Pré-processador CSS para uma estilização modular e organizada.
* **Flexbox & CSS Grid**: Para layouts responsivos e alinhamentos precisos.
* **Google Fonts**: Tipografia moderna (Poppins) focada em legibilidade.
```

## 🎨 Design System

```
O visual do projeto segue uma estética **Clean & Glassmorphism**, priorizando:
* **Cores Principais**: Amarelo (Energia e Atenção) e Azul Escuro (Confiança e Seriedade).
* **Componentes**: Cards arredondados, botões estilo "pílula" e efeitos de desfoque (backdrop-filter).
* **Responsividade**: Interface adaptável para dispositivos móveis e desktop.
```

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

##⚙️ Como rodar o projeto

1.  **Clone o repositório**:
    ```bash
    git clone [https://github.com/seu-usuario/audocao.git](https://github.com/seu-usuario/audocao.git)
    ```

2.  **Compile o Sass**:
    Certifique-se de ter o Dart Sass instalado. No terminal, na raiz do projeto, execute:
    ```bash
    sass scss/main.scss style.css --watch
    ```

3.  **Abra o navegador**:
    Basta abrir o arquivo `home.html` no seu navegador de preferência.

## 🛠️ Funcionalidades em Desenvolvimento

- [x] Interface de Login e Cadastro com validação visual.
- [x] Home com Grid responsivo de pets.
- [x] Filtros por espécie (Cães, Gatos e Outros).
- [ ] Integração com Backend/API para listagem real de animais.
- [x] Perfil detalhado do animal com formulário de interesse.

---
🎨 **Desenvolvedores:** Paula Arruda e Carolina Batatinha  
🎓 **Contexto:** Projeto desenvolvido para portfólio e prática de Desenvolvimento de Sistemas (ADS).

