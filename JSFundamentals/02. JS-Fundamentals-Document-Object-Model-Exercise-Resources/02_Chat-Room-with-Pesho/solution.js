function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let inputFields = Array.from(document.getElementsByTagName('input'));

    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {

            let divElement = document.createElement('div');
            let spanElement = document.createElement('span');
            let pElement = document.createElement('p');

            let senderButton = event.target.name;

            if (senderButton === 'myBtn') {
                spanElement.textContent = 'Me';
                pElement.textContent=document.getElementById('myChatBox').value;
                divElement.style.textAlign='left';
            } else if (senderButton === 'peshoBtn') {
                spanElement.textContent = 'Pesho';
                pElement.textContent=document.getElementById('peshoChatBox').value;
                divElement.style.textAlign='right';
            }
            divElement.appendChild(spanElement);
            divElement.appendChild(pElement);

            document.getElementById('chatChronology').appendChild(divElement);

            inputFields[0].value='';
            inputFields[1].value='';
        })
    })



    console.log(buttons[1]);
    console.log(inputFields[1]);
}