var senha,senhaCorreta="A0B1C2";

senha=prompt ("Digite uma senha")

if (senha==senhaCorreta){
    document.write ("Liberado");
}
else {
    senha=prompt ("Digite uma senha")
    if (senha==senhaCorreta){
        document.write ("Liberado");
    }
    else {
        senha=prompt ("Digite uma senha")
        if (senha==senhaCorreta){
            document.write ("Liberado");
        }
        else{
            document.write ("Usuário bloqueado");
        }
    }
    
}


