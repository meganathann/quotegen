var quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    source: "Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt"
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    source: "Winston Churchill"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    source: "Albert Einstein"
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    citation: "Michael Scott",
    year: 2006
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    source: "Sam Levenson"
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    source: "Chinese Proverb"
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    source: "Franklin D. Roosevelt"
  },
  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    source: "Steve Jobs"
  },
  {
    quote:
      "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    source: "Mark Zuckerberg"
  },
  {
    quote: "The best revenge is massive success.",
    source: "Frank Sinatra"
  },
  {
    quote: "The future starts today, not tomorrow.",
    source: "Pope John Paul II"
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    source: "Ralph Waldo Emerson"
  }
];

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function printQuote() {
  var currentQuote = getRandomQuote();
  var html = "";
  var quoteDiv = document.getElementById("quote-box");

  html += '<p class="quote">' + currentQuote.quote;

  if ("citation" in currentQuote) {
    html += '<span class="citation">' + currentQuote.citation + "</span>";
  }

  if ("year" in currentQuote) {
    html += '<span class="year">' + currentQuote.year + "</span>";
  }

  html += "</p>";

  html += '<p class="source">' + currentQuote.source + "</p>";

  quoteDiv.innerHTML = html;
  setRandomBackground();
}

function setRandomBackground() {
  var colors = ["black", "blue", "green", "red", "purple", "yellow"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

document.getElementById("load-quote").addEventListener("click", printQuote);
window.setInterval(printQuote, 30000); // Auto-refresh every 30 seconds

printQuote(); // Display initial quote on page load
