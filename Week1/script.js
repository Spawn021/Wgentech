const questions = document.querySelectorAll(".question"); // NodeList of all questions

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const questionName = this.querySelector(".question-name"); // this means the question that is clicked
    const answer = this.querySelector(".answer");
    const icon = this.querySelector(".icon i");

    questions.forEach((q) => {
      if (q !== this) {
        console.log(this);
        // forEach use a arrow function, so this will be the parent function
        const otherAnswer = q.querySelector(".answer");
        const otherIcon = q.querySelector(".icon i");
        const otherQuestionName = q.querySelector(".question-name");

        otherAnswer.style.display = "none";
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
        otherQuestionName.classList.remove("toggle");
      }
    });

    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
      questionName.classList.remove("toggle");
    } else {
      answer.style.display = "block";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      questionName.classList.add("toggle");
    }
  });
});

// classList: Returns the class name(s) of an element, can use DOMTokenList methods to add, remove, toggle, etc. classes
// className: Sets or returns the value of the class attribute of an element,
// arrow function không có this riêng, nó sẽ lấy this của parent function chứa nó. Giá trị của this trong arrow function sẽ được kế thừa từ hàm gần nhất chứa nó.
// this trong regular function sẽ trỏ tới đối tượng mà một hàm đang được gọi trên nó.
