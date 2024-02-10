/*import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';
*/
import { Form, Formio, Templates, FormBuilder   } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";

//import "formiojs/dist/formio.full.css";
import { options } from "sanitize-html";
//import "@tsed/tailwind-formio/styles/index.css";
//import  "~/styles/bootstrap53.min.css";
/*
import  "~/styles/bootstrap53.min.css";
import '~/styles/formio.full.min.css';
import '@tsed/tailwind-formio/styles/index.css';
*/
export default function Rfrm() {
const onChange=(submission) => {
    console.log('onChange',  submission );
}  ;
const onAsyncSubmit=(submission) => new Promise((resolve, reject) => {
  console.log('onAsyncSubmit',  submission, resolve, reject );
} ) ;
Formio.use(tailwind);
Templates.framework = "tailwind";
return (
  <div className="container" >
<Form src='https://formio.cons.ud63.online/find/tur' 
options={{template:"tailwind"}}
 onChange ={onChange}
 onAsyncSubmit={onAsyncSubmit}
  onAttach={function Ru(){console.log('onAttach')}}
  onBlur={function Ru(){console.log('onBlur')}}
  onBuild={function Ru(){console.log('onBuild')}}
  onCancel={function Ru(){console.log('onCancel')}}
  onComponentChange={function Ru(){console.log('onComponentChange')}}
  onCustomEvent={function Ru(){console.log('onCustomEvent')}}
  onError={function Ru(){console.log('onError')}}
  onFocus={function Ru(){console.log('onFocus')}}
  onFormLoad={function Ru(){console.log('onFormLoad')}}
  onFormReady={function Ru(){console.log('onFormReady')}}
  onInitialized={function Ru(){console.log('onInitialized')}}
  onNextPage={function Ru(){console.log('onNextPage')}}
  onPrevPage={function Ru(){console.log('onPrevPage')}}
  onRender={function Ru(){console.log('onRender')}}
  onSubmit={function Ru(){console.log('onSubmit')}}
  onSubmitDone={function Ru(){console.log('onSubmitDone')}}
/>

</div>)
}

