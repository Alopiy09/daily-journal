for (let i = 0; i < objectsJournalEntry.length; i++) {
    
    const entryMaker = (journalEntry) => {
        return `
    <h1>${journalEntry.concepts}</h1>
    <article>${journalEntry.entry}</article>
    <h3>${journalEntry.date}</h2>
    `

    }
    const container = document.querySelector(".entryLog")
container.innerHTML += entryMaker(journalEntry[i])
}

// journalEntry.push(entries)