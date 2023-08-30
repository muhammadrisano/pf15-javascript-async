class PrintError {

    constructor(error){
        this.message = error
    }
    // message = ''

    show(){
        console.log(`errornya adalah ${this.message}`);
    }
}

const error = new PrintError('terjadi kelasahan input')

error.show()