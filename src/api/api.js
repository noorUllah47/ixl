import axios from "axios";
const api = axios.create({
  baseURL:"https://www.itsnotsolvingbackend.u2vntr.tech/v1/multiply/"
})

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
  return api.post("start-new", )
}