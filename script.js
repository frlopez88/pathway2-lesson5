let data = []

function formSubmission(){
    event.preventDefault()
    
    let name = inputName.value
    let birthdate = inputDate.value
    let email = inputEmail.value
    let comment = inputComment.value
    let gender = inputGender.value

    let tmp = {
       name, 
       birthdate, 
       email, 
       comment, 
       gender
    }

    data.push(tmp)

    renderData()

}

function renderData(){

    let tableLayOut = `
        <tr>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Email</th>
            <th>Gender</th>
        </tr>
    `

    for(let i=0; i < data.length; i++){
        tableLayOut += `
                        <tr> 
                        <td> ${data[i].name} </td>
                        <td> ${data[i].birthdate} </td>
                        <td> ${data[i].email} </td>
                        <td> ${data[i].gender} </td>
                        </tr>`
    }

    dataOutput.innerHTML = tableLayOut


}

