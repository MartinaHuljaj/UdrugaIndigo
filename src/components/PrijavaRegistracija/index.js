import React, {useState} from 'react'
import styles from './style.module.css'
import Image from '../Image'
import cover from '../../images/8.png'
import {navigate} from 'gatsby'
import {myLocalStorage} from '../../helper'

let users = [
    {
      username: "mate@mail.com",
      password: "123"
    },
    {
      username: "jure@mail.com",
      password: "123"
    },
    ]


const PrijavaRegistracija=()=>{
    
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const submit = () => {
        setError(false)
        setLoading(true)
        setTimeout(() => {
        let loginSuccessful = !!users.find(user => user.username === username && user.password === password)
        setLoading(false)
        if (loginSuccessful) {
            myLocalStorage.setItem("loggedIn", username)
            setError('Uspjeh!')
            return navigate('/')
        }
            setError('Ups! Unijeli ste pogrešnu lozinku ili mail, pokušajte ponovno.')
        }, 2000)
    }

    const register = () =>{
        let user ={
            username: document.getElementById('mail').value,
            password: document.getElementById('lozinka').value
        }
        users.push(user);
        myLocalStorage.setItem("users",JSON.stringify(users))
    }


    return (
        <main>
            <section className={styles.bigBox}>
            <Image slika={cover}/>
            <div className={styles.forme}>
                <section className={styles.login}>
                    <p className={styles.p}>Prijava</p>
                    <div>
                        <label htmlFor="username" className={styles.label}>
                        E-mail:   
                        </label>
                        <input name="username" onChange={e => setUserName(e.target.value)} className={styles.input}/>
                    </div>
                    <div>
                        <label htmlFor="password" className={styles.label}>
                        Lozinka:
                        </label>
                        <input name="password" type="password" onChange={e => setPassword(e.target.value)} className={styles.input} />
                    </div>
                    <p className={`${styles[error !== "Uspjeh" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
                    <button className={styles.button} onClick={() => submit()}>
                        {loading ? 'Učitavanje...' : 'Prijava'}
                    </button>
                </section>

                <section className={styles.register}>  
                    <p className={styles.p}>Registracija</p>
                    <div>
                        <label className={styles.label}>
                            Ime:
                            <input type="text" className={styles.input} required />
                        </label>
                    </div>

                    <div>
                        <label className={styles.label}>
                            Prezime:
                            <input type="text" className={styles.input} required />
                        </label>
                    </div>

                    <div>
                        <label className={styles.label}>
                            E-mail:
                            <input type="email" id="mail" className={styles.input} required/>
                        </label>
                    </div>
                    <div>
                        <label className={styles.label}>
                            Lozinka:
                            <input type="password" id="lozinka" className={styles.input} required />
                            </label>
                    </div>

                    <div>
                        <label className={styles.label}>
                            Ponovi lozinku:
                            <input type="password" className={styles.input} required />
                        </label>
                    </div>

                    <button className={styles.button} onClick={()=> register()}>Registriraj se</button>
    
                </section>
            </div>
            </section>
        </main>
        )}




    export default PrijavaRegistracija