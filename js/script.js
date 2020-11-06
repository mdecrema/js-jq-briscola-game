$(document).ready(function() {


/*function generatoreNum(numMin, numMax) {
    var num = Math.floor(Math.random()* (numMax - numMin + 1)) + numMin;
    return num;
  };

$("#start").click(function() {
  var numeri = generaNumeri();
  $("#c1").text(numeri[0]);
  $("#c2").text(numeri[1]);
  $("#c3").text(numeri[2]);
  $("#c4").text(numeri[3]);
  $("#c5").text(numeri[4]);
  $("#c6").text(numeri[5]);
  $("#c0").text(numeri[6]);

  getBriscola();
});


function generaNumeri() {
var numUsciti = [];
    while (numUsciti.length<=7) {
      var numGen = generatoreNum(1, 40);
      if (validatore(numUsciti, numGen) == false) {
        numUsciti.push(numGen);
      }
  }
  return numUsciti;
}

function validatore(array, elemento) {
  var numeroUguale = false;
  var i = 0;
    while (i < array.length && numeroUguale == false) {
      if (array[i] == elemento) {
        numeroUguale = true;
      }
    i++;
  }
  return numeroUguale;
};

//
/*function getBriscola() {
  var briscola = $("#c0").text();
  var segno = "";
  if (briscola>0 && briscola<=10) {
    var segno = "bastoni";
  } else if (briscola>10 && briscola<=20) {
    var segno = "coppe";
  } else if (briscola>20 && briscola<=30) {
    var segno = "spade";
  } else if (briscola>30 && briscola<=40) {
    var segno = "denari";
  }
  console.log(segno);
  return segno;
}

function aumentaValoreBriscola() {
  var value = getBriscola();

  if (value == "bastoni") {

  }
}*/
var allBriscole = [222, 224, 225, 226, 227, 298, 299, 300, 301, 302];
var all = [32, 34, 35, 36, 37, 42, 44, 45, 46, 47,
  52, 54, 55, 56, 57,/*fanti*/ 68, 78, 88,/*cavalli*/ 69, 79, 89,
  /*re*/ 70, 80, 90,/*tre*/ 71, 81, 91, 301,/*Assi*/ 72, 82, 92];

//  var allNew = [22, 24, 25, 26, 27, 32, 34, 35, 36, 37, 42, 44, 45, 46, 47,
//    52, 54, 55, 56, 57,/*fanti*/ 68, 78, 88, 98,/*cavalli*/ 69, 79, 89, 99,
//    /*re*/ 70, 80, 90, 100,/*tre*/ 71, 81, 91, 101,/*Assi*/ 72, 82, 93, 103];

var arrayCarte = {
  lisci: [0,
          222, 224, 225, 226, 227,
          32, 34, 35, 36, 37,
          42, 44, 45, 46, 47,
          52, 54, 55, 56, 57
  ],
  fante: [2,
          68, 78, 88, 298
  ],
  cavallo: [3,
          69, 79, 89, 299
  ],
  re: [4,
          70, 80, 90, 300
  ],
  tre: [10,
          71, 81, 91, 301
  ],
  asso: [11,
          72, 82, 92, 302
  ],
}

function getValueCard(card) {
  //var check = arrayCarte.lisci;
  if (arrayCarte.asso.includes(card)) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

function generatoreNum(numMin, numMax) {
  var num = Math.floor(Math.random()* (numMax - numMin + 0)) + numMin;
  return num;
};

function validatore(array, elemento) {
  var numeroUguale = false;
  var i = 0;
    while (i < array.length && numeroUguale == false) {
      if (array[i] == elemento) {
        numeroUguale = true;
      }
    i++;
  }
  return numeroUguale;
};


function firstHand() {
  var numUsciti = [];
    while (numUsciti.length<=6) {
      var numGen = generatoreNum(0, 40);
      if (validatore(numUsciti, numGen) == false) {
        numUsciti.push(numGen);
        //cardValue(numUsciti);
      }
  }
  console.log(numUsciti);
  return numUsciti;
}

function scegliBriscola() {
  var briscolaUscita = generatoreNum(0, 9);

  $("#c0").text(allBriscole[briscolaUscita]);
  allBriscole.splice(briscolaUscita,1);
  var allNew = all.concat(allBriscole);
  return allNew;
}

function cardValue() {
  var newAll = scegliBriscola();
  var usciti = firstHand();
  //var num0 = usciti[0];
  var num1 = usciti[1];
  var num2 = usciti[2];
  var num3 = usciti[3];
  var num4 = usciti[4];
  var num5 = usciti[5];
  var num6 = usciti[6];
console.log(num2);
  //$("#c0").text(all[num0]);
  $("#c1").text(newAll[num1]);
  $("#c2").text(newAll[num2]);
  $("#c3").text(newAll[num3]);
  $("#c4").text(newAll[num4]);
  $("#c5").text(newAll[num5]);
  $("#c6").text(newAll[num6]);

}

$("#start").click(function() {
    cardValue();
})



})
