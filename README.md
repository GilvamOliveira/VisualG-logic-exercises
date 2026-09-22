# ☄️ Meteoro de Lógica

Uma ferramenta interativa para organizar, consultar e registrar exercícios de lógica de programação desenvolvidos no **VisualG**, com suporte e referências diretas às apostilas **Manzano** e **Faccat**.

🔗 **[Acesse o projeto online]([https://github.io](https://gilvamoliveira.github.io/VisualG-logic-exercises/))**

---

## 🚀 Como Navegar

Para rodar o projeto localmente, abra o arquivo `index.html` no seu navegador. Você pode alternar rapidamente entre as apostilas utilizando os botões da interface ou os atalhos do teclado:

* **Apostila Manzano:** Pressione a tecla **M** ou clique no botão **Manz**.
* **Apostila Faccat:** Pressione a tecla **F** ou clique no botão **Fac**.

---

## 📝 Gerenciamento de Exercícios

### Estrutura Inicial
* A lista-base dos exercícios fica localizada em `data/exercises.js`.
* O arquivo contém apenas a organização oficial confirmada (**página, capítulo e número**), sem enunciados inventados.

### Como Registrar e Criar Exercícios
* **Registrar Progresso:** Para salvar o que já foi feito no VisualG, abra o cartão do exercício correspondente, preencha o **título**, o **enunciado** e o **código**, e clique em **Salvar**.
* **Novos Exercícios:** Utilize o botão **Adicionar exercício** para criar novos cartões na interface.

### Armazenamento dos Dados
* **Persistência Local:** Todas as alterações feitas pela interface ficam salvas automaticamente no armazenamento do seu navegador. Os dados são preservados mesmo ao recarregar a página.
* **Alteração Definitiva:** Para mudar a lista padrão do projeto, edite diretamente os grupos no arquivo `data/exercises.js`. Novos navegadores carregarão essa base, enquanto dados já salvos localmente continuarão preservados.

