import { records } from "./faq.js";
import { appendAccordian } from "./appendFunc.js";

let maxRange = 0;
let i;
for (i = 0; i < 5; i++) {
  let ques = records[i].ques;
  let ans = records[i].ans;
  appendAccordian(i, ques, ans);
}
maxRange = i;

$("#accordion").on("click", "#openBtn", function () {
  $(".show").prev().children().addClass("collapsed");
  $(".show").removeClass("show");
  let open = $(this).attr("aria-expanded");
  if (maxRange < 20 && open == "true") {
    for (i = maxRange; i < maxRange + 3; i++) {
      let ques = records[i].ques;
      let ans = records[i].ans;
      appendAccordian(i, ques, ans);
    }
    maxRange = i;
  }
});
