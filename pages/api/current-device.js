// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({  
        deviceId:`1`,
        computerName:'C1',
        networkIPs:[
            'sdf'
        ]
    } )
}
  