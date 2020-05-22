import User from '../models/Users';

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    // verifica se usuário já existe
    if (userExist) {
      return res.status(400).json({ error: 'User aready exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  update(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
