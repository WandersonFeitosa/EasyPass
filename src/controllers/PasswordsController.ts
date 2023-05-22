import { Request, Response } from "express";
import crypto from "crypto";
import { User } from "./UserController";
import mongoose from "mongoose";

// Define o esquema para os usuários
const programPasswordSchema = new mongoose.Schema({
  program: String,
  password: String,
  programImageUrl: String,
});

export const ProgramPassword = mongoose.model(
  "ProgramPassword",
  programPasswordSchema
);

export class PasswordsControllers {
  async storePassword(req: Request, res: Response) {
    const { email, program, password, programImageUrl } = req.body;
    const encryptionKey = process.env.ENCRYPTION_KEY || "";
    
    try {
      const user = await User.findOne({ email: email });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    function encrypt(text: string, encryptionKey: string) {
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipheriv("aes-256-cbc", encryptionKey, iv);
      let encrypted = cipher.update(text, "utf8", "hex");
      encrypted += cipher.final("hex");
      return encrypted;
    }

    const encryptedPassword = encrypt(password, encryptionKey);

    const data = {
      program,
      password: encryptedPassword,
      programImageUrl,
    };

    const newProgramPassword = new ProgramPassword(data);

    try {
      await newProgramPassword.save();
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Erro ao salvar senha" });
    }

    res.status(201).json({ message: "Senha salva com sucesso" });
  }
}
