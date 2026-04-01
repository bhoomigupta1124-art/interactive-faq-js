class QAItem {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.element = null;
    }

    toggle() {
        this.element.classList.toggle("active");

        const icon = this.element.querySelector(".icon");
        if (this.element.classList.contains("active")) {
            icon.textContent = "-";
        } else {
            icon.textContent = "+";
        }
    }

    render() {
        const container = document.createElement("div");
        container.className = "qa-item";

        container.innerHTML = `
            <div class="question">
                ${this.question}
                <span class="icon">+</span>
            </div>
            <div class="answer">
                ${this.answer}
            </div>
        `;

        container.querySelector(".question")
            .addEventListener("click", () => this.toggle());

        this.element = container;
        return container;
    }
}

// Create Q&A objects
const qaList = [
    new QAItem("What is JavaScript?",
        "JavaScript is a programming language used to make web pages interactive."),
    
    new QAItem("What is OOP?",
        "Object-Oriented Programming is a way of structuring code using classes and objects."),
    
    new QAItem("What is an Event Listener?",
        "It listens for user actions like clicks and executes code in response.")
];

// Render all items
const faqContainer = document.getElementById("faq-container");

qaList.forEach(item => {
    faqContainer.appendChild(item.render());
});
