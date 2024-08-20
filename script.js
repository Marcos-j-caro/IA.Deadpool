function enviarQuiz() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    const respostas = {
        Batman: 0,
        Hulk: 0,
        DoutorEstranho: 0,
        Deadpool: 0
    };

    formData.forEach((value) => {
        respostas[value]++;
    });

    let superhero = 'Deadpool';
    let maxScore = 0;

    for (const [key, value] of Object.entries(respostas)) {
        if (value > maxScore) {
            maxScore = value;
            superhero = key;
        }
    }

    localStorage.setItem('superhero', superhero);
    window.location.href = "resultado.html";
}
