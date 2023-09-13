// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import * as fs from 'fs';

export default async function handler(req, res) {
  let data=await fs.promises.readdir("Blogdata")
  let myblog;
  let Allblogs=[];
  for (let index = 0; index < data.length; index++) {
  const item = data[index];
  myblog= await fs.promises.readFile(('blogdata/' + item),'utf-8')
  Allblogs.push(JSON.parse(myblog))
  }
  res.status(200).json(Allblogs)   
}
 export default function anotherhandler(req, res) {
   fs.readFile("blogs/javascript.json","utf-8",(err,data)=>{
     console.log('')
     res.status(200).json(JSON.parse(data))   
   })
 }
