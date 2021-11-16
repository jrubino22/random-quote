const q1 = '"An ardent supporter of the hometown team should go to a game prepared to take offense, no matter what happens." -Robert Benchley'
const q2 = '"Men for the sake of getting a living forget to live." -Margaret Fuller'
const q3 = '"Nothing changes your opinion of a friend so surely as success - yours or his." -Franklin P. Jones'
const q4 = '"Luck is what you have left over after you give 100 percent." -Langston Coleman'


function run(){
    const execute = document.getElementById("btn");

    const quoteArray = [q1, q2, q3, q4];

    const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

    const textDiv = document.getElementById("text");

    textDiv.textContent = randomQuote
}
