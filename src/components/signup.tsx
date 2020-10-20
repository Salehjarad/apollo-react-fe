import React, { useState, useEffect } from 'react';
import { useRegisterMutation, useAddPostMutation } from '../generated/graphql';


const SignUp: React.FC<{}> = (props) => {
    const [register] = useRegisterMutation();
    const [newPost] = useAddPostMutation();
    const [file, setFile] = useState(null);

    const handelFile = (e: any) => {
        setFile(e.target.files[0])
    }
    const addUser = async () => {
        // const data = await register({variables: {
        //     email: 'gomf@gmail.com',
        //     username: 'salehjarad' }})
        
        const data = await newPost({variables: {
            content: 'hello world',
            title: 'this is a post with image',
            by: 3,
            image: file
        }})

        console.log(data)
    }

    return(
        <div>
            <h3>Hello signup</h3>
            <input type='file' placeholder='file' onChange={handelFile}/>
            <button onClick={addUser}>ClickClick</button>
        </div>
    );
}


export default SignUp;