import axios from "axios";
const api = axios.create({
  baseURL:"https://ixl-backend.herokuapp.com/"
})
// http://34.233.200.196/
export function GetBoardQuestion(id){
  console.log("asdasdsdsad",id)
  return api.get(`asked-question/${id}`, )
}

export function GetBoardDetails(id){
  return api.get(`get-board-details/${id}`, )
}
export function answerSubmit(data){
  return api.post("answer-question", {...data})
}
export function StartNewboard(){
  return api.get("start-new", )
}
export function DeleteBoard(id){
  return api.delete(`delete-board/${id}`, )
}