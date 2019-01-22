/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/


// define journal entry
const objectsJournalEntry = [
 {
    date:"10-2-14",
    concepts:"Abstract NU-yoga",
    entry:"in through the nose out through the soul",
    mood:"inter-dimensional terror"

},
{
    date:"4-6-17",
    concepts:"jumping rope with jesus",
    entry:"the rats are back and they brought tin-foil",
    mood:"dissregard reality"

},
{
    date:"9-400-3000",
    concepts:"Napoleon Dynamite live action role-play",
    entry:"such an idiot",
    mood:"Come on tina, eat your food"

}
]

//create an empty array for the journal entries
let journalEntry = [];
// put the old array of entries into the new array
journalEntry.push(objectsJournalEntry)
//check our progress
console.log(journalEntry)

for (let i = 0; i < objectsJournalEntry.length; i++) {

    const entryMaker = (objectsJournalEntry) => {
    return `
    <h1>${objectsJournalEntry.concepts}</h1>
    <article>${objectsJournalEntry.entry}</article>
    <h3>${objectsJournalEntry.date}</h2>
    `
    
}
const container = document.querySelector(".entryLog")
container.innerHTML += entryMaker(objectsJournalEntry[i])

}

