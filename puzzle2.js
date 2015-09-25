class Ball {
  float x, y;
  float vx, vy;
  float radius;

  Ball() {
    x = random(width);
    y = random(height);
    radius = 10;
    vx = 3;
    vy = 2;
  }

  void draw() {
    fill(50,100,100);
    ellipse(x, y, radius*2, radius*2);
    noStroke();
  }

  void move() {
    x = x + vx;
    y = y + vy;
    if (x < radius || x > width-radius) {
      vx = -vx;
    }
    if (y < radius || y > height-radius) {
      vy = -vy;
    }
  }
}

class Paddle
{
   float x, y;
  float vx, vy;
  float longside, shortside;
  Paddle(float x, float y)
  {
    this.x = x;
    this.y = y;
    vx = random(5);
    vy = random(5);
    longside= 80;
    shortside= 20;
  }
  void draw()
  {
    fill(1,100,100);
    rect(x,y,shortside,longside);
    noStroke();
  }
  void move()
  {
   y = y + vy;
   if (y < shortside || y > height-longside) 
   {
      vy = -vy;
    }  
  }
  }
  

Ball b;
Paddle r;
Paddle l;

void setup() {
  size(500, 500);

  b = new Ball();
  r= new Paddle(20,20);
  l= new Paddle(460,20);
}

void draw() {
  background(1,0,100);
  colorMode(HSB,100);

  b.draw();
  b.move();
  r.draw();
  r.move();
  l.draw();
  l.move();
}
