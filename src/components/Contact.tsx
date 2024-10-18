const Contact = () => {
    return (
        <div className="max-w[1000px] bg-black mx-auto flex justify-center text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8" id="contact">
            <div className="bg-white/10 p-6 rounded-xl mx-w-[550px]">
                <h2 className="text-5xl font-bold text-green-700 mb-4">lets connect</h2>
                <p className="text-white/70 mb-6">send me a message</p>
                <form className="space-y-4" action="https://getform.io/f/aolgxknb" method="POST">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-700" type="text" placeholder="Name" name="name"/>
                        <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-700" type="text" placeholder="Last Name" name="lastname"/>
                        <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-700" type="text" placeholder="Email" name="email" />
                        <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-700" type="phone" placeholder="Phone" name="phone"/>
                    </div>
                    <textarea className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-700" placeholder="Message" name="message"></textarea>
                    <button className="bg-green-700 hover:bg-green-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl" type="submit">Send me a message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;