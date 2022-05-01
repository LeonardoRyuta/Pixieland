import Head from 'next/head'
import styles from '../styles/collab.module.css'
import { useEffect, useState } from 'react';

export default function Collab() {
    const delay = ms => new Promise(res => setTimeout(res, ms))

    const [Incomplete, setShow] = useState(0);
    const [complete, setComplete] = useState(0);


    useEffect(() => {
        
    }, [])

    const submitForm = async() => {
        setShow(Incomplete = 0)
        let collabName = document.getElementById("name").value
        let collabEmail = document.getElementById("email").value
        let collabMessage = document.getElementById("message").value
        
        if (collabName === "" || collabEmail === "" || collabMessage === "") {
            setShow(Incomplete + 1)
            await delay(5000)
            setShow(Incomplete = 2)
        } else {
            var formContent = [];
            var inputs = document.getElementsByTagName("input")
            for (var index in inputs) {
                var values = inputs[index].value;
                if (typeof values != "undefined") {
                    formContent.push(values)
                    inputs[index].value = ''
                }
            }
            formContent.push(document.getElementById("message").value)
            document.getElementById("message").value = ''
            //console.log(formContent)
            const result = await fetch("https://pixieland-bot.leonardoryuta05.repl.co/project", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name : formContent[0],
                    email : formContent[2],
                    project : formContent[1],
                    subject : formContent[3],
                    message : formContent[4]
                })
            })
            //console.log(msgObj)
            setComplete(complete + 1)
            await delay(5000)
            setComplete(complete = 2)
        }
    }

    return (
    <div className={styles.main}>
        {
            Incomplete === 1 ?
                <div style={{backgroundColor:"#f8d7da", border:"2px solid #f5c2c7"}} className={styles.alarmShow}>Please fill in all required text boxes!</div>
            : Incomplete === 2 ?
                <div style={{backgroundColor:"#f8d7da", border:"2px solid #f5c2c7"}} className={styles.alarmHide}>Please fill in all required text boxes!</div>
            :
                null
        }
        {
            complete === 1 ?
            <div className={styles.alarmShow} style={{backgroundColor:"#d1e7dd", border:"2px solid #badbcc"}} >Form successfully sent!</div>
            : complete === 2 ?
            <div className={styles.alarmHide} style={{backgroundColor:"#d1e7dd", border:"2px solid #badbcc"}} >Form successfully sent!</div>
            :
            null
        }

        <h2>Partnerships & Collabs</h2>
        <div className={styles.content}>
            <div className={styles.infoText}>
                If you are interested in a collaboration with Pixieland, please email us at team@pixielandnft.com 
            </div>
            <div className={styles.infoText}>
                or 
            </div>
            <div className={styles.infoText}>
                fill and submit this form (* = required field):
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div className={styles.part1}>
                    <div className={styles.inputs}>
                        <div>Name*</div>
                        <input id="name" className={styles.textInputs}></input>
                    </div>
                    <div className={styles.inputs}>
                        <div>Project</div>
                        <input className={styles.textInputs}></input>
                    </div>
                </div>
                <div className={styles.part1}>
                    <div className={styles.inputs}>
                        <div>Email*</div>
                        <input id="email" className={styles.textInputs}></input>
                    </div>
                    <div className={styles.inputs}>
                        <div>Subject</div>
                        <input className={styles.textInputs}></input>
                    </div>
                </div>
            </div>
            <div className={styles.part1}>
              <div className={styles.inputs}>
                <div>Message*</div>
                <textarea id="message" className={styles.messageInput}></textarea>
              </div>
            </div>
        </div>
        <button onClick={()=>{submitForm()}} className={styles.submitButton}>Submit</button>
    </div>
    )
  }