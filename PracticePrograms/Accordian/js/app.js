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
  let open = $(this).attr("aria-expanded");
  if (maxRange < 20 && open == "true") {
    $("#accordion").append("<h4>Added New Faq</h4>");
    for (i = maxRange; i < maxRange + 3; i++) {
      let ques = records[i].ques;
      let ans = records[i].ans;
      appendAccordian(i, ques, ans);
    }
    maxRange = i;
  }
});
