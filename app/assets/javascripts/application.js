// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require Chart.min

$(document).ready(function() {
  console.log("ready");
  $("#addNewQuestion").on("click", function() {
    // USING JQUERY TO DYNAMICALLY CREATE HTML FORM ELEMENTS
    var $form = $($("#new_question_form").html());
    var $pollChoices = $(`<div class="poll-choices"></div>`);
    var $addNewChoiceButton = $(`<a href="javascript:;" id="addNewChoice">Add New Choice</a>`);
    //var $remove-choice
    $form.append($pollChoices);
    $form.append($addNewChoiceButton);
    $addNewChoiceButton.on("click", function() {
      $pollChoices.append($("#new_choice_form").html());
    });
    $("#questions").append($form);

    this.removeQuestion = function(element) {}
    //return element.parent().remove();
  });

})
