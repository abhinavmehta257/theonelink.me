import main from "../../../database/connection";
import OpenInApplinks from "../../../database/schema";

export default async function handler(req, res) {
  await main().catch((err) => console.error(err));
  try {
    var link = await OpenInApplinks.findOne({ _id: req.query.id }).catch(
      (err) => {
        console.log(err);
      }
    );
    console.log(req.query.id);
    console.log(link);
    return res.send(link);
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "no link found" });
  }
  return res.send({ data: false });
}
