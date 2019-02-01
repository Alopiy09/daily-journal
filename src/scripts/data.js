// let journalEntry = [];
//    objectsJournalEntry = journalEntry
//  fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(response => response.json)  // Parse as JSON
//     .then(entries => { objectsJournalEntry(entries)}
// )
const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            .then(entries => {objectsJournalEntry(entries)})
    }
}
