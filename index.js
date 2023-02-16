const btn = document.querySelector('.btn');
const emojiName = document.querySelector('.emoji-name');
const emoji = [];
async function getEmoji() {
    try {
        emojiName.innerText = "Loading..."
        btn.innerText = "Wait"
        btn.disabled = true;
        let response = await fetch("https://emoji-api.com/emojis?access_key=66078e35461a53feca9aa30e51991059834f7794");
        let data = await response.json();
        btn.disabled = false;
        btn.innerText = "Click"

        emojiName.innerText = "Emoji Name";


        for (let i = 0; i < 2694; i++) {
            emoji.push({
                emojiName: data[i].character,
                emojiCode: data[i].unicodeName
            })
        }

    } catch (error) {
        emojiName.innerText = "An Error Occured";

    }



}
getEmoji();




btn.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * 2693) + 1;

    btn.innerText = emoji[rand].emojiName;
    emojiName.innerText = emoji[rand].emojiCode;

});
