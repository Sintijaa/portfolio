import '../App.css'

function Mail() {
    return (
        <div className="box">
            <form className="">
                <input
                    type="text"
                    name="user_name"
                    id="user_email"
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="user_name"
                    id="user_email"
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="message"
                    id="user_message"
                    placeholder="Message"
                />
            </form>
        </div>

    )
}

export default Mail;