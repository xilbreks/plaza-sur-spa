# PlazaSurSpa

Este proyecto es Plaza Sur. Una aplicacion de lado cliente hecha con Angular.

# Pruebalo

## Demo
Aplicacion [Version web](https://xilbreks.github.io/plaza-sur-spa)

## En maquina local
Antes que nada, deberas tener [Angular/cli](https://cli.angular.io/) v1.1.1+
Descargar el proyecto
``` bash
$ git clone https://github.com/xilbreks/plaza-sur-spa.git
```
Entrar al directorio del proyecto
``` bash
$ cd plaza-sur-spa
```
Instalar depedencias
```
$ npm install
```
Y Finalmente, ejecutar el programa
```
$ ng serve
```
Ingresa desde tu navegador (username=`socks`, password=`socks`)
```
http://localhost:4200/
```



requerimientos para charts:

-buscar producto y mostrar historial (barchart)
-compraracio de ventas x precio y cantidad (radar chart) 
-ganancias costos y ganancia (linechart)
-cantidad de productos (paichart)

cardex de cada producto:

nombre, stock_min, stock_max, fecha, existencias.

| Fechas | detalle | Entradas | Salidas | Existencias |
|  |  |  |  |  |
| Fechas | detalle | cantidad_entrante, precio, total | cantidad_entrante, precio, total | cantidad_entrante, precio, total |

total:
detalle,
cantidad_entrante, precio, total

Orden de descarga:

inline:
loader

polyfills:
apis del navegador

extras: 
scripts

vendor:
angular

main: 
login

Modulos del chunk:
7: Users
6: CRM
5: ERP
4: PointOfSale
3: SRM
2: Logistics
1: Inventory
0: BI



