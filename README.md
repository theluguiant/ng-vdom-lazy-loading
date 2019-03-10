# Descrición 

Ejemplo de uso ng-vdom y lazy-loading, para la fecha actual 10/03/2019 no se recomienda usar ng-vdom por lo crudo que esta este proyecto, si es necesario que use el dom virtual considere usar react, para configurar siga los pasos de ng-vdom o use de ejemplo el tsconfig.json de este ejemplo, este proyecto se crea con la intención de buscar técnicas, librerías o estrtegias para mejorar el performances de los proyectos angular a desarrollar

# Link ng-vdom

https://github.com/trotyl/ng-vdom

# Nota 10/03/2019:

Los archivos .component son de extencion .tsx, s necesita usar un constructor usando ng-vdom hagalo de la siguiente manera 

```
 constructor(
    private readonly _gitusers: GitUsers,
    protected __injector: Injector
  ) { 
      super(__injector);
  }
```
