// controllers/clienteController.js

const Cliente = require('../models/Cliente');
const { Op } = require('sequelize');


// Método para criar um novo cliente
exports.createCliente = async (req, res) => {
  try {
    const { nome, celular, email, cpf, ordem } = req.body;

    const cliente = await Cliente.create({ nome, celular, email, cpf, ordem });
    res.status(201).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao adicionar o cliente' });
  }
};



// Método para listar todos os clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      order: [['ordem', 'ASC']],
  });
    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os clientes' });
  }
};

// Método para buscar um cliente por ID
exports.getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      res.status(404).json({ error: 'Cliente não encontrado' });
      return;
    }
    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o cliente' });
  }
};

// Método para buscar clientes por nome
exports.searchClientesByName = async (req, res) => {
  try {
    const { nome } = req.query; // Recupera o nome da consulta da query

    // Realiza a busca no banco de dados com base no título
    const clientes = await Cliente.findAll({
      where: {
        nome: {
          [Op.like]: `%${nome}%`, // Pesquisa por títulos que contenham o termo
        },
      },
    });

    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar clientes pelo nome' });
  }
};


// Método para atualizar um curso por ID
exports.updateCliente = async (req, res) => {
    const { id } = req.params;
    try {
      const { nome, celular, email, cpf, ordem } = req.body;

      const [updated] = await Cliente.update({ nome, celular, email, cpf, ordem}, {
        where: { id },
      });
      if (updated) {
        const updatedCliente = await Cliente.findByPk(id);
        res.status(200).json(updatedCliente);
      } else {
        res.status(404).json({ error: 'Cliente não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar o cliente' });
    }
  };

// Método para excluir um curso por ID
exports.deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Cliente.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(200).json({ message: 'Cliente excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o cliente' });
  }
};
