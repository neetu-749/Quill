import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { Box } from '@mui/material';

import { useEffect } from 'react';


const Editor = () => {

    useEffect(() => {
        // Quill object is intitalized into quillserver variable
        const quillserver = new Quill('#container',{
            theme: 'snow'
        });
    },[]) // passing empty array as argument for useEffect to work like didmount
    // useeffect wiil work only once when component will be initialized

    return (
        <Box id='container'></Box>
        
        
    )
}

export default Editor;