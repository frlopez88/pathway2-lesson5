let data = []

function formSubmission(){
    event.preventDefault()
    
    let name = inputName.value
    let birthdate = inputDate.value
    let email = inputEmail.value
    let comment = inputComment.value

    let tmp = {
       name, 
       birthdate, 
       email, 
       comment
    }

    data.push(tmp)

    console.log(data)

}

