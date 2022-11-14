import main from "../../../database/connection";
import OpenInApplinks from "../../../database/schema";

export default async function handler(req, res) {
  main().catch((err) => console.error(err));
  try {
    var link = await OpenInApplinks.findOne({ _id: req.query.id });
    console.log(req.query.id);
    console.log(link);
    return res.send(link);
  } catch (err) {
    console.log(err);
  }
}
