
export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' });
    if (req.method === 'POST') {
        console.log(req.body);
    }
}