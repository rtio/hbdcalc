/** Função para conversão de número 
  * decimal para número binário
**/
function decForBin(numero) {
         for ( binário = []; numero > 1; ) {
                resto = Math.floor( numero % 2 );
                numero /= 2;
                binário.unshift( resto == 1 ? 1 : 0 );
        }
 
        if ( !/[^0]/.test( binário.join('') ) ) binário.unshift( 1 );
 
        return binário.join('');
}

/** Função para conversão de número 
  * binário para número decimal
**/
function binForDec(numero) {
        var base2 = [],
            decimal = 0,
            binário = numBinário.toString();
 
        for ( i = binário.length, j = 1; --i > -1; j *= 2 ) base2.unshift( j );
 
        for ( i in binário ) {
                if ( binário[i] == 0 ) delete base2[i];
                else decimal += base2[i];
        }
 
        return decimal;
}

/** Função para conversão de número 
  * decimal para número hexadecimal
**/
function decForHex(numero) {
	return numero.toString(16);
}

/** Função para conversão de número 
  * hexadecimal para número decimal
**/
function hexForDec(numero) {
	return parseInt(numero,16);
}

/** Função para conversão de número 
  * binário para número hexadecimal
**/
function binForHex(numero) {
	var dec = binForDec(numero);
	return decForHex(dec);
}

/** Função para conversão de número 
  * hexadecimal para número decimal
**/
function hexForBin(numero) {
	var dec = hexForDec(numero);
	return decForBin(dec);
}

$('#convert').click(function(){
	var opt1 = $('#opt1').val();
	var opt2 = $('#opt2').val();
	var num   = $('#num').val();

	alert(decForBin(num));

	if(opt1 == 'Dec' && opt2 == 'Hex'){
		alert(decForHex(num));
	}else if(opt1 == 'Hex' && opt2 == 'Dec'){
		alert(hexForDec(num));
	}else if(opt1 == 'Dec' && opt2 == 'Bin'){
		alert(decForBin(num));
	}else if(opt1 == 'Bin' && opt2 == 'Dec'){
		alert(binForDec(num));
	}else if(opt1 == 'Bin' && opt2 == 'Hex'){
		alert(binForHex(num));
	}else if(opt1 == 'Hex' && opt2 == 'Bin'){
		alert(hexForBin(num));
	}

});