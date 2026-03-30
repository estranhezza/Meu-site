const botao = document.getElementById('tema-btn');
botao.addEventListener('click',()=> {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        botao.innerText="modo claro";
    } else {
        botao.innerText="modo escuro";
    }
});
