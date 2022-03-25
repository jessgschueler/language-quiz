$(document).ready(function() {
  if ("input:radio[name=q1 id=veriperi]:checked") {
    $(".veriperi").addclass()
  } else;
  
});


$(document).ready(function() {
  $("form").submit (function(event) {
    event.preventDefault();
    const result1 = parseInt($("input:radio[name=q1]:checked").val());
    const result2 = parseInt($("input:radio[name=q2]:checked").val());
    const result3 = parseInt($("input:radio[name=q3]:checked").val());
    const result4 = parseInt($("input:radio[name=q4]:checked").val());
    const result5 = parseInt($("input:radio[name=q5]:checked").val());
    const result = result1 + result2 + result3 + result4 + result5
    
  });
});