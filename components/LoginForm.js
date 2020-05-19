import { loginUser } from '../lib/auth';

export default class LoginForm extends React.Component {
  state = {
    email: 'Sincere@april.biz',
    password: 'hildegard.org'
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    const { email, password } = this.state;
    loginUser(email, password);
  }

  render () {
    const { email, password } = this.state;

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
        <button type="submit">Submit</button>
      </form>
    )
  }
}