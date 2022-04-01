import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css"

function ContactForm() {
    const [state, handleSubmit] = useForm("moqyndap");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} id="contactForm">
            <p id="pleaseContact">Please fill out the form below to contact us.</p>
            {/* name inputs */}
            <div id="nameInput">
                <div id="firstNameInput">
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        id="firstname"
                        type="firstname"
                        name="firstname"
                    />
                </div>
                <div id="lastNameInput">
                    <label htmlFor="lastname">
                        Last Name
                    </label>
                    <input
                        id="lastname"
                        type="lastname"
                        name="lastname"
                    />
                </div>
            </div>
            {/* email address inputs */}
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            {/* text area */}
            <label htmlFor="message">
                Your Message
            </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} id="contactSubmit">
                Submit
            </button>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;
