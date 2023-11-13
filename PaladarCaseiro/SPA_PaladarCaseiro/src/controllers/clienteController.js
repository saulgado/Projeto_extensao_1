// cursoController.js

const api = require('../config/api');

// Método para buscar todos os cursos
exports.getAllClientes = async (req, res) => {
  try {
    // Faz uma solicitação GET para a API que fornece os cursos
    const response = await api.get(`/clientes`);

    // Obtenha os dados JSON da resposta
    const clientes = response.data;

    // Renderiza a página curso/index.handlebars e passa os cursos como contexto
    res.render('cliente/', { clientes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
};

// Método para buscar curso para edição
exports.editCliente = async (req, res) => {
  try {
    const { id } = req.params;
    // Faz uma solicitação GET para a API que fornece o curso
    const response = await api.get(`/clientes/${id}`);

    // Obtenha os dados JSON da resposta
    const cliente = response.data;

    // Renderiza a página curso/edit.handlebars e passa o curso como contexto
    res.render('cliente/edit', { cliente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar cliente' });
  }
};

// Método para apresentar formulário de criação do curso
exports.createCliente = async (req, res) => {
  try {
    // Renderiza a página curso/create.handlebars
    res.render('cliente/create');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao mostrar formulário de criação de clientes' });
  }
};


// Método para buscar todos os cursos
exports.searchClientesByName = async (req, res) => {
  try {
    // Obter o valor inserido no campo de pesquisa
    const valorPesquisa = req.body.valorPesquisa

    // Fazer uma solicitação GET para buscar banners com base no título
    const response = await api.get(`/clientes/search?nome=${valorPesquisa}`)

    // Obtenha os dados JSON da resposta
    const clientes = response.data;

    // Renderiza a página curso/index.handlebars e passa os cursos como contexto
    res.render('cliente/', { clientes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
};

