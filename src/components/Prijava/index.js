import React, {useState} from 'react'
import styles from './style.module.css'
import Image from '../Image'
import cover from '../../images/8.png'
import {navigate} from 'gatsby'

const users = [
    {
      username: "mate",
      password: "123"
    },
    {
      username: "jure",
      password: "123"
    },
    ]

const Prijava=()=>{
const [username, setUserName] = useState()
const [password, setPassword] = useState()
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)

const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
    const loginSuccessful = !!users.find(user => user.username === username && user.password === password)
    setLoading(false)
    if (loginSuccessful) {
        localStorage.setItem("loggedIn", username)
        setError('Success')
        return navigate('/')
    }
        setError('Wrong username or password')
    }, 2000)
}

return (
    <main className={styles.background} onKeyDown={key => {
        if (key.key === "Enter")
        return submit()
    }}>
        <Image slika={cover}/>
        <section className={styles.form}>
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
                {loading ? 'Loading...' : 'Login'}
            </button>
        </section>
    </main>
    )}




    export default Prijava