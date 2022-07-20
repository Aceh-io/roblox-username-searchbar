import { getIdFromUsername, getPlayerInfo } from "noblox.js";

export default async function handler(req, res) {
  const { username } = req.query;
  const id = await getIdFromUsername(username).catch(() => {
    return res.status(200).send({ code: "404", message: "User not found!" });
  });
  const info = await getPlayerInfo(id).catch(() => {
    return res.status(200).send({
      code: "404",
      message: "Couldnt convert id to user information.",
    });
  });
  res.status(200).json({ user: { user: info, id } });
}
