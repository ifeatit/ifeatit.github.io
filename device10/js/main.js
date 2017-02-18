var link = document.querySelector(".write_us");

var feedbackForm = document.querySelector(".feedback-form");
var close = feedbackForm.querySelector(".feedback-form__exit");
var nameFeedback = feedbackForm.querySelector("[name=user-name]");
var emailFeedback = feedbackForm.querySelector("[name=user-email]");
var nameFeedbackLabel = feedbackForm.querySelector("[for=user-name]");
var emailFeedbackLabel = feedbackForm.querySelector("[for=user-email]");
var message = feedbackForm.querySelector("[name=user-message]");

link.addEventListener("click", function(event) {
  event.preventDefault();

  feedbackForm.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackForm.classList.remove("popup-show");
  nameFeedback.classList.remove("feedback-error");
  emailFeedback.classList.remove("feedback-error");
});

feedbackForm.addEventListener("submit", function(event) {
  if (!nameFeedback.value || !emailFeedback.value || !message.value) {
    event.preventDefault();
    nameFeedback.classList.add("feedback-error");
    emailFeedback.classList.add("feedback-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackForm.classList.contains("popup-show")) {
      feedbackForm.classList.remove("popup-show");
      nameFeedback.classList.remove("feedback-error");
      emailFeedback.classList.remove("feedback-error");
      feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    }
  }
});

function onchageName() {
  if (nameFeedback.classList.contains("feedback-error")) {
    nameFeedback.classList.remove("feedback-error");
  }
};

function onchageEmail() {
  if (emailFeedback.classList.contains("feedback-error")) {
    emailFeedback.classList.remove("feedback-error");
  }
};

nameFeedback.addEventListener("change", onchageName);

emailFeedback.addEventListener("change", onchageEmail);
