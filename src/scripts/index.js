import UI from './ui'
const {client_id,client_secret} = require('./config.json')
const Github = require('./github')
import '../css/style.scss'
import 'bootstrap'
const github = new Github(client_id,client_secret)
const ui = new UI()

const userForm = document.getElementById('userForm')
userForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let text = document.getElementById('textSearch').value
    if(text !== ''){
        github.fuetchUser(text)
            .then(
                data=>{
                   if (data.message === "Not Found"){
                        ui.showMessage('user not existe','alert alert-dange mt-2 col-md-12')
                    }else{
                        ui.showProfile(data)
                       github.getRepos(text).then(
                           data=>{
                               console.log(data)
                           }
                       )

                    }


                }
            )


    }else{

    }


})


console.log('salut ca va ')

