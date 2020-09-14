//$('img').css('opacity', function () {
//	$(this).wrap(function () {
//		return "<div class='img-loading'></div>";
//	});
//	return '0';
//}).one('load', function () {
//	var img = $(this);
//	$(this).unwrap();
//	$(this).animate({
//		opacity: 1
//	}, 500);
//}).each(function () {
//	if (this.complete) $(this).load();
//});
//Exibe o loading no final da tabela
function loadingTable(mensagem) {
	if (!mensagem) mensagem = "";
	$('table tbody').append("<tr class='loading-table'><td colspan='100'>" + mensagem + "</td></tr>");
};
//Verifica o contador de processos e para de exibir o loading
function unLoadingTable() {
	$('table tbody tr.loading-table').remove();
};
//Correção para o Sky Forms
$("form.sky-form label.checkbox").children('i').remove()
$("<i></i>").insertAfter($("form.sky-form label.checkbox input:nth-child(1)"));