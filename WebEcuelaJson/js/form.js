const $$form = function () {
  this.addUser = function () {
      const Submit = function () {

          try {
              let Fd = new FormData();
              Fd.append("accion", "ADDUSUARIO");
              Fd.append("Nombre", nombre.value);
              Fd.append("Mail", mail.value);
              Fd.append("Dni", dni.value);

              const res = Post(Fd);
              if (res !== "OK") alert(res);
              $f.addUser();
          }
        
          catch (e) { alert(e); }
          return false;

          f.onsubmit = Submit;
      
        
      
      };
      const ListUsuarios = function () {
          let fd = new FormData();
          fd.append("accion", "LISTUSUARIOS");
          const res = Post(fd);
          let list
          try {
              list = JSON.parse(res);

          }
          catch (e) { alert(e); }

          listTitles = ["ID", "Nombre", "DNI", "Mail"];
          $dt.table(listTitles, list);
          return;
      };

    $ds.clearSection("main");
    const f = $dc.form("Agregar Usuario", "Agregar");
    const nombre = $dc.addInputForm("text", "Nombre", "name-user");
    const dni = $dc.addInputForm("number", "DNI", "dni-user");
    const mail = $dc.addInputForm("email", "Mail", "mail-user");
   
      f.onsubmit = Submit;
    ListUsuarios();
    
  };

    this.modifyUser = function (user) {
        const Submit = function () {
            try {
                let fd = new FormData();
                fd.append("accion", "MODIFYUSER");
                fd.append("ID", user.ID);
                fd.append("Nombre", nombre.value);
                fd.append("Mail", mail.value);
                fd.append("Dni", dni.value);
                let res = Post(fd);
                if (res !== "OK") alert(res);
                $f.addUser();
            }
            catch (e) { alert(e); }
            return false;
        }
        $ds.clearSection("main");
        const f = $dc.form("Modificar Usuario", "Modificar");
        const nombre = $dc.addInputForm("text", "Nombre", "name-user");
        const dni = $dc.addInputForm("number", "DNI", "dni-user");
        const mail = $dc.addInputForm("email", "Mail", "mail-user");

        nombre.value = user.Nombre
        dni.value = user.Dni;
        mail.value = user.Mail;

        f.onsubmit = Submit;
    }

    this.findUser = function () {
        const Submit = function () {
            try {
                let Fd = new FormData();
                Fd.append("accion", "FINDUSUARIO");
                Fd.append("ID", ID.value);
                const res = Post(Fd);

                let user;
                try {
                    user = JSON.parse(res);
                    $f.modifyUser(user);
                }
                catch (e) { alert(res) };
                return false;
            }
            catch (e) { alert(e); }
            return false;
        }
        $ds.clearSection("main");
        const f = $dc.form("Buscar Usuario", "Buscar");
        const ID = $dc.addInputForm("number", "ID", "id-user")

        f.onsubmit = Submit;
    }

    this.addCarrera = function () {
        const Submit = function () {

            try {
                let Fd = new FormData();
                Fd.append("accion", "ADDCARRERA");
                Fd.append("Nombre", nombre.value);
                Fd.append("Sigla", sigla.value);
                Fd.append("Titulo", titulo.value);
                Fd.append("Duracion", duracion.value);

                const res = Post(Fd);
                if (res !== "OK") alert(res);
                $f.addCarrera();
            }

            catch (e) { alert(e); }
            return false;

            f.onsubmit = Submit;



        };
        const ListCarreras = function () {
            let fd = new FormData();
            fd.append("accion", "LISTCARRERAS");
            const res = Post(fd);
            let list
            try {
                list = JSON.parse(res);

            }
            catch (e) { alert(e); }

            listTitles = ["ID", "Nombre", "Sigla", "Titulo", "Duracion"];
            $dt.tableCarrera(listTitles, list);
            return;
        };

        $ds.clearSection("main");
        const f = $dc.form("Agregar Carrera", "Agregar");
        const nombre = $dc.addInputForm("text", "Nombre", "name-carrera");
        const sigla = $dc.addInputForm("text", "Sigla", "sigla-carrera");
        const titulo = $dc.addInputForm("text", "Titulo", "titulo-carrera");
        const duracion = $dc.addInputForm("number", "Duracion", "duracion-carrera");

        f.onsubmit = Submit;
        ListCarreras();

    };

    this.modifyCarrera = function (carrera) {
        const Submit = function () {
            try {
                let fd = new FormData();
                fd.append("accion", "MODIFYCARRERA");
                fd.append("ID", carrera.ID);
                fd.append("Nombre", nombre.value);
                fd.append("Sigla", sigla.value);
                fd.append("Titulo", titulo.value);
                fd.append("Duracion", duracion.value);
                let res = Post(fd);
                if (res !== "OK") alert(res);
                $f.addCarrera();
            }
            catch (e) { alert(e); }
            return false;
        }
        $ds.clearSection("main");
        const f = $dc.form("Modificar Carrera", "Modificar");
        const nombre = $dc.addInputForm("text", "Nombre", "name-carrera");
        const sigla = $dc.addInputForm("text", "Sigla", "sigla-carrera");
        const titulo = $dc.addInputForm("text", "Titulo", "titulo-carrera");
        const duracion = $dc.addInputForm("number", "Duracion", "duracion-carrera");

        nombre.value = carrera.Nombre
        sigla.value = carrera.Sigla;
        titulo.value = carrera.Titulo;
        duracion.value = carrera.duracion;

        f.onsubmit = Submit;
    }

    this.findCarrera = function () {
        const Submit = function () {
            try {
                let Fd = new FormData();
                Fd.append("accion", "FINDCARRERA");
                Fd.append("ID", ID.value);
                const res = Post(Fd);

                let carrera;
                try {
                    carrera = JSON.parse(res);
                    $f.modifyCarrera(carrera);
                }
                catch (e) { alert(res) };
                return false;
            }
            catch (e) { alert(e); }
            return false;
        }
        $ds.clearSection("main");
        const f = $dc.form("Buscar Carrera", "Buscar");
        const ID = $dc.addInputForm("number", "ID", "id-carrera")

        f.onsubmit = Submit;
    }
};

const $f = new $$form();




/*Configura la petición HTTP:
"POST": Indica que se trata de una petición de tipo POST (para enviar datos al servidor).
"Default.aspx": Especifica la URL del recurso al que se enviarán los datos.
false: Indica que la petición es síncrona, lo que significa que el código se detendrá hasta que se reciba la respuesta del servidor. */

/*La petición ha terminado: El valor readyState === 4 nos confirma que la operación de la petición ha finalizado, ya sea con éxito o con un error.
La petición fue exitosa: El valor status === 200 nos indica específicamente que la petición fue exitosa y el servidor respondió con el recurso solicitado. */
