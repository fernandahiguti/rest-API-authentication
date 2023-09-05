import express from "express";
import { createUser, getUserByEmail } from "../db/users";
import { random, authentication } from "../helpers";

export const login = async (req: express.Request, res: express.Response) => {
  try{
    const {email, password} = req.body;
    if (!email || !password) {
      console.log("bad pass1")
      return res.sendStatus(400)
      
    }

    const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
    if (!user){
      console.log("bad pass2")
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.authentication.salt, password);
    if (user.authentication.password != expectedHash) {
      console.log("bad pass3")
      return res.sendStatus(403);
    }

    const salt = random();
    user.authentication.sessionToken = authentication(salt, user._id.toString());

    await user.save();

    res.cookie('FERNANDA-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });

    return res.status(200).json(user).end();

  } catch (error) {
    console.log(error)
    return res.sendStatus(400);
  }
}

export const register = async (req: express.Request, res: express.Response) => {
  try{
    const { email, password, username} = req.body;    
    if(!email || !password || !username) {
      console.log("bad pass4")
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);
    if(existingUser){
      console.log("bad pass5")
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    return res.status(200).json(user).end();
  } catch (error){
    console.log(error);
    return res.sendStatus(400)
  }
}