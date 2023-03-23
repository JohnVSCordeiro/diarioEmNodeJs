const int pot = 0;
const int led = 8; 
int valor = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  pinMode(A0, INPUT);

}



void loop() {
  // put your main code here, to run repeatedly:
 
  //Potenciometro
  valor = analogRead(A0);
  Serial.println(valor);


/*
  // Led
  if (Serial.available())

    switch (Serial.read()){
      case "a": // ligar led
      digitalWrite(led, HIGH);
      break;

      case "b": // desligar led
      digitalWrite(led, LOW);
      break;
    }
*/
    delay(500);

}

