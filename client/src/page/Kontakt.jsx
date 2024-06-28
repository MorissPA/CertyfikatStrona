
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
        email: this.state.email, 
        subject: this.state.subject,
        message: this.state.message,
        recipientEmail: 'maurycy.piasek@wp.pl', 
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
      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-[url('./image/komp5.webp')]">
      <div className="bg-black bg-opacity-60 min-h-screen flex justify-center items-center">
        <div className="max-w-md mx-auto min-h-screen">
          <div className="bg-indigo-900 rounded-lg p-8 m-4">
        <h2 className="text-xl font-semibold mb-4 text-white">Skontaktuj się z nami</h2>
        <p className="text-white mb-8">
          Daj nam znać, co myślisz! Aby zapewnić lepszą obsługę, proszę nie wahaj się podzielić swoją opinią. Dziękujemy.
        </p>
        <form
          id="contact-form"
          onSubmit={this.submitEmail.bind(this)}
          method="POST"
        >
          <div className="mb-4 bg-gray-300">
            <input
              placeholder="Imię"
              id="name"
              type="text"
              className="w-full p-2 border rounded-md bg-gray-300 text-black"
              required
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="mb-4 bg-gray-300">
            <input
              placeholder="Email"
              id="email"
              type="email"
              className="w-full p-2 border rounded-md bg-gray-300 text-black"
              aria-describedby="emailHelp"
              required
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="mb-4 bg-gray-300">
            <input
              placeholder="Temat"
              id="subject"
              type="text"
              className="w-full p-2 border rounded-md bg-gray-300 text-black"
              required
              value={this.state.subject}
              onChange={this.onSubjectChange.bind(this)}
            />
          </div>
          <div className="mb-4 bg-gray-300">
            <textarea
              placeholder="Wiadomość"
              id="message"
              className="w-full p-2 border rounded-md bg-gray-300 "
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
