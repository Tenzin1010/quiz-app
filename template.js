function welcomeTemplate() {
    return `
    <div class="welcomeScreen">
        <h1>Do you like Soccer AKA Football? Prove it</h1>
        <button type="button" class="kickOffbutton">Kick Off</button>
    </div>
    <div class='questionScreen'>
        <form action="question">
            <h2>Question Title</h2>
            <fieldset>
                <ul> </ul>
            </fieldset>
            <button type="submit" class="submitAnswerButton">Submit</button>
        </form>
    </div>
    <div class = "showResultofUserAnswer">
    </div>
    <div class='showSummary'></div>`
}


