angular.module('CardsAgainstAssembly', [])
  .controller('CardsController', CardsController)
  .directive('card', cardView)
  .controller('PlayersController', PlayersController)
  .directive('scores', scoresView);


function CardsController($scope) {
  var vm = this;

  $scope.swapMe = function(){
    console.log(this.card.answer);
  };

  vm.qnaList = [
    {
      question: "What is Batman's guilty pleasure?",
      answer: "Robert Downey Jr."
    },
    {
      question: "I'm sorry professor, I couldn't complete my homework because _________.",
      answer: "the dog ate my assignment!"
    },
    {
      question: "I get by with a little help from _________.",
      answer: "John Cena!"
    },
    {
      question: "_________ -- It's a trap!",
      answer: "General Assembly?"
    },
    {
      question: "The class field trip was completely ruined by _________.",
      answer: "dragons"
    },
    {
      question: "What's my secret power?",
      answer: "Angular Baby!"
    },
    {
      question: "Why are there so many songs about rainbows?",
      answer: "It's not that easy being green."
    }
  ];
}

function cardView() {
    var directive = {
      restrict : "E",
      templateUrl : '_cardView.html',
      scope : {
        question: '@',
        answer: '@',
        'swapMe':'&swapMe'
      }
    };
    return directive;
}


function PlayersController(){
  var vm = this;
  vm.players = [
    {name: 'Gilligan', points: 2},
    {name: 'Mary Ann', points: 16},
    {name: 'Ginger', points: 12},
    {name: 'Thurson', points: 6},
    {name: 'Skipper', points: 9},
    {name: 'The Professor', points: 21}
  ]
}


function scoresView(){
  var directive = {
    //'A' == attribute, 'E' == element, 'C' == class
    restrict : 'E',
    replace : true,
    templateUrl :  "_scoresView.html"
  };
  return directive;
}
