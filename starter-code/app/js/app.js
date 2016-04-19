angular
  .module('CardsAgainstAssembly', [])
  .controller('CardsController', CardsController)
  .controller('PlayersController', PlayersController);

function CardsController() {
  var vm = this;
  vm.questions = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"}
  ];
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
  ];
}
