function validarCampoNome()
{
    if(document.form.CAMPO_NOME.value == '')
    {
        document.getElementById('MENSAGEM_NOME').innerHTML = "O campo nome é obrigatório";
        return false;
    }
    else
    {
        document.getElementById('MENSAGEM_NOME').innerHTML = "";
        return true;
    }
}

function validarCampoSigla()
{
    if(document.form.CAMPO_SIGLA.value == '')
    {
        document.getElementById('MENSAGEM_SIGLA').innerHTML = "O campo sigla é obrigatório";
        return false;
    }
    else
    {
        document.getElementById('MENSAGEM_SIGLA').innerHTML = "";
        return true;
    }
}

function validarCampoStatus()
{
    if(document.form.CAMPO_STATUS.value == '')
    {
        document.getElementById('MENSAGEM_STATUS').innerHTML = "O campo status é obrigatório";
        return false;
    }
    else
    {
        document.getElementById('MENSAGEM_STATUS').innerHTML = "";
        return true;
    }
}

function validarCampos()
{
    if(validarCampoNome() && validarCampoSigla() && validarCampoStatus())
    {
        document.getElementById('MENSAGEM_SUCESSO').innerHTML = "O cadastro foi realizado com sucesso";
    }
    else
    {
        document.getElementById('MENSAGEM_INSUCESSO').innerHTML = "Existem campos a serem preenchidos";
    }
}