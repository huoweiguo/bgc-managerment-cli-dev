#! /usr/bin/env node

module.exports = {
  utils,
  getMsg,
  Animal
}
function utils() {
  console.log('utils run ...')
}
function Animal(name, age) {
  this.name = name
  this.age = age
}
function getMsg() {
  console.log('this msg is utils!!!!!!')
}
