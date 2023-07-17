/*
  remove the atrocity that is the sparxmaths bookwork check
*/

function main() {
    console.log(`EwsgitOS: sparxmaths hooked 🪝`)

//     sample answers
//     console.log(parseAnswer(`<div class="keyboard-focus-start-point" tabindex="-1"></div>
// <div class="answer-part answer-part-outer" style="left: 590px;">
//     <div class="answer-part">
//         <div class="gap-container selected">
//             <div class="gap-container-bridge" style="z-index: 3; right: 9px;"></div>
//             <div class="keypad-number-input" style="width: 154px; height: 114px;" tabindex="0"><input
//                     autocapitalize="off" autocomplete="off" autocorrect="off" class="number-input" maxlength="50" readonly=""
//                     size="15" spellcheck="false" tabindex="-1" type="text" value="90">
//                 <span class="keypad-animation-container" style="left: -108px;">
// <div class="keypad-container"
//      style="display: block; opacity: 1; transform-origin: 50% 50% 0px; transform: scaleX(1) scaleY(1);">
// <div class="keypad keypad-grid">
// <div class="keypad-row">
// <div class="button-container">
// <div class="keypad-button" data-test-target="7">
// <span>7</span>
// </div>
// </div><div class="button-container"><div class="keypad-button" data-test-target="8"><span>8</span></div></div><div
//         class="button-container"><div class="keypad-button" data-test-target="9"><span>9</span></div></div><div
//         class="button-container"><div class="keypad-button keypad-button-backspace" data-test-target="Backspace"><img
//         alt="back button"
//         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAeCAYAAABXNvynAAAACXBIWXMAAAsSAAALEgHS3X78AAABrUlEQVRYhe2XwW2DMBiFv1TVf21HaDdINggbZIPCAEjNBO0GqeQBYBM6AiNkhPTqS3uwiYACMbYrVIl3s2SePszzM4ZVqzrahDysRA7ANhLLmC5AmWt9Abj3cVAij8AJSONxTeoF2IEHsBLZAgVmZUvg2Lz9X0iJnIDXZjwLWImkmJUFyHKty2hk4/pqD5yAexGoMbB1dDQH3d2aYCNQYWBLIFkKFm6s8EIRmNTgCiuRRyVSYDbXGbOqpaupEvm2z0/NSe28vTvuAHCkCNRAOgZtv1xh583y7gBbowp4wkQg86yshBHoHmwy1/8KbPvOKwJ9WYhf0KGwHWBMOX8SqQUGoKtQWHCotRC1oM/AHvNf4A0LXeAPa1rZjRdLB8yeAGgOIG9dgXOtj0BmzSubtyD1MvvMjfZwUScSdqM1n7BQIoU9lkNhk1zrMxPt4QVsoWtrXGK6eHZExtpgrD2CgBvjXOsM/4iMtsEA9D4YuGVe4heRZAi25dtAN+DOcroiLfl7qUTegbdc6w049nCEiETTrIMjZovM0EN74HVrXuASWuda7+AfXvNXrerpBwSP8Fw3B2WtAAAAAElFTkSuQmCC"></div></div></div><div
//         class="keypad-row"><div class="button-container"><div class="keypad-button" data-test-target="4"><span>4</span></div></div><div
//         class="button-container"><div class="keypad-button" data-test-target="5"><span>5</span></div></div><div
//         class="button-container"><div class="keypad-button" data-test-target="6"><span>6</span></div></div><div
//         class="button-container"><div class="keypad-button" data-test-target="-"><span>−</span></div></div></div><div
//         class="keypad-row"><div class="button-container"><div class="keypad-button" data-test-target="1"><span>1</span></div></div><div
//         class="button-container"><div class="keypad-button" data-test-target="2"><span>2</span></div></div><div
//         class="button-container"><div class="keypad-button" data-test-target="3"><span>3</span></div></div><div
//         class="button-container"></div></div><div class="keypad-row"><div class="button-container wide-button"><div
//         class="keypad-button" data-test-target="0"><span>0</span></div></div><div class="button-container"><div
//         class="keypad-button" data-test-target="."><span>.</span></div></div><div class="button-container"></div></div></div></div></span>
//             </div>
//         </div>
//         <div><span class="text"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><msup><mrow></mrow><mo>∘</mo></msup></mrow><annotation
//                 encoding="application/x-tex">{^\\circ}</annotation></semantics></math></span><span aria-hidden="true"
//                                                                                                   class="katex-html"><span
//                 class="base"><span class="strut" style="height:0.674115em;vertical-align:0em;"></span><span
//                 class="mord"><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span
//                 class="vlist-r"><span class="vlist" style="height:0.674115em;"><span
//                 style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span
//                 class="sizing reset-size6 size3 mtight"><span
//                 class="mbin mtight">∘</span></span></span></span></span></span></span></span></span></span></span></span></span>
//         </div>
//     </div>
// </div>
// <div class="entry-area" style="width: 1389px; height: 383px; top: -1px;">
//     <div>
//         <div class="entry-area-bubble"
//              style="border-top-right-radius: 5px; border-top-left-radius: 5px; left: 471px; width: 428px; height: 363px; padding: 0px; top: 0px; display: flex; position: absolute; flex-flow: column nowrap;"></div>
//     </div>
// </div>
// `))
//
//     console.log(parseAnswer(`<div class="choices">
//     <div class="choice choice-text" tabindex="0">
//         <div><span class="text">clockwise</span></div>
//     </div>
//     <div class="choice choice-text selected" tabindex="0">
//         <div><span class="text">anticlockwise</span></div>
//     </div>
// </div>
// `))

    if (!document.getElementById("app-container")) setTimeout(() => main(), 1000)

    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    let questionData = {
        bookworkCode: "", question: "", answer: ""
    }

    let previousAnswers = {}

    chrome.storage.local.get("sparxPreviousAnswers", (data) => {
        if (!data) {
            previousAnswers = {}
        } else {
            previousAnswers = data.sparxPreviousAnswers || {}
            console.log("synced: ", previousAnswers)
        }
    })

    new MutationObserver((mutations, observer) => {
        setTimeout(() => {
            onMutation()
        }, 100)
    }).observe(document.getElementById("app-container"), { subtree: true, childList: true })

    function onMutation() {
        if (document.getElementById("answer-wac-box")) {
            let wacCode = ""
            wacCode = document.querySelector("#answer-wac-box > div > div > div.wac-text-container > div.bookwork-code").innerHTML.replaceAll("Bookwork code: ", "").replaceAll("</span>", "")

            let popup;

            if (!document.getElementById("wac-popup-123")) {
                popup = document.createElement("div")
                document.body.appendChild(popup)
                popup.id = "wac-popup-123"
                popup.style.right = "0.5rem"
                popup.style.top = "calc(55px + 0.5rem)"
                popup.style.backgroundColor = "#eeeeee"
                popup.style.borderRadius = "1rem"
                popup.style.position = "fixed"
                popup.style.zIndex = "100000"
                popup.style.padding = "1rem 2rem"
            } else {
                popup = document.getElementById("wac-popup-123")
            }

            popup.innerHTML = (previousAnswers[wacCode]?.parsed?.toString().replaceAll(",", "<br>")) || "The requested code doesn't exist ;("

            document.getElementById("bottom-bar").onclick = () => {
                popup.remove()
            }

            return
        } else {
            if (document.getElementById("wac-popup-123")) document.getElementById("wac-popup-123").remove()
        }

        let middle = document.querySelectorAll("#top-bar > .middle")?.[0]

        if (!middle) {
            return console.log("%cEOSEXT: unable to find bookwork container", "background:yellow;color:white;")
        }

        if (document.querySelectorAll(`#skill-delivery-answer-button`)?.[0]) {
            document.querySelectorAll(`#skill-delivery-answer-button`)[0].onclick = () => {
                setTimeout(() => {
                    if (!document.getElementById(`skill-delivery-submit-button`)) {
				if (!document.getElementById("question-hooked-success-marker")) {
					let newElem = document.createElement("div")
					newElem.id = "question-hooked-success-marker"
					newElem.style.position = "fixed"
					newElem.style.display = "hidden"
					newElem.style.right = "0.5rem"
					newElem.style.top = "0.5rem"
					newElem.style.width = "2.5rem"
					newElem.style.height = "2.5rem"
					newElem.style.backgroundColor = "#ff0000"
					newElem.style.zIndex = 1000
					newElem.style.borderRadius = "1rem"
					document.body.appendChild(newElem)
				} else {
					document.getElementById("question-hooked-success-marker").style.display = "block"
				}
			return console.log("unable to detect the submit button")
		    }
                    document.getElementById(`skill-delivery-submit-button`).onclick = () => {
                        questionData.answer = document.querySelectorAll(`.answer`)[0].innerHTML
                        if (document.querySelector(`.answer`)) {
                            previousAnswers[middle.children[0].innerHTML.replaceAll("<span>Bookwork code: ", "").replaceAll("</span>", "")] = {
                                // raw: document.querySelectorAll(`.answer`)[0].innerHTML,
                                parsed: parseAnswer(document.querySelectorAll(`.answer`)[0].innerHTML)
                            }
                            chrome.storage.local.set({sparxPreviousAnswers: previousAnswers}, null)
                        } else {
                        	console.error("EOSEXT: unable to find answer supplied")
					let newElem = document.createElement("div")
					newElem.id = "question-hooked-success-marker"
					newElem.style.position = "fixed"
					newElem.style.display = "hidden"
					newElem.style.right = "0.5rem"
					newElem.style.top = "0.5rem"
					newElem.style.width = "calc(100vw-1rem)"
					newElem.style.height = "7.5rem"
					newElem.style.backgroundColor = "#ff0000"
					newElem.style.zIndex = 1000
					newElem.style.borderRadius = "1rem"
					newElem.style.color = "#ffffff"
					newElem.style.fontSize = "2rem"
					newElem.style.fontWeight = "900"
					newElem.innerHTML = "Last code not saved!<br>FORCE RELOADING TO FIX THE ISSUE"
					document.body.appendChild(newElem)
					setTimeout(() => { window.location.reload() }, 3000)
			}
                        console.table(previousAnswers)
                    }
                }, 1500)
            }
        }

        document.querySelectorAll(`#status-bar > div.back-button`)[0].onclick = () => {
            questionData = {
                bookworkCode: "", question: "", answer: ""
            }
        }

        if (middle?.children?.[0]?.innerHTML?.replaceAll("<span>Bookwork code: ", "")?.replaceAll("</span>", "") === questionData.bookworkCode) return

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

    }
}

main()

function parseAnswer(answer) {
    // use a random string to obstruct it's meaning
    let node = document.createElement("div")
    node.id = "askur83jjhef8HU8h3jfelkw_Button_Component_678"
    document.body.appendChild(node)
    const answerNode = document.getElementById("askur83jjhef8HU8h3jfelkw_Button_Component_678")
    answerNode.innerHTML = answer
    answerNode.style.position = "absolute"
    answerNode.style.top = "50%"
    answerNode.style.left = "50%"
    answerNode.style.translate = "-50% -50%"
    answerNode.style.pointerEvents = "none"
    answerNode.style.display = "none"

    const DETECTED_ANSWERS = []

    answerNode.querySelectorAll(".keypad-number-input").forEach(keypad => {
        let keypadInput = keypad.querySelector("input.number-input")

        DETECTED_ANSWERS.push(keypadInput.value.toString())
    })

    answerNode.querySelectorAll(".choices").forEach(choice => {
        let selectedChoise = choice.querySelector(".selected").querySelector("div").querySelector("span")
        DETECTED_ANSWERS.push(selectedChoise.innerText)
    })

    answerNode.querySelectorAll(".gap-slot").forEach(slot => {
        let selectedChoise = slot.querySelector(".selected").querySelector("div").querySelector("div").querySelector("span")
        DETECTED_ANSWERS.push(selectedChoise.innerText)
    })

    answerNode.remove()
    return DETECTED_ANSWERS
}
