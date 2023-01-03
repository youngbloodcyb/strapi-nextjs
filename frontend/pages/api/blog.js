
export default function handler(req, res) {
    
    if (req.method === 'POST') {
        // console.log(req.body);
        const { test, test2 } = req.body;
        console.log(test);
        console.log(test2);

        res.status(200).json({ status: 'success' });
    }
}