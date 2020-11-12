var player1="Player 1";
var player2="Player 2";

$(".btn1").click(function(){
  $(".player1").removeClass("win");
  $(".player2").removeClass("win");

var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6))+1;

var imageSelector1="images/dice"+randomNumber1+".png";
var imageSelector2="images/dice"+randomNumber2+".png";


$(".img1").attr("src",imageSelector1);
$(".img2").attr("src",imageSelector2);


if(randomNumber1===randomNumber2)
{
  $(".title-header").text("It's a Draw!!");

}

else if(randomNumber1> randomNumber2)
{
  $(".title-header").text(player1+" Wins!!");
  $(".player1").addClass("win");

  setTimeout(function(){
    $(".player1").removeClass("win");
  },1000);


}

else {
  $(".title-header").text(player2+" Wins!!");
  $(".player2").addClass("win");

  setTimeout(function(){
    $(".player2").removeClass("win");
  },1000);
}

});


$(".btn2").click(function(){
  player1=prompt("Enter Player 1 name:");
  player2=prompt("Enter Player 2 name:");
  $(".player1").text(player1);
  $(".player2").text(player2);
});
