/**
 * ArticleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Article = require("../models/Article");

//const Article = require("../models/Article");



module.exports = {
  list:function(req,res){       
      console.log('hi');
       Article.find({}).exec(function(err, article){                     
           res.view('list',{article:article});
       })
  },
  add:function(req, res){
    res.view('add');
  },
  create:function(req, res){
    var title = req.body.title;
    var body = req.body.body;
    console.log(title+', '+body)

    Article.create({title:title, content:body}).exec(function(err){
      if(err){
        res.send(500, {error:'Database error'});        
      }
      res.redirect('/article/list');
    });
  }
  

};

