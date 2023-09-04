import React, { useState } from 'react'
import { Button, Typography, Box, Input } from '@mui/material'
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addcategory } from '../../Redux/Action/authAction'
// import { useNavigate } from 'react-router-dom'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { Storage } from '../../firebase'

export default function AdCategory() {
    let [cate, setcate] = useState()
    let [adde, setadde] = useState()
    const dispatch = useDispatch()
    // const navigate = useNavigate()
     
    let [loading, setloading] = useState(false)
    const [prog, setprog] = useState()
  
    let data = useSelector(state => state.Auth)
    console.log(data)

    let handleAddCategory = () => {

        let option = {
            catagery_name: cate,
            categeryImage: adde
        }
        dispatch(addcategory(option))
    }
    const handleUpload = (files) => {
        setloading(true)
        const file = files
        // const location = ref(Storage,"Category"+'/'+data.user.username+'/'+file.name)
        const location = ref(Storage, `Category/${data.user?.username}/${file.name}`)
        const uplaod = uploadBytesResumable(location, file)
        uplaod.on(
            "state-changed",
            (snapshot) => {
                const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100
                setprog(Math.floor(progress))

            },
            (error) => {
                console.log(error)
            },

            async () => {
                const DownloadUrl = await getDownloadURL(location)
                setadde(DownloadUrl)
                setloading(false)
            }
        )
    }
    console.log(loading)
    return (
        <div className='AdCategory'>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', gap: '15px', }}>
                <Typography variant='h5' sx={{ marginTop: '30px' }}>Add Category:</Typography>
                <TextField type='text' placeholder='Name' onChange={(e) => setcate(e.target.value)}></TextField>
                <Input id='upload' type='file' onChange={(e) => handleUpload(e.target.files[0])} />
                <Button disabled={loading ? true : false} variant='contained' onClick={handleAddCategory}>{loading ? `Progress ${prog}%` : "Add Category"}</Button>
            </Box>
        </div>
    )
}
