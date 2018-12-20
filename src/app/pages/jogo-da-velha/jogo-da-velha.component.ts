import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

declare let $: any;

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})

export class JogoDaVelhaComponent implements OnInit {

  // STORAGE OF THE ICONS //
  hash: Array<string> = [];
  // STORAGE OF THE ICONS //

  // PLAYERS ATRIBUTTES //
  playerOneColor: string = "";
  playerTwoColor: string = "";
  radioPlayerOne: string = "";
  radioPlayerTwo: string = "";
  // PLAYERS ATRIBUTTES //

  // PLAYER NAMES //
  playerOne: string = undefined;
  playerTwo: string = undefined;
  // PLAYER NAMES //

  // WINNER NAME //
  playerWinner: string = undefined;
  // WINNER NAME //

  // NAME OF THE TIME //
  turnPlayer: string = undefined;
  // NAME OF THE TIME //

  // TURN ICONS //
  turn: string = "";
  // TURN ICONS //

  // HAVE A WINNER //
  haveWinner: boolean = false;
  // HAVE A WINNER //

  // DISABLE CONFIRM BUTTON //
  disableButton: boolean = true;
  // DISABLE CONFIRM BUTTON //

  // ACTIVE THE HASH, IF COMPLETE THE NAMES FIELDS //
  visibleHash: boolean = false;
  // ACTIVE THE HASH, IF COMPLETE THE NAMES FIELDS //

  // SORT //
  sort: number;
  // SORT //

  // COUNTS //
  playerOneWinner: number = 0;
  playerTwoWinner: number = 0;
  draw: number = 0;
  // COUNTS //

  constructor() {
  }

  ngOnInit() {
    this.choiceFirst();
  }

  ngDoCheck() {
    if (this.playerOne != undefined && this.playerTwo != undefined && this.radioPlayerOne != "" && this.radioPlayerTwo) {
      this.disableButton = null;
    }

    if (this.turn == 'x') {
      this.turnPlayer = this.playerOne;
    } else {
      this.turnPlayer = this.playerTwo;
    }
  }

  choiceFirst() {
    this.randomFirstPlayer();

    if (this.randomFirstPlayer() == 1) {
      this.turn = 'x';
    } else {
      this.turn = 'o';
    }
  }

  randomFirstPlayer(): number {
    return this.sort = Math.floor(Math.random() * 2) + 1;
  }

  confirmPlayers($event) {
    this.visibleHash = $event;

    this.playerOneColor = this.radioPlayerOne;
    this.playerTwoColor = this.radioPlayerTwo;
  }

  selected(index) {
    if (this.turn == 'x') {

      if (index == 0) {
        $("#x0").removeClass("hidden-x-0");
        $("#card0").addClass("disable-events");
      } else if (index == 1) {
        $("#x1").removeClass("hidden-x-1");
        $("#card1").addClass("disable-events");
      } else if (index == 2) {
        $("#x2").removeClass("hidden-x-2");
        $("#card2").addClass("disable-events");
      } else if (index == 3) {
        $("#x3").removeClass("hidden-x-3");
        $("#card3").addClass("disable-events");
      } else if (index == 4) {
        $("#x4").removeClass("hidden-x-4");
        $("#card4").addClass("disable-events");
      } else if (index == 5) {
        $("#x5").removeClass("hidden-x-5");
        $("#card5").addClass("disable-events");
      } else if (index == 6) {
        $("#x6").removeClass("hidden-x-6");
        $("#card6").addClass("disable-events");
      } else if (index == 7) {
        $("#x7").removeClass("hidden-x-7");
        $("#card7").addClass("disable-events");
      } else if (index == 8) {
        $("#x8").removeClass("hidden-x-8");
        $("#card8").addClass("disable-events");
      }

      this.hash[index] = this.turn;
    } else {

      if (index == 0) {
        $("#o0").removeClass("hidden-o-0");
        $("#card0").addClass("disable-events");
      } else if (index == 1) {
        $("#o1").removeClass("hidden-o-1");
        $("#card1").addClass("disable-events");
      } else if (index == 2) {
        $("#o2").removeClass("hidden-o-2");
        $("#card2").addClass("disable-events");
      } else if (index == 3) {
        $("#o3").removeClass("hidden-o-3");
        $("#card3").addClass("disable-events");
      } else if (index == 4) {
        $("#o4").removeClass("hidden-o-4");
        $("#card4").addClass("disable-events");
      } else if (index == 5) {
        $("#o5").removeClass("hidden-o-5");
        $("#card5").addClass("disable-events");
      } else if (index == 6) {
        $("#o6").removeClass("hidden-o-6");
        $("#card6").addClass("disable-events");
      } else if (index == 7) {
        $("#o7").removeClass("hidden-o-7");
        $("#card7").addClass("disable-events");
      } else if (index == 8) {
        $("#o8").removeClass("hidden-o-8");
        $("#card8").addClass("disable-events");
      }

      this.hash[index] = this.turn;
    }

    this.winner();

    if (this.haveWinner == false) {
      this.turnOf();
    }
  }

  turnOf() {
    if (this.turn == 'x') {
      this.turn = 'o';
    } else {
      this.turn = 'x';
    }
  }

  winner(): void {
    // 'X'
    if (this.hash[0] == 'x' && this.hash[1] == 'x' && this.hash[2] == 'x') {
      this.messageWinner('X');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[3] == 'x' && this.hash[4] == 'x' && this.hash[5] == 'x') {
      this.messageWinner('X');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[6] == 'x' && this.hash[7] == 'x' && this.hash[8] == 'x') {
      this.messageWinner('X');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[0] == 'x' && this.hash[4] == 'x' && this.hash[8] == 'x') {
      this.messageWinner('X');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[0] == 'x' && this.hash[3] == 'x' && this.hash[6] == 'x') {
      this.messageWinner('X');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[1] == 'x' && this.hash[4] == 'x' && this.hash[7] == 'x') {
      this.messageWinner('X');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[2] == 'x' && this.hash[5] == 'x' && this.hash[8] == 'x') {
      this.messageWinner('X');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[2] == 'x' && this.hash[4] == 'x' && this.hash[6] == 'x') {
      this.messageWinner('X');
      this.restartGame();
      this.haveWinner = true;
    }
    // 'O'
    else if (this.hash[0] == 'o' && this.hash[1] == 'o' && this.hash[2] == 'o') {
      this.messageWinner('O');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[3] == 'o' && this.hash[4] == 'o' && this.hash[5] == 'o') {
      this.messageWinner('O');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[6] == 'o' && this.hash[7] == 'o' && this.hash[8] == 'o') {
      this.messageWinner('O');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[0] == 'o' && this.hash[4] == 'o' && this.hash[8] == 'o') {
      this.messageWinner('O');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[0] == 'o' && this.hash[3] == 'o' && this.hash[6] == 'o') {
      this.messageWinner('O');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[1] == 'o' && this.hash[4] == 'o' && this.hash[7] == 'o') {
      this.messageWinner('O');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[2] == 'o' && this.hash[5] == 'o' && this.hash[8] == 'o') {
      this.messageWinner('O');
      this.restartGame();
      this.haveWinner = true;
    } else if (this.hash[2] == 'o' && this.hash[4] == 'o' && this.hash[6] == 'o') {
      this.messageWinner('O');
      this.restartGame();
      this.haveWinner = true;
    }
    else if (this.hash[0] != undefined && this.hash[1] != undefined && this.hash[0] != undefined && this.hash[2] != undefined && this.hash[3] != undefined && this.hash[4] != undefined
      && this.hash[5] != undefined && this.hash[6] != undefined && this.hash[7] != undefined && this.hash[8] != undefined) {
      this.messageWinner('empate');
      this.restartGame();
      this.haveWinner = true;
    }

    this.haveWinner = false;
  }

  restartGame() {
    this.hash = [];
  }

  resetHidden() {
    // 'X'
    $("#x0").addClass("hidden-x-0");
    $("#card0").removeClass("disable-events");
    $("#x1").addClass("hidden-x-1");
    $("#card1").removeClass("disable-events");
    $("#x2").addClass("hidden-x-2");
    $("#card2").removeClass("disable-events");
    $("#x3").addClass("hidden-x-3");
    $("#card3").removeClass("disable-events");
    $("#x4").addClass("hidden-x-4");
    $("#card4").removeClass("disable-events");
    $("#x5").addClass("hidden-x-5");
    $("#card5").removeClass("disable-events");
    $("#x6").addClass("hidden-x-6");
    $("#card6").removeClass("disable-events");
    $("#x7").addClass("hidden-x-7");
    $("#card7").removeClass("disable-events");
    $("#x8").addClass("hidden-x-8");
    $("#card8").removeClass("disable-events");

    // 'O'
    $("#o0").addClass("hidden-o-0");
    $("#card0").removeClass("disable-events");
    $("#o1").addClass("hidden-o-1");
    $("#card1").removeClass("disable-events");
    $("#o2").addClass("hidden-o-2");
    $("#card2").removeClass("disable-events");
    $("#o3").addClass("hidden-o-3");
    $("#card3").removeClass("disable-events");
    $("#o4").addClass("hidden-o-4");
    $("#card4").removeClass("disable-events");
    $("#o5").addClass("hidden-o-5");
    $("#card5").removeClass("disable-events");
    $("#o6").addClass("hidden-o-6");
    $("#card6").removeClass("disable-events");
    $("#o7").addClass("hidden-o-7");
    $("#card7").removeClass("disable-events");
    $("#o8").addClass("hidden-o-8");
    $("#card8").removeClass("disable-events");

    // Array
    this.hash = [];
  }

  messageWinner(resultado: string) {
    if (resultado == "X" || resultado == "O") {
      if (resultado == "X") {
        this.playerWinner = this.playerOne;
      } else {
        this.playerWinner = this.playerTwo;
      }
      Swal({
        title: this.playerWinner,
        text: "foi o vencedor da rodada.",
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3066BE',
        confirmButtonText: 'Obrigado, vamos reiniciar a rodada!'
      }).then((result) => {
        if (result.value) {
          if (resultado == 'X') {
            this.playerOneWinner++;
            this.turn = 'x';
          } else if (resultado == 'O') {
            this.playerTwoWinner++;
            this.turn = 'o';
          }
          this.resetHidden();
        }
      });
    } else {
      Swal({
        title: 'Empate',
        text: "Não existirá vencedores.",
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3066BE',
        confirmButtonText: 'Obrigado, vamos reiniciar a rodada!'
      }).then((result) => {
        if (result.value) {
          this.draw++
          this.resetHidden();
        }
      });
    }
  }

  backGame() {
    // STORAGE OF THE ICONS //
    this.hash = [];
    // STORAGE OF THE ICONS //

    // PLAYER NAMES //
    this.playerOne = undefined;
    this.playerTwo = undefined;
    // PLAYER NAMES //

    // WINNER NAME //
    this.playerWinner = undefined;
    // WINNER NAME //

    // NAME OF THE TIME //
    this.turnPlayer = undefined;
    // NAME OF THE TIME //

    // HAVE A WINNER //
    this.haveWinner = false;
    // HAVE A WINNER //

    // DISABLE CONFIRM BUTTON //
    this.disableButton = true;
    // DISABLE CONFIRM BUTTON //

    // ACTIVE THE HASH, IF COMPLETE THE NAMES FIELDS //
    this.visibleHash = false;
    // ACTIVE THE HASH, IF COMPLETE THE NAMES FIELDS //

    // SORT //
    this.choiceFirst();
    // SORT //

    // COUNTS //
    this.playerOneWinner = 0;
    this.playerTwoWinner = 0;
    this.draw = 0;
    // COUNTS //

    // PLAYERS ATRIBUTTES //
    this.radioPlayerOne = undefined;
    this.radioPlayerTwo = undefined;
    this.playerOneColor = "";
    this.playerTwoColor = "";
    // PLAYERS ATTRIBUTES //
  }

}
