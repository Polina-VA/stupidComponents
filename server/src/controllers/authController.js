const jwtConfig = require("../config/jwtConfig");
const UserService = require("../services/User.services");
const generateTokens = require("../utils/generateTokens");
const bcrypt = require("bcrypt");

async function registration(req, res)  {
    try {
      const { name, email, password } = req.body;
      // проверка на пустые поля
  
      if (
        name.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" 
      ) {
        return res.status(400).json({ message: "Заполните обязательные поля" });
      }
  
      const userInDB = await UserService.getUserByEmail(email);
  
      // проверяем наличе в бд по email
      if (userInDB) {
        return res
          .status(400)
          .json({ message: "Пользоваетль с таким email уже существует" });
      } else {
        const user = await UserService.createUser({
          name,
          email,
          password,

        });
        if (user) {
          delete user.password;
          res.locals.user = user;
  
          console.log(user, "user without password");
          const { accessToken, refreshToken } = generateTokens({ user });
  
          res
            .status(201)
            .cookie(jwtConfig.refresh.type, refreshToken, {
              httpOnly: true,
              maxAge: jwtConfig.refresh.expiresIn,
            })
            .json({ message: "success", accessToken, user });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
}

async function authorization (req, res) {
    try {
      const { email, password } = req.body;
  
      // проверка на пустые поля
      if (email.trim() === "" || password.trim() === "") {
        return res.status(400).json({ message: "Заполните все поля" });
      }
  
      const user = await UserService.getUserByEmail(email);
  
      if (user) {
        //                                   пароль    хэш пароль из бд
        const compare = await bcrypt.compare(password, user.password);
        if (compare) {
          delete user.password;
          res.locals.user = user;
          //console.log(user, 'user without password');
  
          const { accessToken, refreshToken } = generateTokens({ user });
  
          return res
            .status(200)
            .cookie(jwtConfig.refresh.type, refreshToken, {
              httpOnly: true,
              maxAge: jwtConfig.refresh.expiresIn,
            })
            .json({ message: "success", user, accessToken });
        }
      }
      res.status(400).json({ message: "email или пароль неверные" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function logout (req, res) {
    // HTTP заголовок Set-Cookie max-age=0
      try {
        res.locals.user = undefined;
        res.status(200).clearCookie('refreshToken').json({ message: "success", accessToken: "" });
      } catch (error) {
        console.error(error);
        res.sendStatus(400);
      }
  }


module.exports = {
    registration,
    authorization,
    logout,
  };