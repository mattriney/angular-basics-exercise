import { Component } from "@angular/core";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent {
title: string = "this is a title";
content: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Etiam non quam lacus suspendisse. Justo laoreet sit amet cursus sit amet dictum. Nunc vel risus commodo viverra maecenas accumsan lacus. Et pharetra pharetra massa massa ultricies mi. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Pellentesque habitant morbi tristique senectus et netus. Lacus vestibulum sed arcu non. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Dignissim enim sit amet venenatis urna cursus eget nunc. Quis eleifend quam adipiscing vitae proin. Id leo in vitae turpis massa. Enim ut sem viverra aliquet eget sit amet tellus. Nullam eget felis eget nunc lobortis mattis. Volutpat sed cras ornare arcu dui. Purus non enim praesent elementum facilisis leo vel fringilla.";
isTechRelated:boolean = true;

getColor(){
  return this.isTechRelated === true ? 'blue' : 'yellow';
}
}
