export default function handle(req, res) {
  if (req.method == 'POST') {
    console.log(req.body, 'from API');
    const { email, password, confirmPassowrd } = req.body;
    //should validate again here, trim and sanitize

    //if ok, should redirect
    res.status(200).json({ message: 'ok' });
    //res.redirect('/');
  }
}
