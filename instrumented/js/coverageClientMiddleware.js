"use strict";var cov_25zc6qro6s=function(){var path="/Users/duhrer/Source/rtf/gpii-testem/src/js/coverageClientMiddleware.js",hash="e3983b8cd64b93dc14cb4bf548f192ff97c6a0d8",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/duhrer/Source/rtf/gpii-testem/src/js/coverageClientMiddleware.js",statementMap:{"0":{start:{line:3,column:12},end:{line:3,column:31}},"1":{start:{line:4,column:12},end:{line:4,column:43}},"2":{start:{line:6,column:9},end:{line:6,column:22}},"3":{start:{line:8,column:0},end:{line:8,column:24}},"4":{start:{line:11,column:0},end:{line:11,column:65}},"5":{start:{line:12,column:0},end:{line:30,column:2}},"6":{start:{line:13,column:4},end:{line:29,column:7}},"7":{start:{line:14,column:8},end:{line:28,column:9}},"8":{start:{line:15,column:12},end:{line:15,column:24}},"9":{start:{line:18,column:12},end:{line:27,column:13}},"10":{start:{line:19,column:50},end:{line:19,column:114}},"11":{start:{line:20,column:45},end:{line:20,column:97}},"12":{start:{line:21,column:34},end:{line:21,column:92}},"13":{start:{line:22,column:38},end:{line:22,column:68}},"14":{start:{line:23,column:16},end:{line:23,column:93}},"15":{start:{line:26,column:16},end:{line:26,column:29}},"16":{start:{line:32,column:0},end:{line:46,column:3}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:12,column:55},end:{line:12,column:56}},loc:{start:{line:12,column:87},end:{line:30,column:1}},line:12},"1":{name:"(anonymous_1)",decl:{start:{line:13,column:73},end:{line:13,column:74}},loc:{start:{line:13,column:96},end:{line:29,column:5}},line:13}},branchMap:{"0":{loc:{start:{line:14,column:8},end:{line:28,column:9}},type:"if",locations:[{start:{line:14,column:8},end:{line:28,column:9}},{start:{line:14,column:8},end:{line:28,column:9}}],line:14}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},f:{"0":0,"1":0},b:{"0":[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var fluid=(cov_25zc6qro6s.s[0]++,require("infusion"));var gpii=(cov_25zc6qro6s.s[1]++,fluid.registerNamespace("gpii"));var fs=(cov_25zc6qro6s.s[2]++,require("fs"));cov_25zc6qro6s.s[3]++;require("gpii-express");cov_25zc6qro6s.s[4]++;fluid.registerNamespace("gpii.testem.middleware.coverageClient");cov_25zc6qro6s.s[5]++;gpii.testem.middleware.coverageClient.middlewareImpl=function(that,req,res,next){cov_25zc6qro6s.f[0]++;cov_25zc6qro6s.s[6]++;fs.readFile(fluid.module.resolvePath(that.options.baseClientSource),function(error,data){cov_25zc6qro6s.f[1]++;cov_25zc6qro6s.s[7]++;if(error){cov_25zc6qro6s.b[0][0]++;cov_25zc6qro6s.s[8]++;next(error);}else{cov_25zc6qro6s.b[0][1]++;cov_25zc6qro6s.s[9]++;try{var resolvedInvokerTemplatePath=(cov_25zc6qro6s.s[10]++,fluid.module.resolvePath(that.options.clientInvokerTemplatePath));var invokerTemplateContent=(cov_25zc6qro6s.s[11]++,fs.readFileSync(resolvedInvokerTemplatePath,"utf8"));var invokerCode=(cov_25zc6qro6s.s[12]++,fluid.stringTemplate(invokerTemplateContent,that.options));var combinedPayload=(cov_25zc6qro6s.s[13]++,[data,invokerCode].join("\n"));cov_25zc6qro6s.s[14]++;res.set("Content-Type","text/javascript").status(200).send(combinedPayload);}catch(error){cov_25zc6qro6s.s[15]++;next(error);}}});};cov_25zc6qro6s.s[16]++;fluid.defaults("gpii.testem.middleware.coverageClient",{gradeNames:["gpii.express.middleware"],path:"/client",baseClientSource:"%gpii-testem/src/js/client/coverageSender.js",clientInvokerTemplatePath:"%gpii-testem/src/templates/coverage-client-invoker.handlebars",coveragePort:7000,hookTestem:true,hookQUnit:false,invokers:{middleware:{funcName:"gpii.testem.middleware.coverageClient.middlewareImpl",args:["{that}","{arguments}.0","{arguments}.1","{arguments}.2"]}}});