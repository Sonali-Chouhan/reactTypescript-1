import React, { useState } from 'react'
interface Data{
  imgfile:string
}
const UserForm = () => {
  // const [imgfile, uploadimg] = useState<Data[]>([])
  // console.log("Image FIles",imgfile);
const imgFilehandler = (e:any) => {
  // if (e.target.files.length !== 0) {
  //   uploadimg(URL.createObjectURL(e.target.files[0]))
  // }
}
  const[input,setInput]=useState({
    Name:"",
    Post:'',
    Description:'',
    Active:''
});
  return (
    <div>
       <input type="file" onChange={imgFilehandler} />
    </div>
  )
}

export default UserForm
