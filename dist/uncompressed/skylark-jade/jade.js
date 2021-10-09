define([
	"skylark-langx/skylark",
	"./primitives/jade"
],function(skylark, _jade) {
	return skylark.jade = {
		Compiler : _jade.Compiler,
		Lexer : _jade.Lexer,
		Parser : _jade.Parser,
		compile : _jade.compile,
		render : render
	};
});