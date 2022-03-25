$(document).ready(function() {
  $("form").submit (function(event) {
    event.preventDefault();
    const result1 = parseInt($("input:radio[name=q1]:checked").val());
    const result2 = parseInt($("input:radio[name=q2]:checked").val());
    const result3 = parseInt($("input:radio[name=q3]:checked").val());
    const result4 = parseInt($("input:radio[name=q4]:checked").val());
    const result5 = parseInt($("input:radio[name=q5]:checked").val());
    const result = result1 + result2 + result3 + result4 + result5

    if (result >= 36 && result !== 40) {
      $("#swift").fadeIn()
    } else {
      $("#swift").hide()
    }

    if (result >= 15 && result <= 35 && result !== 24 || result === 40) {
      $("#java").fadeIn()
    } else {
      $("#java").hide()
    }
    
    if (result <= 14 || result === 24) {
      $("#python").fadeIn()
    } else {
      $("#python").hide()
    }

  });
});
