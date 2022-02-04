// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{  
    name:'CustomerCum',
    folderPath:`D:\\publishProjects\\CustomerCum`,
    syncByDevice:[]

   },{  
    name:'Paycheck',
    folderPath:`D:\\publishProjects\\Paycheck`,
    syncByDevice:[]

   }])
}
