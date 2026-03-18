#ifndef flugzeug_H_
#define flugzeug_H_
#include <stdio.h>
#include <stdlib.h>

#define STR_LEN 20



typedef struct flugzeug {
    char Hersteller [STR_LEN];
    char Modell [STR_LEN];
    float Tankinhalt;
    unsigned int seats;
    float Verbrauch; // Liter pro 100 km
    float Reichweite; // km
    float Geschwindigkeit; // km/h
    unsigned int Flugnummer;
}Flugzeug;

extern Node* begin;



#endif