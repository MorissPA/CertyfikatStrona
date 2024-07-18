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
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-2 text-blue-900">Kontakt</h2>
            <p className="text-blue-900 mb-4 font-semibold">Napisz swoją opinię lub uwagi do usług</p>
            <form
              id="contact-form"
              onSubmit={this.submitEmail.bind(this)}
              method="POST"
            >
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-blue-900 font-semibold" htmlFor="firstName">Imię</label>
                <input
                  placeholder="Imię"
                  id="name"
                  type="text"
                  className="border rounded-lg py-2 px-3 text-blue-900 "
                  required
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-blue-900 font-semibold" htmlFor="Email">Email</label>
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  className="border rounded-lg py-2 px-3 text-blue-900"
                  aria-describedby="emailHelp"
                  required
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-blue-900 font-semibold" htmlFor="message">Temat</label>
                <input
                  className="border rounded-lg py-2 px-3 text-blue-900"
                  placeholder="Temat"
                  id="subject"
                  type="text"
                  required
                  value={this.state.subject}
                  onChange={this.onSubjectChange.bind(this)}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-blue-900 font-semibold" htmlFor="message">Wiadomość</label>
                <textarea
                  className="border rounded-lg py-2 px-3 text-blue-900"
                  placeholder="Wiadomość"
                  id="message"
                  rows="3"
                  required
                  value={this.state.message}
                  onChange={this.onMsgChange.bind(this)}
                />
              </div>
              <button className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700" type="submit">Wyślij</button>
            </form>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 px-6">
            <img className="rounded-lg shadow-md" src="./image/obraz1.png" alt="Placeholder" />
          </div>
        </div>
      </div>
    );  
  }
}

export default Kontakt;
