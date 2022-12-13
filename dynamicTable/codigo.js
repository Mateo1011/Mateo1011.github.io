$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Producto",
              key: "name"
          },
          {
              text: "Cantidad",
              key: "age"
          },
          {
              text: "Estado",
              key: "gender"
          },
          {
              text: "Categoria",
              key: "pais"
          },        
        ],
 
        //carga de datos
        data: [{
              name: 'Carne de Cerdo',
              age: 25,
              gender: 'M',
              pais: 'Carnes'    
          },
          {
              name: 'Platano',
              age: 40,
              gender: 'F',
              pais: 'Vegetales'
          },
          {
              name: 'Queso Mozzarella',
              age: 20,
              gender: 'M',
              pais: 'Quesos'
          }
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "age") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "gender") {
              return '<select class="form-control"><option value="M">Activo</option><option value="F">Inactivo</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});    