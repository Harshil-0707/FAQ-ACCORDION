const questions = document.querySelectorAll('.que');

questions.forEach(ques => {
    ques.addEventListener('click', function(){
        this.classList.toggle('active')
        let answer = this.nextElementSibling;
        const plusIcon = this.querySelector('.plus');
        const minusIcon = this.querySelector('.minus');
        
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            minusIcon.style.display = 'block';
            plusIcon.style.display = 'none';
        }
    });
});