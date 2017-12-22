'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}

const Question = require ('./question.js')
module.exports = Icebreaker