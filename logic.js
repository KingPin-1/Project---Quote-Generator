const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const allQuotes = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela",
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney",
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
        person: "Steve Jobs",
    },
    {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt",
    },
    {
        text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        person: "Oprah Winfrey",
    },
    {
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person: "James Cameron",
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        person: "John Lennon",
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        person: "Aristotle",
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years.",
        person: "Abraham Lincoln",
    },
    {
        text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        person: "Dr. Seuss",
    },
];

btn.addEventListener("click", function () {
    const index = Math.floor(Math.random() * allQuotes.length);
    quote.innerText = allQuotes[index].text;
    author.innerText = allQuotes[index].person;
});
