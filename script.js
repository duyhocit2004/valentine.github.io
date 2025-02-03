const messages = [
    "cậu chắc chứ?",
    "Thật sự chắc chắn??",
    "đi mà...",
    "nếu cậu nói không, tớ thật sự rất buồn...",
    "tớ sẽ rất buồn lun đó...",
    "tớ sẽ cực cực cực kì buồn lun..",
    "Được rồi, tớ sẽ không hỏi nữa...",
    "Đùa thôi, hãy nói đồng ý nhé! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}