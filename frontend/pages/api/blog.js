import { postBlog } from "../../lib/postBlog";

export default async function handler(req, res) {
    
    if (req.method === 'POST') {
        const payload = req.body;
        const response = await postBlog(payload);

        res.status(200).json({
            status: 'success',
            res: response
        });
    }
}