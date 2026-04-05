// Class representing each Question-Answer item
class QAItem {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.element = null;
    }

    // Toggle visibility of answer
    toggle() {
        const answerEl = this.element.querySelector(".answer");

        if (this.element.classList.contains("active")) {
            // Collapse
            answerEl.style.height = "0px";
            this.element.classList.remove("active");
        } else {
            // Expand (dynamic height)
            answerEl.style.height = answerEl.scrollHeight + "px";
            this.element.classList.add("active");
        }

        this.updateIcon();
    }

    // Update + / - icon
    updateIcon() {
        const icon = this.element.querySelector(".icon");
        icon.textContent = this.element.classList.contains("active") ? "-" : "+";
    }

    // Create HTML structure dynamically
    render() {
        const container = document.createElement("article"); // semantic improvement
        container.className = "qa-item";

        container.innerHTML = `
            <div class="question">
                <span>${this.question}</span>
                <span class="icon">+</span>
            </div>
            <div class="answer">
                <div class="answer-content">
                    ${this.answer}
                </div>
            </div>
        `;

        // Add click event
        container.querySelector(".question")
            .addEventListener("click", () => this.toggle());

        this.element = container;
        return container;
    }
}

// Array of FAQ items (OOP usage)
const qaList = [
    new QAItem(
        "What is JavaScript?",
        "JavaScript is a programming language used to create interactive web pages."
    ),
    new QAItem(
        "What is Object-Oriented Programming?",
        "OOP is a programming paradigm based on objects and classes."
    ),
    new QAItem(
        "What is an Event Listener?",
        "It listens for user actions like clicks and executes code accordingly."
    )
];

// Render all FAQ items
const faqContainer = document.getElementById("faq-container");

qaList.forEach(item => {
    faqContainer.appendChild(item.render());
});