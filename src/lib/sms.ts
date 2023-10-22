import twilio from 'twilio'

export async function twilio_sms(to:string, message:string){
    try{
        
        // Twilio send sms

        const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID as string;
        const authToken = process.env.NEXT_PUBLIC_TWILIO_TOKEN as string
        const from = process.env.NEXT_PUBLIC_TWILIO_NUMBER as string

        const client = twilio(accountSid, authToken);

        const response = await client.messages.create({
            body: message,
            to,
            from
        })

        const {sid, status} = response

        if (status === "failed") return false

        return true

    }catch(err){
        console.log(err)
        return false
    }
}

export function netgsm_sms(){
    return "netgsm_sms";
}

export function create_two_factor_code(){
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
}