import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      emailInput: '',
      telInput: '',
      textareaInput: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  sendEmail = (templateId, variables) => {
    window.emailjs.send('service_lcfexok', templateId, variables)
      .then(() => {
        console.log('Email successfully sent!');
      }).catch((err) => console
        .error('Oh well, you failed.',
          'Here some thoughts on the error that occured:', err));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nameInput, emailInput, telInput, textareaInput } = this.state;
    this.sendEmail('template_wenchhk', {
      name: nameInput,
      email: emailInput,
      phone: telInput,
      message: textareaInput,
    });
    this.setState({
      nameInput: '',
      emailInput: '',
      telInput: '',
      textareaInput: '',
    });
  }

  render() {
    const { nameInput, emailInput, telInput, textareaInput } = this.state;
    return (
      <div className="formContainer">
        <h2>Contato</h2>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <label htmlFor="nameInput" className="label">
            Nome:
            <br />
            <input
              type="text"
              name="nameInput"
              id="nameInput"
              value={ nameInput }
              onChange={ (e) => this.handleChange(e) }
              className="input"
            />
          </label>
          <label htmlFor="emailInput" className="label">
            Email:
            <br />
            <input
              type="email"
              name="emailInput"
              id="emailInput"
              value={ emailInput }
              onChange={ (e) => this.handleChange(e) }
              className="input"
            />
          </label>
          <label htmlFor="telInput" className="label">
            Telefone:
            <br />
            <input
              type="tel"
              name="telInput"
              id="telInput"
              value={ telInput }
              onChange={ (e) => this.handleChange(e) }
              className="input"
            />
          </label>
          <label htmlFor="textareaInput" className="label">
            Mensagem:
            <br />
            <textarea
              name="textareaInput"
              id="textareaInput"
              cols="30"
              rows="10"
              value={ textareaInput }
              onChange={ (e) => this.handleChange(e) }
              className="textarea"
            />
          </label>
          <button
            type="submit"
            disabled={ !textareaInput }
            className="button"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
