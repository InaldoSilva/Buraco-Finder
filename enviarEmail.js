// Este código adiciona um evento de clique ao elemento com o id 'btn' 
document.getElementById('btn').addEventListener('click', sendMail);

// Esta é a função que será chamada quando o botão com id 'btn' for clicado
function sendMail (e) {
    // Previne o comportamento padrão do clique em um botão dentro de um formulário.
    e.preventDefault();
    
    // Obtém os valores dos campos de entrada do formulário com base em seus respectivos IDs.
    const mail = document.getElementById('email').value;
    const data = document.getElementById('data').value;
    const endereco = document.getElementById('endereco').value;
    const uploadFile = document.getElementById('upload-file').value;
    const text = document.getElementById('texto').value;

    // Verifica se todos os campos foram preenchidos pelo usuário.
    if (mail && endereco && text && uploadFile && data) {
        // Envia o e-mail usando Email.js
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "alertaburacos@gmail.com",
            Password: "25F8B01961CAF72625E2463BB6C200CEF888", // Evite expor senhas diretamente
            To: "inaldogtsilva@gmail.com",
            From: "alertaburacos@gmail.com",
            Subject: `${mail} enviou um e-mail via formulário`,
            Body: `E-mail: ${mail} \nEndereço: ${endereco} \nData: ${data} \nMensagem: ${text}`
        }).then(() => {
            alert('Mensagem enviada!');
            location.reload();
        });
    } else {
        alert('Preencha todos os campos!');
    }    
}
