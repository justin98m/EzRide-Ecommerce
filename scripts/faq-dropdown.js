//Display and undisplays answers to faq
//currently requires two clicks since json must be loaded before
//event listeners can be activated for faq questions


let faqSection = document.querySelector('.faq');

faqSection.addEventListener('click',updateFAQ);

function updateFAQ(){
  console.log('hello');
  var dropdown = document.querySelectorAll('.questionAnswer')
console.log(dropdown);
  dropdown.forEach((question) => {
    question.addEventListener("click", () =>{
      let answer = question.lastChild.previousElementSibling;

      if(answer.classList.contains('.closed')){
        answer.classList.toggle('open')
        answer.classList.remove('.closed')
      } else{
        answer.classList.remove('.open');
        answer.classList.toggle('closed')
      }
    })
  })
}
