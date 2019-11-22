$("#consultar").click(function () {
  console.log("click exibe a imagem");
  $.get("https://dog.ceo/api/breeds/image/random", function (data) {

    var output = "<ul>";
    for (var i in data.Product.ProductImage) {
      output += "<li>" + data.Product.ProductImage.i.http + "</li>";
    }
    output += "</ul>";

    $('span').html(output);
  });

  $('#consultar').html(dadosjSon);
});

function getDog() {
  var selectedDog = $(".dog-selector option:selected").val();
  dogURL = selectedDog.replace(/-/g, '/');
  $.getJSON("https://dog.ceo/api/breed/" + dogURL + "/images/random", function (result) {
    $(".images-dog").html("<img src='" + result.message + "'>");
  });
}

function loadDogs() {
  $.getJSON("https://dog.ceo/api/breeds/list/all", function (result) {
    var breeds = result.message;
    firstDog = Object.keys(breeds)[0];
    $.each(breeds, function (dog, breed) {
      if (breeds[dog].length >= 1) {
        for (i = 0; i < breeds[dog].length; i++) {
          $(".dog-selector").append('<option value="' + dog + '-' + breeds[dog][i] + '">' + breeds[dog][i] + ' ' + dog + '</option>');
        }
      } else if (breeds[dog].length < 1) {
        $(".dog-selector").append('<option value="' + dog + '">' + dog + '</option>');
      }
    });
    $.getJSON("https://dog.ceo/api/breed/" + firstDog + "/images/random", function (result) {
      $(".images-dog").html("<img src='" + result.message + "'>");
    });
  });
}
$(".dog-selector").change(function () {
  $(".dog-selector option:selected").each(function () {
    getDog();
  });
});
$(".get-dog").click(function () {
  getDog();
});
$(document).ready(function () {
  loadDogs();
});
function gravarDadosSession() {
  localStorage.setItem('nomeCachorro', nomeCachorro.value);

}
function salvaNome() {

  var nome = localStorage.getItem('nomeCachorro');

  document.getElementById('status').innerHTML = nome + "<br>" + email;
  document.getElementById('avatar').innerHTML = "<img src=" + imagem + " />";
}
