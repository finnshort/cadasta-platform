import React from 'react';
import Link from '../../core/components/Link';
import { t } from '../../i18n';

const propTypes = {
  accountRegister: React.PropTypes.func.isRequired,
};

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.accountRegister({
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_repeat: this.refs.password_repeat.value,
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
    });
  }

  render() {
    return (
      <form className="account-register form-narrow" onSubmit={this.handleFormSubmit}>

        <h1>{ t('Sign up for a free account') }</h1>

        <div className="form-group">
          <label htmlFor="username">{ t('Choose username') }</label>
          <input name="username" ref="username" className="form-control input-lg" />
        </div>

        <div className="form-group">
          <label htmlFor="email">{ t('Email') }</label>
          <input name="email" ref="email" type="email" className="form-control input-lg" />
        </div>

        <div className="form-group">
          <label htmlFor="password">{ t('Password') }</label>
          <input name="password" ref="password" type="password" className="form-control input-lg" />
        </div>

        <div className="form-group">
          <label htmlFor="password_repeat">{ t('Confirm password') }</label>
          <input name="password_repeat" ref="password_repeat" type="password" className="form-control input-lg" />
        </div>

        <div className="form-group">
          <label htmlFor="first_name">{ t('First name') }</label>
          <input name="first_name" ref="first_name" className="form-control input-lg" />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">{ t('Last name') }</label>
          <input name="last_name" ref="last_name" className="form-control input-lg" />
        </div>

        <button type="submit" className="btn btn-default btn-lg btn-block text-uppercase">{ t('Register') }</button>

        <p className="text-center">Already have an account? <Link to={ "/account/login/" }>Sign in</Link></p>

      </form>
    );
  }
}

RegistrationForm.propTypes = propTypes;

export default RegistrationForm;
