import Quill from 'quill';
import 'quill/dist/quill.snow.css';
// import styled from '@emotion/styled';
import { Box, styled } from '@mui/material';
// import styled from '@emotion/styled';
import { useEffect } from 'react';

const Wrap = styled(Box)`
    background: #F8F8F8;
`


// const toolbarOptions = [
//     ['undo' , 'redo' ],
//     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//     ['bold', 'italic', 'underline', { 'color': [] }, { 'background': [] }],        // toggled buttons
//     ['blockquote', 'code-block'],

  
//     [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//     [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
//     [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
//     [{ 'direction': 'rtl' }],                         // text direction
  
//     [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//     [{ 'font': [] }],
//     [{ 'align': [] }],
  
//     ['clean']                                         // remove formatting button
//   ];

const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', { 'color': [] }, { 'background': [] }], // Text formatting
    ['link', 'image', 'video'],
    [{ 'align': [] }], 
    [{ 'spacing': [0.5, 1, 1.5, 2, 2.5, false] }],
    [{ 'list': 'check' }],
    [{ 'list': 'bullet' }, { 'list': 'ordered' }], 
    [{ 'indent': '-1' }, { 'indent': '+1' }], 
    // [{ 'direction': 'rtl' }],  
    ['clean'], 
  ];
  


const Editor = () => {

    useEffect(() => {
        // Quill object is intitalized into quillserver variable
        const quillserver = new Quill('#container',{
            theme: 'snow',
            modules: {
                toolbar: toolbarOptions,
                history: {
                    delay: 2000,
                    maxStack: 500,
                    userOnly: true
                  }
            }
        });
    },[]) // passing empty array as argument for useEffect to work like didmount
    // useeffect wiil work only once when component will be initialized

    return (
        <Wrap>
            <Box className='container' id='container'></Box>
        </Wrap>
        
    )
}

export default Editor;