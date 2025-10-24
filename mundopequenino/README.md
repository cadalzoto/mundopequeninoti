# Mundo Kids - E-commerce de Roupas Infantis

## 📋 Descrição do Projeto

Site e-commerce completo para a loja de roupas infantis **Mundo Pequenino**. O projeto foi desenvolvido com HTML5, CSS3 e JavaScript puro, apresentando um design moderno com cores vibrantes e infantis (amarelo, verde, azul e rosa), ideal para o público infantil. O logo da empresa foi atualizado para a imagem fornecida.

## 🎨 Características de Design

- **Paleta de Cores Infantil**: Amarelo (#FFD966), Verde (#7EC850), Azul (#5BA3D0), Rosa (#FF8FB1)
- **Layout Responsivo**: Adaptável para desktop, tablet e mobile
- **Gradientes Suaves**: Utilização de gradientes para criar transições visuais agradáveis
- **Animações**: Efeitos de hover, transições suaves e micro-interações
- **Tipografia**: Fonte Segoe UI com hierarquia clara e legível

## 📁 Estrutura de Arquivos

```
loja-infantil/
├── MundoPequeninoLogo.png # Novo logo da empresa
├── index.html          # Página inicial com produtos em destaque
├── catalogo.html       # Catálogo completo com filtros
├── meninos.html        # Produtos para meninos
├── meninas.html        # Produtos para meninas
├── sobre.html          # Sobre a loja e valores
├── contato.html        # Formulário de contato
├── unissex.html        # Produtos unissex
├── style.css           # Estilos globais do site
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🚀 Funcionalidades

### Carrinho de Compras
- Adicionar produtos ao carrinho
- Visualizar itens no modal do carrinho
- Remover itens individualmente
- Cálculo automático do total
- Persistência de dados com localStorage
- Contador visual de itens no ícone do carrinho

### Navegação
- Menu responsivo com toggle para mobile
- Links entre todas as páginas
- Smooth scroll para âncoras internas
- Breadcrumb visual através do header

### Catálogo
- Filtro por categoria (Meninas, Meninos, Unissex)
- Ordenação por preço (crescente/decrescente) e nome
- Grid responsivo de produtos
- Badges de "Novo" e "Promoção"
- Preços com desconto destacados

### Formulário de Contato
- Campos validados (nome, email, telefone, assunto, mensagem)
- Feedback visual ao enviar
- Layout em duas colunas (informações + formulário)

### Animações
- Fade in ao scroll
- Hover effects em cards e botões
- Transições suaves em todos os elementos interativos
- Animação no contador do carrinho

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Variáveis CSS para cores
  - Flexbox e Grid Layout
  - Media queries para responsividade
  - Gradientes e sombras
  - Animações e transições
- **JavaScript ES6+**:
  - Manipulação do DOM
  - LocalStorage API
  - Event listeners
  - Intersection Observer API
  - Arrow functions e template literals
- **Font Awesome 6.0**: Ícones vetoriais

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: > 992px (layout completo)
- **Tablet**: 768px - 992px (menu hambúrguer, ajustes de grid)
- **Mobile**: < 768px (layout em coluna única, otimizado para toque)

## 🎯 Páginas do Site

### 1. **index.html** - Página Inicial
- Hero section com chamada para ação
- Produtos em destaque (6 produtos)
- Categorias (Meninas, Meninos, Todos)
- Seção de benefícios (Frete grátis, Compra segura, etc.)

### 2. **catalogo.html** - Catálogo Completo
- 12 produtos com preços variados
- Filtros de categoria
- Ordenação de produtos
- Grid responsivo

### 3. **meninos.html** - Roupas para Meninos
- 9 produtos específicos para meninos
- Header temático com cores azuis/verdes
- Produtos com preços de R$ 34,90 a R$ 129,90

### 4. **meninas.html** - Roupas para Meninas
- 9 produtos específicos para meninas
- Header temático com cores rosa/roxo
- Produtos com preços de R$ 49,90 a R$ 109,90

### 5. **unissex.html** - Roupas Unissex
- 9 produtos específicos para unissex
- Header temático com cores amarelo/verde
- Produtos com preços de R$ 39,90 a R$ 139,90

### 6. **sobre.html** - Sobre a Loja
- História da empresa
- Valores (Amor e Cuidado, Qualidade, Sustentabilidade, Alegria)
- Imagem institucional

### 6. **contato.html** - Contato
- Formulário completo de contato
- Informações de endereço, telefone e email
- Horário de atendimento
- Layout em duas colunas

## 🎨 Paleta de Cores

```css
--primary-color: #FFD966;      /* Amarelo do logo */
--secondary-color: #7EC850;    /* Verde do logo */
--accent-color: #5BA3D0;       /* Azul do logo */
--purple-color: #FF8FB1;       /* Rosa do logo */
--green-color: #7EC850;        /* Verde do logo */
--dark-color: #2C5F7C;         /* Azul escuro do logo */
--text-color: #2C5F7C;         /* Azul escuro para texto */
--heading-color: #2C5F7C;      /* Azul escuro para títulos */
```

## 💡 Como Usar

### Abrir o Site Localmente

1. **Clone ou baixe** os arquivos do projeto
2. **Abra** o arquivo `index.html` em um navegador moderno
3. **Navegue** entre as páginas usando o menu superior

### Testar com Servidor Local

```bash
# Usando Python 3
python3 -m http.server 8080

# Acesse no navegador
http://localhost:8080
```

## 🔧 Depuração e Manutenção

### Estrutura do CSS
- Variáveis CSS no topo para fácil customização
- Organização por seções (Header, Hero, Products, Footer, etc.)
- Media queries agrupadas no final
- Comentários descritivos

### Estrutura do JavaScript
- Funções bem nomeadas e documentadas
- Separação de responsabilidades
- Event listeners centralizados
- Uso de localStorage para persistência

### Boas Práticas Implementadas
- ✅ Código HTML semântico
- ✅ Acessibilidade (aria-labels, alt em imagens)
- ✅ SEO básico (meta tags, títulos descritivos)
- ✅ Performance (CSS e JS otimizados)
- ✅ Compatibilidade cross-browser

## 📊 Produtos Cadastrados

O site possui **20 produtos únicos** distribuídos em:
- **9 produtos** para meninas
- **9 produtos** para meninos
- **9 produtos** unissex

Faixa de preços: **R$ 34,90 a R$ 139,90**

## 🎁 Funcionalidades Extras

- **LocalStorage**: Carrinho persiste entre sessões
- **Smooth Scroll**: Navegação suave entre seções
- **Intersection Observer**: Animações ao scroll
- **Modal Responsivo**: Carrinho em modal com overlay
- **Feedback Visual**: Animações ao adicionar produtos

## 📞 Informações de Contato (Fictícias)

- **Endereço**: Rua das Crianças, 456, São Paulo, SP
- **Telefone**: (11) 98765-4321
- **Email**: contato@mundokids.com.br
- **Horário**: Segunda a Sexta: 9h às 18h | Sábado: 9h às 13h

## 🌟 Destaques do Projeto

1. **Design Infantil Profissional**: Cores vibrantes e atrativas para o público infantil, baseadas no novo logo.
2. **E-commerce Funcional**: Sistema de carrinho completo e funcional
3. **Múltiplas Páginas**: Navegação completa entre 7 páginas diferentes
4. **Responsividade Total**: Funciona perfeitamente em todos os dispositivos
5. **Código Limpo**: HTML, CSS e JavaScript bem estruturados e comentados

## 📝 Licença

Este é um projeto de demonstração educacional. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para o Mundo Kids**

