exports.doService = async req => {
  const jsonReq = req.data;

  if (!validateRequest(jsonReq)) {
      LOG.error(`Bad login request ${jsonReq ? JSON.stringify(jsonReq) : "null"}.`);
      return { data: CONSTANTS.FALSE_RESULT };
  }

  const { email, password } = jsonReq;
  const user = await User.findOne({ where: { email } });

  if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key', { expiresIn: '1h' });
      return {
          data: {
              user: { id: user.id, username: user.username, email: user.email, role: user.role },
              token: token
          }
      };
  } else {
      return { data: CONSTANTS.FALSE_RESULT };
  }
};

const validateRequest = jsonReq => jsonReq && jsonReq.email && jsonReq.password; 
/* 
exports.doService = async (jsonReq) => {
      return { result: true, req: jsonReq }
  }
    */