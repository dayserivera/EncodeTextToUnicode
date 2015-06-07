function convertFunction() {
	var originalText = document.getElementById("original").value;

	var convertidoText = escape(toUnicode(originalText));

	document.getElementById("convertido").value = fromUrlEncodeToUnicode(convertidoText);
	
	return false;

}

function replaceAll(str, de, para) {
	var pos = str.indexOf(de);
	while (pos > -1) {
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
	return (str);
}

function fromUrlEncodeToUnicode(mensagem) {
	// mensagem = mensagem.replace('%', '\\u00');
	mensagem = replaceAll(mensagem, '%E0', '\\u00e0');	
	mensagem = replaceAll(mensagem, '%E1', '\\u00e1');
	mensagem = replaceAll(mensagem, '%E2', '\\u00e2');
	mensagem = replaceAll(mensagem, '%E3', '\\u00e3');
	mensagem = replaceAll(mensagem, '%E4', '\\u00e4');
	mensagem = replaceAll(mensagem, '%C1', '\\u00c1');
	mensagem = replaceAll(mensagem, '%C0', '\\u00c0');
	mensagem = replaceAll(mensagem, '%C2', '\\u00c2');
	mensagem = replaceAll(mensagem, '%C3', '\\u00c3');
	mensagem = replaceAll(mensagem, '%C4', '\\u00c4');
	mensagem = replaceAll(mensagem, '%E9', '\\u00e9');
	mensagem = replaceAll(mensagem, '%E8', '\\u00e8');
	mensagem = replaceAll(mensagem, '%EA', '\\u00ea');
	mensagem = replaceAll(mensagem, '%EA', '\\u00ea');
	mensagem = replaceAll(mensagem, '%C9', '\\u00c9');
	mensagem = replaceAll(mensagem, '%C8', '\\u00c8');
	mensagem = replaceAll(mensagem, '%CA', '\\u00ca');
	mensagem = replaceAll(mensagem, '%CB', '\\u00cb');
	mensagem = replaceAll(mensagem, '%ED', '\\u00ed');
	mensagem = replaceAll(mensagem, '%EC', '\\u00ec');
	mensagem = replaceAll(mensagem, '%EE', '\\u00ee');
	mensagem = replaceAll(mensagem, '%EF', '\\u00ef');
	mensagem = replaceAll(mensagem, '%CD', '\\u00cd');
	mensagem = replaceAll(mensagem, '%CC', '\\u00cc');
	mensagem = replaceAll(mensagem, '%CE', '\\u00ce');
	mensagem = replaceAll(mensagem, '%CF', '\\u00cf');
	mensagem = replaceAll(mensagem, '%F3', '\\u00f3');
	mensagem = replaceAll(mensagem, '%F2', '\\u00f2');
	mensagem = replaceAll(mensagem, '%F4', '\\u00f4');
	mensagem = replaceAll(mensagem, '%F5', '\\u00f5');
	mensagem = replaceAll(mensagem, '%F6', '\\u00f6');
	mensagem = replaceAll(mensagem, '%D3', '\\u00d3');
	mensagem = replaceAll(mensagem, '%D2', '\\u00d2');
	mensagem = replaceAll(mensagem, '%D4', '\\u00d4');
	mensagem = replaceAll(mensagem, '%D5', '\\u00d5');
	mensagem = replaceAll(mensagem, '%D6', '\\u00d6');
	mensagem = replaceAll(mensagem, '%FA', '\\u00fa');
	mensagem = replaceAll(mensagem, '%F9', '\\u00f9');
	mensagem = replaceAll(mensagem, '%FB', '\\u00fb');
	mensagem = replaceAll(mensagem, '%FC', '\\u00fc');
	mensagem = replaceAll(mensagem, '%DA', '\\u00da');
	mensagem = replaceAll(mensagem, '%D9', '\\u00d9');
	mensagem = replaceAll(mensagem, '%DB', '\\u00db');
	mensagem = replaceAll(mensagem, '%E7', '\\u00e7');
	mensagem = replaceAll(mensagem, '%C7', '\\u00c7');
	mensagem = replaceAll(mensagem, '%F1', '\\u00f1');
	mensagem = replaceAll(mensagem, '%D1', '\\u00d1');
	mensagem = replaceAll(mensagem, '%26', '\\u0026');
	mensagem = replaceAll(mensagem, '%27', '\\u0027');
	mensagem = replaceAll(mensagem, '%20', ' ');

	return mensagem;
}

function toUnicode(mensagem) {
	mensagem = mensagem.replace('á', '\\u00e1');
	mensagem = mensagem.replace('à', '\\u00e0');
	mensagem = mensagem.replace('â', '\\u00e2');
	mensagem = mensagem.replace('ã', '\\u00e3');
	mensagem = mensagem.replace('ä', '\\u00e4');
	mensagem = mensagem.replace('Á', '\\u00c1');
	mensagem = mensagem.replace('À', '\\u00c0');
	mensagem = mensagem.replace('Â', '\\u00c2');
	mensagem = mensagem.replace('Ã', '\\u00c3');
	mensagem = mensagem.replace('Ä', '\\u00c4');
	mensagem = mensagem.replace('é', '\\u00e9');
	mensagem = mensagem.replace('è', '\\u00e8');
	mensagem = mensagem.replace('ê', '\\u00ea');
	mensagem = mensagem.replace('ê', '\\u00ea');
	mensagem = mensagem.replace('É', '\\u00c9');
	mensagem = mensagem.replace('È', '\\u00c8');
	mensagem = mensagem.replace('Ê', '\\u00ca');
	mensagem = mensagem.replace('Ë', '\\u00cb');
	mensagem = mensagem.replace('í', '\\u00ed');
	mensagem = mensagem.replace('ì', '\\u00ec');
	mensagem = mensagem.replace('î', '\\u00ee');
	mensagem = mensagem.replace('ï', '\\u00ef');
	mensagem = mensagem.replace('Í', '\\u00cd');
	mensagem = mensagem.replace('Ì', '\\u00cc');
	mensagem = mensagem.replace('Î', '\\u00ce');
	mensagem = mensagem.replace('Ï', '\\u00cf');
	mensagem = mensagem.replace('ó', '\\u00f3');
	mensagem = mensagem.replace('ò', '\\u00f2');
	mensagem = mensagem.replace('ô', '\\u00f4');
	mensagem = mensagem.replace('õ', '\\u00f5');
	mensagem = mensagem.replace('ö', '\\u00f6');
	mensagem = mensagem.replace('Ó', '\\u00d3');
	mensagem = mensagem.replace('Ò', '\\u00d2');
	mensagem = mensagem.replace('Ô', '\\u00d4');
	mensagem = mensagem.replace('Õ', '\\u00d5');
	mensagem = mensagem.replace('Ö', '\\u00d6');
	mensagem = mensagem.replace('ú', '\\u00fa');
	mensagem = mensagem.replace('ù', '\\u00f9');
	mensagem = mensagem.replace('û', '\\u00fb');
	mensagem = mensagem.replace('ü', '\\u00fc');
	mensagem = mensagem.replace('Ú', '\\u00da');
	mensagem = mensagem.replace('Ù', '\\u00d9');
	mensagem = mensagem.replace('Û', '\\u00db');
	mensagem = mensagem.replace('ç', '\\u00e7');
	mensagem = mensagem.replace('Ç', '\\u00c7');
	mensagem = mensagem.replace('ñ', '\\u00f1');
	mensagem = mensagem.replace('Ñ', '\\u00d1');
	mensagem = mensagem.replace('&', '\\u0026');
	mensagem = mensagem.replace('\'', '\\u0027');

	return mensagem;
}
