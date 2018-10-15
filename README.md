# Modaltest

para inicializar lo componentes de bootrstap en Angular segir las las instrocciones de este link

https://ng-bootstrap.github.io/#/getting-started

# 1. inatalacion componentes Bootstrap 

Ejecutar el comando:

``` yarn add @ng-bootstrap/ng-bootstrap ```

Una vez instalado importarlo en el app.model.ts

```
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ...
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Agregamos nuestro componente al app.moldel.ts y en app.component.ts, para este ejemplo

``` import { ModaltestComponent } from './modaltest/modaltest.component'; ```


Tambien se puede traer solo lo que necesitamos. por ejemplo:
```
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgbPaginationModule, NgbAlertModule, ...],
  ...
})
export class YourAppModule {
}

```
Aqui ya deberia correr sin estilos bootstrap

# 2. Agregamos estilo bootstrap

En la pagina: https://getbootstrap.com/docs/4.1/getting-started/introduction/
se copia la linea  ``` <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> ```
y se pega en el head del index.html del proyecto, ahora de debe de ver mucho mejor!!!

# 3. conencando la vista con la logica!

En el ejemplo se haace con un: 
En la vista
``` <input type= "text" [(ngModel)]= "comment"/> ```
En el componente

``` 
// declaramos la variable setcoment y comment
comment:string;
setcoment:string;

open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.setcomment = this.comment;// este comment es el de la vista?
      
    });
    
    } 
```
# Referencia.

https://www.youtube.com/watch?v=xgc1vnEcPCw





