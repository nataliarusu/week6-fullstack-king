import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';
import classes from './LogInForm.module.css';

export default function LogInForm({ title, onSubmitForm, action, className }) {
  const submitFormHandler = (event) => {
    event.preventDefault();
    const [
      enteredEmailInput,
      enteredPasswordInput,
      enteredConfirmPasswordInput,
    ] = event.target;

    const isValidInputs = true; // should implement logic to check inputs

    if (isValidInputs) {
      onSubmitForm({
        email: enteredEmailInput.value,
        password: enteredPasswordInput.value,
        confirmPassword: enteredConfirmPasswordInput.value,
      });
    }
  };
  return (
    <Card className={classes.login}>
      <h1 className={classes.title}>{title}</h1>
      <form className={classes[className]} onSubmit={submitFormHandler}>
        <Input
          input={{
            id: 'email',
            type: 'email',
            name: 'email',
          }}
          className={classes['login-item']}
          label="Email"
        />
        <Input
          input={{
            id: 'password',
            type: 'text',
            name: 'password',
          }}
          className={classes['login-item']}
          label="Password"
        />

        {action === 'signup' && (
          <Input
            input={{
              id: 'confirm-password',
              type: 'text',
              name: 'confirmPassword',
            }}
            className={classes['login-item']}
            label="Confirm Password"
          />
        )}

        <Button className={classes['login-btn']}>Submit</Button>
      </form>
    </Card>
  );
}
