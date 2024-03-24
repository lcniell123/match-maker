"use client";

// import { useRouter } from "next/navigation";

// // import * as mutations from '@/graphql/mutations';
// // 1. Add the queries as an import
// // import * as queries from '@/graphql/queries';

// import { generateClient } from 'aws-amplify/api';
// import { useEffect, useState } from 'react';
// const client = generateClient();

// async function createTodo(formData: FormData) {

//   const { data } = await client.graphql({
//     query: mutations.createTodo,
//     variables: {
//       input: {
//         name: formData.get('name')?.toString() ?? ''
//       }
//     }
//   });

// }

// export default  function Todos() {
//   const router = useRouter()

//   const [allTodos,setAllTodos]= useState<any>([])
//   const [newTodos, setNewTodos]=useState<any>([])

//   // 2. Fetch additional todos
//   // const { data, errors } = await client.graphql({
//   //   query: queries.listTodos
//   // });

//   // console.log("data",data.data)
//   const  data = client.graphql({
//     query: queries.listTodos
//   });
//   useEffect(()=>{

//     data.then((d)=>{
//       console.log(d.data.listTodos.items)
// setAllTodos(d.data.listTodos.items)

//     })
//   },[])

//   useEffect(()=>{
//    setNewTodos(allTodos)
//   },[allTodos])

//   const handleRefresh = () => {
//     router.push('/')
//     router.refresh();
//   };

//   return (
//     <div
//       style={{
//         maxWidth: '500px',
//         margin: '0 auto',
//         textAlign: 'center',
//         marginTop: '100px'
//       }}
//     >
//       <form action={createTodo}>
//         <input name="name" placeholder="Add a todo" />
//         <button type="submit" onClick={handleRefresh} >Add</button>
//       </form>

//       {/* 3. Handle edge cases & zero state & error states*/}
//       {(!newTodos || newTodos.length === 0 ) && (
//         <div>
//           <p>No todos, please add one.</p>
//         </div>
//       )}

//       {/* 4. Display todos*/}
//       <ul>
//         {newTodos.map((todo:any) => {
//           return <li style={{ listStyle: 'none' }}>{todo.name}</li>;
//         })}
//       </ul>
//     </div>

//   );
// }
