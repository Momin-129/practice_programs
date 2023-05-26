import { records } from "./faq.js";
import { appendAccordian } from "./appendFunc.js";

let maxRange = 0;
let i;
for (i = 0; i < 5; i++) {
  $("#accordion").append(`
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${i}">
          <button id="openBtn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapseTwo">
                    ${records[i].ques}
                  </button>
                </h2>
              <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                ${records[0].ans} 
              </div>
            </div>
          </div>
      `);
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
