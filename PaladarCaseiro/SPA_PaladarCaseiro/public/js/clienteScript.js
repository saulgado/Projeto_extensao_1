
const url = "http://localhost:3000/";


///     FUNÇÕES DO CADASTRO DE PROFESSORES  ///
// Função para confirmar a exclusão do professor
function confirmDeleteCliente(id) {

    //busca o token armazenado no login
    const token = localStorage.getItem('token');

    // Configurar o cabeçalho com a autorizção do token
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    };

    // Fazer a requisição de exclusão usando Axios
    axios.delete(`${url}api/clientes/${id}`, config)
        .then(response => {
            console.log(response.data);

            // Fechar o modal após a exclusão
            $(`#confirmDeleteModal${id}`).modal('hide');

            Swal.fire({
                icon: 'success',
                title: 'Cliente excluído com sucesso',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                // Após o tempo definido (1500 ms), redirecione para a página desejada
                window.location.href = `../clientes/`;
            });
        })
        .catch(error => {
            console.error(error);
            // Lida com erros, se necessário
        });
}



// Função de validação do formulário
function validateForm(formData) {
    const nome = formData.get('nome');
    const celular = formData.get('celular');
    const email = formData.get('email');
    const cpf = formData.get('cpf');
    const ordem = formData.get('ordem');

    if (!nome || !celular || !email || !cpf || !ordem) {
        // Exibir mensagem de erro para o usuário
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, preencha todos os campos obrigatórios!',
        });
        return false; // Impede o envio do formulário
    }

    if (ordem < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A ordem deve ser um número maior ou igual a 1!',
        });
        return false;
    }

    return true; // Todos os campos estão preenchidos corretamente
}


// Evento quando o botão "Salvar" do formulário de edição é clicado
function UpdateClienteClick(event) {

    event.preventDefault(); // Evita o envio padrão do formulário

    // Obter os dados do formulário de edição
    const formData = new FormData(document.querySelector('#editClienteForm'));

    // Obter o ID do professor a ser editado
    const clienteId = document.querySelector('#editClienteId').value;

    // Chama a função de validação antes de enviar a solicitação PUT
    if (validateForm(formData)) {


        //busca o token armazenado no login
        const token = localStorage.getItem('token');

        // Configurar o cabeçalho com a autorizção do token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        };

        // Fazer uma solicitação PUT para atualizar o profesor
        axios.put(`${url}api/clientes/${clienteId}`, formData, config)
            .then(response => {
                //console.log(response.data);

                Swal.fire({
                    icon: 'success',
                    title: 'Dados gravados com sucesso',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    // Após o tempo definido (1500 ms), redirecione para a página desejada
                    window.location.href = `../clientes/`;
                });
            })
            .catch(error => {
                console.error(error);
                // Lida com erros, se necessário
            });

    }
};


// Evento quando o botão "Salvar" do formulário de edição é clicado
function CreateClienteClick(event) {

    event.preventDefault(); // Evita o envio padrão do formulário

    // Obter os dados do formulário de edição
    const formData = new FormData(document.querySelector('#createClienteForm'));


    // Chama a função de validação antes de enviar a solicitação POST
    if (validateForm(formData)) {

        //busca o token armazenado no login
        const token = localStorage.getItem('token');

        // Configurar o cabeçalho com a autorizção do token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        };

        // Fazer uma solicitação POST para criar o curso
        axios.post(`${url}api/clientes/`, formData, config)
            .then(response => {
                //console.log(response.data);

                Swal.fire({
                    icon: 'success',
                    title: 'Cliente criado com sucesso',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    // Após o tempo definido (1500 ms), redirecione para a página cursos
                    window.location.href = `../clientes/`;
                });
            })
            .catch(error => {
                console.error(error);
                // Lida com erros, se necessário
            });

    }
};

