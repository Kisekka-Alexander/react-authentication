import { sendEmail } from "../util/sendEmail";

export const testEmailRooute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'alexander.kisekka@credify.africa',
                from: 'kkalexander717@gmail.com',
                subject: 'Test Email Send',
                text: 'Hey',
            })
            res.sendStatus(200)
        }
        catch(e){
            console.log(e)
            res.sendStatus(500)
        }
    }
}