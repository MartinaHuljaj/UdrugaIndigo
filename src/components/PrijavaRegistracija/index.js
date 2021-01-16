import React, {useState} from 'react'
import styles from './style.module.css'
import Image from '../Image'
import cover from '../../images/8.png'
import {navigate} from 'gatsby'

let users =JSON.parse(localStorage.getItem("users"))

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
            localStorage.setItem("loggedIn", username)
            setError('Success')
            return navigate('/')
        }
            setError('Wrong username or password')
        }, 2000)
    }

    const register = () =>{
        let user ={
            username: document.getElementById('mail').value,
            password: document.getElementById('lozinka').value
        }
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users))
    }


    return (
        <main>
            <Image slika={cover}/>
            <div className={styles.forme}>
                <section className={styles.login}>
                    <p className={styles.p}>Prijava</p>
                    <section >
                        <label htmlFor="username" className={styles.label}>
                        Mail   
                        </label>
                        <input name="username" onChange={e => setUserName(e.target.value)} className={styles.input}/>
                    </section>
                    <section>
                        <label htmlFor="password" className={styles.label}>
                        Lozinka
                        </label>
                        <input name="password" type="password" onChange={e => setPassword(e.target.value)} className={styles.input} />
                    </section>
                    <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
                    <button className={styles.button} onClick={() => submit()}>
                        {loading ? 'Učitavanje...' : 'Prijava'}
                    </button>
                </section>

                <section className={styles.register}>  
                    <p className={styles.p}>Registracija</p>

                    <section>
                        <label className={styles.label}>
                            Ime
                            <input type="text" className={styles.input} required />
                        </label>
                    </section>

                    <section>
                        <label className={styles.label}>
                            Prezime
                            <input type="text" className={styles.input} required />
                        </label>
                    </section>

                    <section>
                        <label className={styles.label}>
                            Mail
                            <input type="email" id="mail" className={styles.input} required/>
                        </label>
                    </section>
                    <section>
                        <label className={styles.label}>
                            Lozinka
                            <input type="password" id="lozinka" className={styles.input} required />
                            </label>
                    </section>

                    <section>
                        <label className={styles.label}>
                            Ponovi lozinku
                            <input type="password" className={styles.input} required />
                        </label>
                    </section>

                    <button className={styles.button} onClick={()=> register()}>Registriraj se</button>
    
                </section>
            </div>
        </main>
        )}




    export default PrijavaRegistracija