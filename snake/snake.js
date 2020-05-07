 /** 常量 **/
 const CANVAS_BORDER_COLOUR = 'black';
 const CANVAS_BACKGROUND_COLOUR = "white";
 const SNAKE_COLOUR = 'lightgreen';
 const SNAKE_BORDER_COLOUR = 'darkgreen';

 let snake = [
   {x: 150, y: 150},
   {x: 140, y: 150},
   {x: 130, y: 150},
   {x: 120, y: 150},
   {x: 110, y: 150}
 ]

 // 获取 canvas 元素
 var gameCanvas = document.getElementById("gameCanvas");
 // 返回一个二维绘制上下文
 var ctx = gameCanvas.getContext("2d");
 //  选择画布的背景颜色
 ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
 //  选择画布的边框颜色
 ctx.strokestyle = CANVAS_BORDER_COLOUR;
 // 绘制一个“实心的”长方形来覆盖整个画布
 ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
 // 绘制画布的“边框”
 ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
 drawSnake();

 /**
  * 在画布上画蛇
  */
 function drawSnake() {
   // 循环遍历蛇的每一部分，并将其绘制到画布上
   snake.forEach(drawSnakePart)
 }
 /**
  * 在画布上画蛇的一个部分
  * @param { object } snakePart —— 需要绘制的部位的所在坐标
  */
 function drawSnakePart(snakePart) {
   // 设置蛇身体的背景颜色
   ctx.fillStyle = SNAKE_COLOUR;
   // 设置蛇身的边框色
   ctx.strokestyle = SNAKE_BORDER_COLOUR;
   // 在蛇身坐标所在的位置，绘制“实心”的矩形以表示蛇    
   ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
   // 绘制蛇身上的边框
   ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
 }
