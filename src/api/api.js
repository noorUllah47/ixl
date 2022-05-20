import axios from "axios";
const api = axios.create({
  baseURL:"https://ixl-backend.herokuapp.com/grade9/"
})
// http://34.233.200.196/
// export function GetBoardQuestion(id){
//   console.log("asdasdsdsad",id)
//   return api.get(`asked-question/${id}`, )
// }
export function GetBoardQuestion(id){
  console.log("asdasdsdsad",id)
  return api.get(`asked-question/${13}`, )
}
export function GetBoardDetails(id){
  return api.get(`get-board-details/${13}`, )
}
export function answerSubmit(data){
  console.log("ansssssssssssssssssss-",data)
  return api.post("answer-question", {...data})
}
export function StartNewboard(){
  return api.get("start-new", )
}
export function DeleteBoard(id){
  return api.delete(`delete-board/${id}`, )
}