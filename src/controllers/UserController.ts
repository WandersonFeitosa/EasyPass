import { Request, Response } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
interface User {
  name: string;
  email: string;
  password: string;
}

// Define o esquema para os usuários
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export const User = mongoose.model("User", userSchema);

export class UserController {
  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    //Busca o usuário no banco de dados
    const checkUser = await User.findOne({ email: email });
    if (!checkUser) {
      return res.status(400).json({ error: "Email já utilizado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "Usuário criado com sucesso", newUser });
  }

  async logUser(req: Request, res: Response) {
    const { email, password } = req.body;

    //Busca o usuário no banco de dados
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    //Verifica se a senha está correta
    if (user?.password) {
      const passwordMatch = await bcrypt.compare(password, user?.password);
      if (!passwordMatch) {
        return res.status(400).json({ error: "Senha Incorreta" });
      }
    }

    //Gera o token
    const jwtSecret = process.env.JWT_SECRET || "";
    const token = jwt.sign({ id: user._id }, jwtSecret, {
      expiresIn: "1d",
    });

    return res.status(200).json({ message: "Usuário logado", token });
  }
}
