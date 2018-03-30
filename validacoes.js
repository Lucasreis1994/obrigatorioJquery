function validaObrigatorios() {
	$(".obrigatorio").each(function(){
        // alert($(this).val());
        if (this.value == '') {
        	mensagem = 'Favor preencher os campos obrigatórios';
        	tipo = 'error';
        	$(this).css('border','1px solid #ff0000');
        }else{
        	mensagem = 'Sucesso';
        	tipo = 'success';
        	$(this).css('border','1px solid green');
        }
    });

    swal("Atenção!", mensagem, tipo);
}