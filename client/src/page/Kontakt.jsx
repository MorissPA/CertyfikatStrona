// src/components/Kontakt.jsx
import React, { Component } from 'react';
import axios from 'axios';


class Kontakt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3000/send',
      data: {
        name: this.state.name,
        email: this.state.email, // Przekaz email klienta
        subject: this.state.subject,
        message: this.state.message,
        recipientEmail: 'maurycy.piasek@wp.pl', // Przekaz email odbiorcy
      },
    }).then(response => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.status === 'error') {
        alert('Message failed to send.');
      }
    });
    
  }

  resetForm() {
    this.setState({ name: '', email: '', subject: '', message: '' });
  }

  render() {
    return (
<div className="section">
  <div className="container">
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-4">Skontaktuj się z nami</h2>
        <p className="text-gray-600 mb-8">
          Daj nam znać, co myślisz! Aby zapewnić lepszą obsługę, proszę nie wahaj się podzielić swoją opinią. Dziękujemy.
        </p>
        <form
          id="contact-form"
          onSubmit={this.submitEmail.bind(this)}
          method="POST"
        >
          <div className="mb-4">
            <input
              placeholder="Imię"
              id="name"
              type="text"
              className="w-full p-2 border rounded-md"
              required
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email"
              id="email"
              type="email"
              className="w-full p-2 border rounded-md"
              aria-describedby="emailHelp"
              required
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Temat"
              id="subject"
              type="text"
              className="w-full p-2 border rounded-md"
              required
              value={this.state.subject}
              onChange={this.onSubjectChange.bind(this)}
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Wiadomość"
              id="message"
              className="w-full p-2 border rounded-md"
              rows="3"
              required
              value={this.state.message}
              onChange={this.onMsgChange.bind(this)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Wyślij
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default Kontakt;
