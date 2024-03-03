'use client';

import { useRouter } from "next/navigation";


import * as mutations from '@/graphql/mutations';
// 1. Add the queries as an import
import * as queries from '@/graphql/queries';

import { generateClient } from 'aws-amplify/api';
import { useEffect, useState } from 'react';
const client = generateClient();



export default  function Profiles(profile: any) {
  const router = useRouter()
  
  const [allProfiles,setAllProfiles]= useState<any>([])
  const [newProfiles, setNewProfiles]=useState<any>([])



async function updateProfile (formData:FormData){
    const profileDetails = {
        id: '1f3cbde9-e3bb-471e-8c75-1175a8c21dcd',
        description:formData.get('description')?.toString() ?? ''
      };

    const {data} = await client.graphql({
        query: mutations.updateProfile,
        variables: { input: profileDetails }
      });
}
 
  // console.log("data",data.data)
  const  data = client.graphql({
    query: queries.listProfiles
  });
  useEffect(()=>{
    
    data.then((d)=>{
      console.log(d.data.listProfiles.items)
setAllProfiles(d.data.listProfiles.items)

    })
  },[])

  useEffect(()=>{
   setNewProfiles(allProfiles)
  },[allProfiles])

  const handleRefresh = () => {
    router.push('/')
    router.refresh();
  };


  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '100px'
      }}
    >
      <form action={updateProfile}>
        <textarea name="description" placeholder={newProfiles[0] && newProfiles[0].description && newProfiles[0].description ? newProfiles[0].description : "add description"} />
        <br/>
        <button type="submit" onClick={handleRefresh} >Update</button>
      </form>
    </div>
    
  );
}
