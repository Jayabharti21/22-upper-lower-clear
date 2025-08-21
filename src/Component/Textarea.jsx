import React, { useState } from 'react'

function Textarea() {

    const [text, setText] = useState("Enter Your Value...")


    function uppper() {
        let newText = text.toUpperCase();
        setText(newText)
    }

    function lower() {
        let newText = text.toLowerCase();
        setText(newText)
    }

    function clear() {

        setText("")
    }



    return (
        <>

            <div className="container my-4">

                <div className="form-group">
                    <h1>Drop Your Text: </h1>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="11"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>

                </div>

                <button onClick={uppper} type="button" class="btn btn-outline-primary">UpperCase</button>
                <button onClick={lower} type="button" class="btn btn-outline-primary">LowerCase</button>
                <button onClick={clear} type="button" class="btn btn-outline-primary">Clear</button>
            </div>

        </>
    )
}

export default Textarea