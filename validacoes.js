function validaObrigatorios(idFormulario) {
  var contaVazios = 0;
  $(".obrigatorio").each(function(){
      if (this.value == '') {
        contaVazios++;
        $(this).css('border','1px solid #ff0000');
      }else{
        $(this).css('border','1px solid green');
      }
  });

  if (contaVazios > 0) {
    swal({
      title: "Atenção!",
      text: "Você precisa preencher todos os campos obrigatórios!",
      type: "warning"
    });
    return false;
  }else{
    // Envia arquivos via AJAX para o Back-end	  
    var dados = $('form[name=formfiltro]').serialize(); // pega tudo o que está escrito no formulário, cada campo.
    
    $.ajax({
        type : 'POST',
        url : 'suaURL.php', // página para qual quer enviar os dados do formulário.
        cache : false,
        data : dados,
        beforeSend : function() {
        },
        success : function(result) {
        }
    });
  }
}
