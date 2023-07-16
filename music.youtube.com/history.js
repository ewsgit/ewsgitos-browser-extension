document.querySelectorAll("#button-shape > button > yt-touch-feedback-shape").forEach(button => {
    button.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        e.currentTarget.click()
        setTimeout(() => {
        document.querySelector("#items > ytmusic-menu-service-item-renderer:nth-child(9)").click();
        }, 50)
    })
})
