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

    if (!document.getElementById("root")) setTimeout(() => main(), 1000)

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
    }).observe(document.getElementById("root"), {subtree: true, childList: true})

    function onMutation() {
        if (document.querySelector("#radix-\\:r3h\\: > div._WACContainer_1cxo7_1")) {
            let wacCode = ""
            wacCode = document.querySelector("#radix-\\:r3h\\: > div._WACContainer_1cxo7_1 > div._Chip_1l3e3_1._Selected_1l3e3_13._Boxy_1l3e3_75._Filled_1l3e3_8._md_1l3e3_84._Bookwork_1cxo7_33").innerHTML.replaceAll("Bookwork ", "")

            console.log("WAC CODE", wacCode)

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

        if (!document.querySelectorAll("#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionInfo_9pd0g_1")?.[0]) {
            return console.log("%cEOSEXT: unable to find bookwork container", "background:orange;color:white;")
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
                    document.getElementById(`#BottomBar > div > div:nth-child(3) > button`).onclick = () => {
                        questionData.answer = document.querySelectorAll(`#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionWrapper_138c5_59 > div._Question_xv49g_1._QuestionCentered_xv49g_42._QuestionAnswerOnly_xv49g_47`)[0].innerHTML
                        if (document.querySelector(`#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionWrapper_138c5_59 > div._Question_xv49g_1._QuestionCentered_xv49g_42._QuestionAnswerOnly_xv49g_47`)) {
                            previousAnswers[document.querySelectorAll("#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionInfo_9pd0g_1 > div:nth-child(1) > div")?.[0]?.innerHTML.replaceAll("Bookwork code: ", "")] = {
                                // raw: document.querySelectorAll(`.answer`)[0].innerHTML,
                                parsed: parseAnswer(document.querySelectorAll(`#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionWrapper_138c5_59`)[0].innerHTML)
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
                            setTimeout(() => {
                                window.location.reload()
                            }, 3000)
                        }
                        console.table(previousAnswers)
                    }
                }, 1500)
            }
        }

        document.querySelectorAll(`#root > div._TopBanner_g7mut_1 > div._BannerLeft_g7mut_20 > div > a`)[0].onclick = () => {
            questionData = {
                bookworkCode: "", question: "", answer: ""
            }
        }

        if (document.querySelectorAll("#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionInfo_9pd0g_1 > div:nth-child(1) > div")?.[0]?.innerHTML?.replaceAll("<span>Bookwork code: ", "")?.replaceAll("</span>", "") === questionData.bookworkCode) return

        questionData.bookworkCode = document.querySelectorAll("#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionInfo_9pd0g_1 > div:nth-child(1) > div")?.[0]?.innerHTML.replaceAll("Bookwork code: ", "")

        if (document.querySelectorAll("#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionInfo_9pd0g_1 > div._CalculatorInfoContainer_9pd0g_9 > div._Sm_tqgyz_21")[0].innerHTML !== `<p>Calculator allowed</p>`) {
            document.querySelectorAll("#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionInfo_9pd0g_1 > div._CalculatorInfoContainer_9pd0g_9")[0].innerHTML = `
            <img class="_CalculatorIcon_9pd0g_21" src="https://static.sparxhomework.uk/sw2/fb8e95f68f418f79fa6fc488d564f040918204da/assets/CalculatorAllowed-7c873ab4.svg">
            <div class="_Sm_tqgyz_21">
                <p>Calculator allowed</p>
            </div>
            `
        }

        questionData.question = document.querySelectorAll(`#root > div._LQDContainer_2l6st_1 > div._TransitionContainer_jihjj_1 > div > div > div._QuestionContainer_138c5_1._QuestionScrollableContent_138c5_27 > div._QuestionWrapper_138c5_59 > div._Question_xv49g_1._QuestionCentered_xv49g_42._QuestionAnswerOnly_xv49g_47`)[0]

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
