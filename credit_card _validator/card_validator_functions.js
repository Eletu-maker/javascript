class credit_card{
    constructor(number){
        this.number = number;
    }

    getFirstSum(){
        let sum = Number(0)
        let data ;
        for(let count =this.number.length; count>=0; count -=2){
            if (this.number.charAt(count) == '5'){
                data = 1
            }else if(this.number.charAt(count) == '6'){
                data = 3
            }else if(this.number.charAt(count) == '7'){
                data = 5
            }else if(this.number.charAt(count) == '8'){
                data = 7
            }else {
                data =Number(this.number.charAt(count)) *2
            }

            sum += data
        }
        return sum
    }


    getSecondSum(){
        let sum = Number(0)
        for(let count =this.number.length-1; count>=0; count -=2){
            sum += Number( this.number.charAt(count));
        }
        return sum
    }


    checkValid(){
        const first_sum = this.getFirstSum();
        const second_sum = this.getSecondSum();
        let data = first_sum + second_sum
        if(data %10 ==0){
            return "valid"
        }else {
            return "invalid"
        }
    
    }
    /*
    4for Visa Cards
    5for MasterCard,
    37 for AmericanExpressCards
    6for Discover cards.
*/
    checkType(){
        if(this.number.charAt(0) =='4'){
            return "Visa Cards"
        }else if(this.number.charAt(0) =='5'){
            return "MasterCard"
        }else if(this.number.charAt(0) =='3' && this.number.charAt(0) =='7'){
            return "AmericanExpressCards"
        }else if(this.number.charAt(0) =='6'){
            return "Discover cards"
        }else {
            return "not a card"
        }
    }
}


module.exports = credit_card