import { loginUser } from '../lib/auth';
import Router from 'next/router';

export default class LoginForm extends React.Component {
  state = {
    email: 'Sincere@april.biz',
    password: 'hildegard.org',
    error: '',
    isLoading: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.setState({error: '', isLoading: true});
    const { email, password } = this.state;
    loginUser(email, password).then(() => {
      Router.push('/profile');
    })
    .catch(this.showError);
  }

  showError = err => {
    console.error(err);
    const error = err.response && err.response.data || err.message;
    this.setState({ error, isLoading: false});
  }

  render () {
    const { email, password, error, isLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange} />
        </div>
        <div>
          <input type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange} />
        </div>
        <button type="submit" disabled={this.state.isLoading}>
          { isLoading ? "Sending" : "Submit" }
        </button>
        { error && <div>{error}</div> }
      </form>
    )
  }
}