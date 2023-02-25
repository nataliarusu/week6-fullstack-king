import LogInForm from '@/components/Auth/LogInForm';

export default function SignIn() {
  async function signUpUserHanler(enteredData) {
    console.log(JSON.stringify(enteredData));
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const receivedBack = response;
    console.log(receivedBack); // same? as data ?

    const data = await response.json();
    console.log(response);
  }
  return (
    <LogInForm
      title="Sign up"
      className="sign-up"
      action="signup"
      onSubmitForm={signUpUserHanler}
    />
  );
}
