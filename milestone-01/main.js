var app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },

        ],
        dinamic: 0,
        inputText: "",
        inputContact: "",
    },
    methods: {
        getLastMessage(index) {
            let lastText = this.contacts[index].messages.length - 1;
            console.log(lastText)
            return this.contacts[index].messages[lastText].message
        },
        getLastHours(index) {
            let lastText = this.contacts[index].messages.length - 1;
            return this.contacts[index].messages[lastText].date.slice(10, 16)
        },
        selectionUser(index) {
            console.log(index);
            return this.dinamic = index
        },
        sendMessage() {
            let obj = {
                date: this.WhatTimeIsIt(),
                message: this.inputText,
                status: 'sent'
            }
            this.contacts[this.dinamic].messages.push(obj);
            this.inputText = ' '
            setTimeout(this.Answer, 1000)


        },
        Answer(){
            let answer ={
                date: this.WhatTimeIsIt(),
                message: 'ok',
                status: 'received'
            }
            this.contacts[this.dinamic].messages.push(answer);
        },
        searchContact(){
            this.contacts.forEach((element, index) => {
                let x = element.name.toLowerCase();
                if(x.includes(this.inputContact.toLowerCase())){
                    return element.visible = true;
                }else{
                    return element.visible = false;
                }
            })
        },
        WhatTimeIsIt(){
            let date = new Date();
                let hour = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                let hourMinutes = '';
                let day = date.getDate();
                let month = date.getMonth() + 1
                let year = date.getFullYear()

                if(minutes < 10){
                    if(seconds<10){
                        hourMinutes = hour + ':' + 0 + minutes + ':' + 0 + seconds;
                    }else{
                        hourMinutes = hour + ':' + 0 + minutes + ':' + seconds;
                    }

                } else{
                    if(seconds<10){
                        hourMinutes = hour + ':' + minutes + ':' + 0 + seconds;
                    }else{
                        hourMinutes = hour + ':' + minutes + ':' + seconds;
                    }
                    

                }
                const today = day +'/' + month + '/' + year + ' ' +hourMinutes
                console.log(today);
                return today
        },
        deleteMessage(descriptio, index){
            this.contacts[this.dinamic].messages.splice(index, 1)
        }
    }
})
