function carregar(){}

  const comp_btn_cadastrar = document.getElementById("btn_cadastrar");
  const comp_caixa_nome = document.getElementById("caixa_nome");
  const comp_caixa_email = document.getElementById("caixa_email");

  comp_btn_cadastrar.onclick = () => {
    const nome = comp_caixa_nome.value;
    const email = comp_caixa_email.value;

    const mensagem =
      "Olá " +
      nome +
      " obrigado por cadatrar seu email: " +
      email +
      " - ...!";

    // console.log(mensagem);
    alert(mensagem);
  };
