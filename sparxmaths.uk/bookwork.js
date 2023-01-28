/*
  remove the atrocity that is the sparxmaths bookwork check
*/
function main() {
    console.log(`EwsgitOS: sparxmaths hooked`)

    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    let questionData = {
        bookworkCode: "", question: "", answer: ""
    }

    chrome.storage.local.get("sparx").then(data => {
        let previousAnswers = data.sparx.sparxPreviousAnswers || {}

        console.log(data)

        new MutationObserver((mutations, observer) => {

            let middle = document.querySelectorAll("#top-bar > div")[0]

            if (!middle) return

            if (document.querySelectorAll(`#skill-delivery-answer-button`)[0]) {
                document.querySelectorAll(`#skill-delivery-answer-button`)[0].onclick = () => {
                    setTimeout(() => {
                        if (!document.getElementById(`skill-delivery-submit-button`)) return console.log("unable to detect the submit button")
                        document.getElementById(`skill-delivery-submit-button`).onclick = () => {
                            questionData.answer = document.querySelectorAll(`.page.answer-only`)[0].innerHTML
                            previousAnswers[middle.children[0].innerHTML.replaceAll("<span>Bookwork code: ", "").replaceAll("</span>", "")] = {
                                code: middle.children[0].innerHTML.replaceAll("<span>Bookwork code: ", "").replaceAll("</span>", ""),
                                answer: document.querySelectorAll(`.page.answer-only`)[0].innerHTML
                            }
                            console.table(previousAnswers)
                            chrome.storage.local.set({sparx: {sparxPreviousAnswers: previousAnswers}}).then(resp => console.log(resp))
                        }
                    }, 1000)
                }
            }

            if (document.querySelector("#answer-wac-box")) {
                let askedCode = document.querySelectorAll("#answer-wac-box > div > div > div.wac-text-container > div.bookwork-code")[0].innerText.replaceAll("Bookwork code: ", "")

                if (!document.getElementById("wacAnswerContainer")) {
                    document.body.appendChild(document.createElement("iframe").id = "wacAnswerContainer")

                    let wacAnswerContainer = document.getElementById("wacAnswerContainer")

                    let savedValue = previousAnswers[askedCode]

                    wacAnswerContainer.innerHTML = savedValue.answer
                }
            }

            document.querySelectorAll(`#status-bar > div.back-button`)[0].onclick = () => {
                questionData = {
                    bookworkCode: "", question: "", answer: ""
                }
            }

            if (middle.children[0].innerHTML.replaceAll("<span>Bookwork code: ", "").replaceAll("</span>", "") === questionData.bookworkCode) return

            questionData.bookworkCode = middle.children[0].innerHTML.replaceAll("<span>Bookwork code: ", "").replaceAll("</span>", "")

            middle.children[1].innerHTML = `<img class="calculator-image" src="./img/calculator_allowed_scaled.svg" alt="Calculator Allowed">
                                          <span class="calculator-text">
                                            <span>Calculator</span>
                                            <span>
                                                <strong>allowed</strong>
                                            </span>
                                          </span>
                                        </div>`

            questionData.question = document.querySelectorAll(`#app-container > div.screen > div.main-view > div > div > div > div.skill-delivery-view > div.view-body > div > div > div > div > div`)[0]

            console.log(questionData)

        }).observe(document.getElementById("app-container"), {subtree: true, childList: true})
    })
}

main()