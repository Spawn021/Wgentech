const questions = document.querySelectorAll(".question"); //NodeList of all questions

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const questionName = this.querySelector(".question-name");
    const answer = this.querySelector(".answer");
    const icon = this.querySelector(".icon i");

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
// arrow function không có this riêng, nó sẽ lấy this của parent function chứa nó
// this trong regular function sẽ trỏ tới đối tượng mà một hàm đang được gọi trên nó
// this trong Object method sẽ trỏ tới object mà nó thuộc về
