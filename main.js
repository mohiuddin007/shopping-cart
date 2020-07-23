      //common function
      function getInputNumber(id, newValue){
        var input = document.getElementById(id).value;
            var inputValue = parseFloat(input);
            var inputNumber = inputValue+ newValue;
            if (inputNumber >= 0) {
              
              document.getElementById(id).value = inputNumber;
            }
         return inputNumber;
        }
        
        function product(id, productValue){
           var productString = document.getElementById(id).innerText;
           var productNumber = parseFloat(productString);
           var productPrice = productNumber+productValue;
           if (productPrice >= 0) {
              
              document.getElementById(id).innerText = productPrice;
           }
          return productPrice;
        }
        
  
  
        //plus1 Btn handler
        var plus1Btn =document.getElementById("plus1");
            plus1Btn.addEventListener('click', function(){
           getInputNumber('input1', 1);
           product("iphonePrice", 1219);
          var result = totalPriceAll();
           })
  
        //minus1 btn handler
        var minus1Btn = document.getElementById('minus1');
           minus1Btn.addEventListener('click', function(){
                getInputNumber('input1', -1);
                product("iphonePrice", -1219);
                var result = totalPriceAll();
           })
  
           //plus2 btn handler
           var plus2Btn = document.getElementById('plus2');
            plus2Btn.addEventListener('click', function(){
              getInputNumber('input2', 1);
              product("casePrice", 59);
              var result = totalPriceAll();
           })
  
           //minus2 btn handler
         var minus2Btn = document.getElementById('minus2');
           minus2Btn.addEventListener('click', function(){
              getInputNumber('input2', -1);
              product("casePrice", -59);
              var result = totalPriceAll();
           })

           //subtotal area
         function totalPriceAll(){
            var callIphonePrice = document.getElementById('iphonePrice').innerText;
            var mobilePriceNumber = parseFloat(callIphonePrice);
            var callCasePrice = document.getElementById('casePrice').innerText;
            var casePriceNumber = parseFloat(callCasePrice);
            var totalAllWithoutTex = mobilePriceNumber+casePriceNumber;
           if (totalAllWithoutTex > 59) {
               var tex = totalAllWithoutTex/100;
               var totalTexA = tex*3;
               var totalTex = totalTexA.toFixed(2);
               var finalTex = +totalTex;
              document.getElementById('texA').innerText = finalTex;
           }
              
              totalAll = totalAllWithoutTex + finalTex;
              document.getElementById("subTotal").innerText = totalAllWithoutTex;
             document.getElementById("total").innerText = totalAll;
             return totalAll;             
           
         }
        