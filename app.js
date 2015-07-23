var form = $('#form'),
    inputA = $('#formNumA'),
    selectA = $('#formSelectA'),
    inputB = $('#formNumB'),
    selectB = $('#formSelectB'),
    aVal,
    aDec,
    bVal;

form.submit(function(e) {

  e.preventDefault();

  aVal = parseInt(inputA.val(), selectA.val());
  aDec = parseInt(aVal, 10);
  bVal = aDec.toString(selectB.val()).toUpperCase();

  inputB.val(bVal);

});
