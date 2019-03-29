// make reading easier!!
// by focusing on a sentence at a time.
let sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate metus et nulla elementum faucibus. Suspendisse ultricies lectus odio, eget tincidunt lorem viverra scelerisque. Praesent efficitur consectetur enim, id porttitor massa placerat ut. Nullam ac ante placerat, accumsan dui non, auctor sapien. Praesent commodo facilisis nisl, quis molestie ante tristique et. Suspendisse gravida tincidunt varius. Suspendisse dapibus fringilla porttitor. Integer quis sodales enim. Sed feugiat sapien sit amet risus laoreet porttitor. Aliquam consequat gravida nisl, quis posuere diam. Duis sit amet rutrum dolor. In sollicitudin at enim ut venenatis. Nullam auctor maximus erat. Nulla dolor arcu, hendrerit faucibus placerat et, pretium non diam. Aenean in tempus nisl."

// break the sentence by period and space
let sentenceBreak = sentence.split(". ");
let craftTextToHtml = "";

// embed every sentence with spans.
sentenceBreak.forEach(function (sentence) {
  craftTextToHtml += "<span>" + sentence + ". </span>";
});

let displayTextOnDom = document.querySelector("#text");
displayTextOnDom.innerHTML = craftTextToHtml;

window.addEventListener("keyup", function (ev) {
  highlightCurrentSentence(ev.keyCode);
});

// make the first sentence automatically the active one
let AllSentencesSpans = document.querySelectorAll("span");
AllSentencesSpans[0].classList = "active";


// on left or right arrow key press highlight the
// current sentence.
let currentSentenceCounter = 0;
function highlightCurrentSentence (keycode) {
  if (keycode === 39) {
    if (currentSentenceCounter < AllSentencesSpans.length - 1) {
      AllSentencesSpans[currentSentenceCounter].classList = "";
      currentSentenceCounter += 1;
      AllSentencesSpans[currentSentenceCounter].classList = "active";
    }
  } else if (keycode === 37) {
    if (currentSentenceCounter > 0) {
      AllSentencesSpans[currentSentenceCounter].classList = "";
      currentSentenceCounter -= 1;
      AllSentencesSpans[currentSentenceCounter].classList = "active";  }
    }
}