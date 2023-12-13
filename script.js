
document.getElementById('searchIcon').addEventListener('click', function () {
    document.getElementById('searchForm').classList.toggle('d-none');
    document.getElementById('searchInput').focus(); // Optional: Focus on input after showing
    document.getElementById('searchIcon').style.display = "none"
});

// to get back search icon, if i clear the inputs, and click outside the search input
document.getElementById('searchInput').addEventListener('blur', function () {
    const input = document.getElementById('searchInput');
    if (input.value.trim() === '') {
        document.getElementById('searchForm').classList.add('d-none');
        document.getElementById('searchIcon').style.display = 'block'; // Show the search icon
    }
})

// stepper js

document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const stepContents = document.querySelectorAll('.step-content');

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            setActiveStep(index);
        });
    });

    function setActiveStep(index) {
        steps.forEach((step) => {
            step.classList.remove('active');
        });
        stepContents.forEach((content) => {
            content.classList.remove('active');
        });

        steps[index].classList.add('active');
        stepContents[index].classList.add('active');
    }

    const nextBtns = document.querySelectorAll('.next');
    const prevBtns = document.querySelectorAll('.prev');

    nextBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const activeStepIndex = Array.from(steps).findIndex((step) =>
                step.classList.contains('active')
            );
            setActiveStep(activeStepIndex + 1);
    
            // Adding 'completed' class to the previous step
            if (activeStepIndex >= 0 && activeStepIndex < steps.length) {
                steps[activeStepIndex].classList.add('completed');
            }
        });
    });
    

    prevBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const activeStepIndex = Array.from(steps).findIndex((step) =>
                step.classList.contains('active')
            );
            setActiveStep(activeStepIndex - 1);
        });
    });
});


//   star rating
const ratingValue = document.getElementById('ratingValue');
const stars = document.querySelectorAll('.rating input');

stars.forEach((star) => {
    star.addEventListener('click', () => {
        ratingValue.textContent = star.value;
    });
});
