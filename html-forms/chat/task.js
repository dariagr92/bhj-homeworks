const chatWidget = document.querySelector('.chat-widget');
const send = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    });

const randomMessages = [
    'Это опять вы?',
    'Погуглите сами ваш вопрос',
    'У нас обед',
    'Думайте сами',
    'Консультация платная'
];
 
send.addEventListener('keydown', e => {
    if (e.key === 'Enter' && send.value != ''){
        let nowTime = new Date();
        nowTime = `${nowTime.getHours()}:${nowTime.getMinutes()}`;
        messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${nowTime}</div>
            <div class="message__text">${send.value}</div>
            </div>`;
        messages.innerHTML += `
            <div class="message">
            <div class="message__time">${nowTime}</div>
            <div class="message__text">${randomMessages[randomInd()]}</div>
            </div>`;
            send.value = "";
    }
    
}) 

const randomInd = () => {
    const min = 0;
    const max = randomMessages.length - 1;
    return Math.floor(Math.random() * (max - min) + min);
};