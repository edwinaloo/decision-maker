document.addEventListener('DOMContentLoaded', function () {
    const decisionButton = document.getElementById('decisionButton');
    const decisionResult = document.getElementById('decisionResult');

    decisionButton.addEventListener('click', makeDecision);

    function makeDecision() {
        const decisions = [
            'Yes, go for it!',
            'No, better not.',
            'Maybe, take some time to think.'
        ];

        // Add a class to initiate the spinning animation
        decisionResult.classList.add('spin');

        // Clear the previous decision after a short delay
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * decisions.length);
            const randomDecision = decisions[randomIndex];

            // Display the new decision
            decisionResult.textContent = `Decision: ${randomDecision}`;

            // Remove the spinning animation class
            decisionResult.classList.remove('spin');
        }, 2000); // Adjust the delay based on your preference
    }
});
