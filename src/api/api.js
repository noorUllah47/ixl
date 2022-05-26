import axios from "axios";
const api = axios.create({
  baseURL:"https://ixl-backend.herokuapp.com/"
})
// http://34.233.200.196/
// export function GetBoardQuestion(id){
//   console.log("asdasdsdsad",id)
//   return api.get(`asked-question/${id}`, )
// }
export function GetMultiplyQuestions(id){
  console.log("asdasdsdsad",id)
  return api.get(`asked-question/${id}`, )
}
export function GetBoardQuestion(id){
  console.log("asdasdsdsad",id)
  return api.get(`grade9/asked-question/${id}`, )
}
export function GetBoardDetailsOfMlt(id){
  return api.get(`get-board-details/${id}`, )
}
export function GetBoardDetails(id){
  return api.get(`grade9/get-board-details/${id}`, )
}
export function answerSubmit(data){
  console.log("ansssssssssssssssssss-",data)
  return api.post("grade9/answer-question", {...data})
}
export function answerSubmitMultiply(data){
  console.log("ansssssssssssssssssss-",data)
  return api.post("answer-question", {...data})
}
export function StartNewboardMultiply(){
  return api.get("start-new", )
}
export function StartNewboard(){
  return api.get("grade9/start-new", )
}
export function DeleteBoard(id){
  return api.delete(`grade9/delete-board/${id}`, )
}
export function UserComplexity(data){
  console.log("ansssssssssssssssssss-",data)
  return api.post("grade9/set-complexity-level", {...data})
}
// const {data}= await postans.request({
//   "questionId": props.data?.data?.id,
//   "answer": props.val

// })
// const graphvalues=`x = ${graphInput.x}, y = ${graphInput.y}`
