import { sendEmail } from "utils/email"

export default async function handler(req, res) {

    if(req.method === 'POST'){
        const { to, subject, message } = req.body;
        
        if( !subject || !message ) {
            return res.status(422).json({msg: 'Unprocessable Entity'})
        }
        
        const response = await sendEmail({to, subject, message})

        if(response.success) return res.status(200).json({ msg: 'Email Sent' })
        else return res.status(500).json({ msg: response.msg })      
    }

}
