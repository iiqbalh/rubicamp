import User from '../models/User.js';
import login from '../views/User/view.js';
import { rl } from '../models/connect.js'
import { home } from '../main2.js'

export function loginUser() {
    rl.question('username : ', user => {
        User.username(user, function (dataUser) {

            if (!dataUser[0]) {
                console.log('username tidak terdaftar')
                loginUser()
            } else {
                rl.question('password : ', password => {
                    
                    User.password(password, function (dataPass) {

                        if (!dataPass) {
                            console.log('password tidak terdaftar')
                            loginUser()
                        } else {
                            login(dataPass)
                            home()
                        }
                    })
                })
            }
        })
    })
}