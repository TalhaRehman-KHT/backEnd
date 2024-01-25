

const cards = ['King', 'A', "10", 'Queen', "2"];

const shuffelCards = async(array)=>{
const no = array.length-2 
    for (let i = no; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 2));
        [array[i], array[j]] = [array[j], array[i]];
    }

}

function shuffleCards() {
    shuffelCards(cards);
    console.log(cards)
}

