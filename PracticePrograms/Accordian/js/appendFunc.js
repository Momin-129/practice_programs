export function appendAccordian(id, ques, ans) {
  $("#accordion").append(` 
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading${id}">
    <button id="openBtn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}" aria-expanded="false" aria-controls="collapseTwo">
              ${ques}
            </button>
          </h2>
        <div id="collapse${id}" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          ${ans} 
        </div>
      </div>
    </div>
`);
}
