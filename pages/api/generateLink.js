import main from "../../database/connection";
import OpenInApplinks from "../../database/schema";
import crypto from "crypto";

export default async (req, res) => {
  main().catch((err) => console.error(err));
  try {
    const link = req.body.link;
    console.log(req.body);
    if (!link) {
      return res.status(400).send({ message: "link required" });
    }
    if (!req.body._id) {
      console.log("hit");
      const randomUser = crypto.randomBytes(8).toString("hex");
      var newLink = new OpenInApplinks({
        userId: randomUser,
        link: link,
      });
    } else {
      var newLink = new OpenInApplinks({
        userId: req.body._id,
        link: link,
      });
    }
    await newLink.save();
  } catch (err) {
    console.log(err);
  }
  if (!newLink) {
    return res.status(400).send("Error");
  }
  console.log(newLink);
  res.send(newLink);
};
