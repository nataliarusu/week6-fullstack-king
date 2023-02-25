import LogInForm from '@/components/Auth/LogInForm';

export default function SignIn() {
  return <LogInForm title={'Sign up'} action="/signup" className={'sign-up'} />;
}
