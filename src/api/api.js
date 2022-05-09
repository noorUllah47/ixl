import axios from "axios";
const api = axios.create({
  baseURL:"http://34.233.200.196/api/v1/multiply/"
})

export function GetBoardQuestion(){
  return api.get("asked-question/1", )
}

export function GetBoardDetails(){
  return api.get("get-board-details/1", )
}
export function answerSubmit(data){
  return api.post("answer-question", {...data})
}