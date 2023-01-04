import { postBlog } from "../../lib/postBlog";
import { test } from "../../lib/test";

export default async function handler(req, res) {
    
    if (req.method === 'POST') {
        const payload = req.body;
        const response = await postBlog(payload);
        // test(payload);

        res.status(200).json({
            status: 'success',
            res: response
        });
    }
}