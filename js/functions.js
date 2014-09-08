/** Função para conversão de número 
  * decimal para número binário
  **/
  function decForBin(numero) {
  	for ( binario = []; numero > 1; ) {
  		resto = Math.floor( numero % 2 );
  		numero /= 2;
  		binario.unshift( resto == 1 ? 1 : 0 );
  	}

  	if ( !/[^0]/.test( binario.join('') ) ) binario.unshift( 1 );

  	return binario.join('');
  }

/** Função para conversão de número 
  * binário para número decimal
  **/
  function binForDec(numero) {
  	var base2 = [],
  	decimal = 0,
  	binario = numero.toString();

  	for ( i = binario.length, j = 1; --i > -1; j *= 2 ) base2.unshift( j );

  		for ( i in binario ) {
  			if ( binario[i] == 0 ) delete base2[i];
  			else decimal += base2[i];
  		}

  		return decimal;
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

/** Função para conversão de número 
  * hexadecimal para número decimal
  **/
  function hexForDec(numero) {
  	return parseInt(numero,16);
  }

/** Funções para conversão de número 
  * decimal para número hexadecimal
  **/
  function decForHex(numero) {
  	return tohex(numero);
  }

  function tohex(i) {
  	a2 = ''
  	ihex = hexQuot(i);
  	idiff = eval(i + '-(' + ihex + '*16)')
  	a2 = itohex(idiff) + a2;
  	while( ihex >= 16) {
  		itmp = hexQuot(ihex);
  		idiff = eval(ihex + '-(' + itmp + '*16)');
  		a2 = itohex(idiff) + a2;
  		ihex = itmp;
  	} 
  	a1 = itohex(ihex);
  	return a1 + a2 ;
  }

  function hexQuot(i) {
  	return Math.floor(eval(i +'/16'));
  }

  function itohex(i) {
  	if( i == 0) {
  		aa = '0' }
  		else { if( i== 1) {
  			aa = '1'}
  			else {if( i== 2) {
  				aa = '2'}
  				else {if( i == 3) {
  					aa = '3' }
  					else {if( i== 4) {
  						aa = '4'}
  						else {if( i == 5) {
  							aa = '5' }
  							else {if( i== 6) {
  								aa = '6'}
  								else {if( i == 7) {
  									aa = '7' }
  									else {if( i== 8) {
  										aa = '8'}
  										else {if( i == 9) {
  											aa = '9'}
  											else {if( i==10) {
  												aa = 'A'}
  												else {if( i==11) {
  													aa = 'B'}
  													else {if( i==12) {
  														aa = 'C'}
  														else {if( i==13) {
  															aa = 'D'}
  															else {if( i==14) {
  																aa = 'E'}
  																else {if( i==15) {
  																	aa = 'F'}

  																}
  															}
  														}
  													}
  												}
  											}
  										}
  									}
  								}
  							}
  						}
  					}
  				}
  			}
  		}
  		return aa
  	}


  	$('#convert').click(function(){
  		var opt1 = $("input[name='opt1']:checked").val();
  		var opt2 = $("input[name='opt2']:checked").val();
  		var num   = $('#num').val();

  		if(opt1 == 'Dec' && opt2 == 'Hex'){
  			popup('Resultado', decForHex(num));
  		}else if(opt1 == 'Hex' && opt2 == 'Dec'){
  			popup('Resultado', hexForDec(num));
  		}else if(opt1 == 'Dec' && opt2 == 'Bin'){
  			popup('Resultado', decForBin(num));
  		}else if(opt1 == 'Bin' && opt2 == 'Dec'){
  			popup('Resultado', binForDec(num));
  		}else if(opt1 == 'Bin' && opt2 == 'Hex'){
  			popup('Resultado', binForHex(num));
  		}else if(opt1 == 'Hex' && opt2 == 'Bin'){
  			popup('Resultado', hexForBin(num));
  		}

  	});

///////////////////
// Initialize Popup
///////////////////
function popup(title, message){
	$.UIPopup({
		id: "warning",
		title: title, 
		message: message,  
		continueButton: 'Ok', 
		callback: $.noop
	});
}