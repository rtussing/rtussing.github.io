/**
 * Const variables
 */
const feedbackContent = document.getElementById("feedback-content");
const feedbackButton = document.getElementById("feedback-submit");

/**
 * Disable submission by the enter key in the Feedback box.
 */
feedbackContent.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        e.preventDefault();
    }
});

/**
 * Detect when there is a feedback submission. Only react if it isn't empty.
 */
feedbackButton.onclick = () => {
    if (feedbackContent.value.length > 0) {
        sendFeedback();
        console.log('submitted');
    }
};

function sendFeedback() {
    // This is the info I want from the client
    let feedback = feedbackContent.value;
    // I put the info I want into a JSON object
    let options = {
        // I want to post this to the server
        method: 'POST',
        // I want to convert this to JSON
        body: JSON.stringify({feedback}),
        // I want to tell you I'm converting to JSON
        headers: {
            "Content-Type": "application/json"
        }
    };
    // I send the object
    fetch('/feedbackSubmission', options)
        .then(response => {
            console.log(response.message);
        })
        .catch(error => {
            return console.error(error);
        });
}