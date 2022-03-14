onUsuarioChange = () => {
    var tipo = document.querySelector('#tipo-usuario').value;

    if (tipo == 2) {
        window.location = "/html/pastelero.html"
    } else {
        window.location = "/html/index.html"
    }
}
onTipoChange = () => {
    var tipo = document.querySelector('#tipo-entrega').value;

    if (tipo == 2) {
        document.querySelector('.direccion-div').style.display = "";
        document.querySelector('.sucursales').style.display = "none";
    } else {
        document.querySelector('.direccion-div').style.display = "none";
        document.querySelector('.sucursales').style.display = "";
    }
}

onNumeronivelsChange = () => {
    var numero = document.querySelector('#numero-nivels').value;
    var nivels = document.getElementById('nivels');
    var text = "";
    for (i = 1; i <= numero; i++) {
        text += "<div id='nivel" + i + "' class='nivel'>"
            + "<h5>Nivel " + i + "</h5>"
            + "<div class='sabores' >"
            + "<label>Sabores:</label>"
            + "<div>"
            + "<input type='checkbox' value='Chocolate'>\n"
            + "<label><abbr title='Precio: $0.00 pesos'>Chocolate</abbr></label>"
            + "</div>"
            + "<div>"
            + "<input type='checkbox' value='Fresa'>\n"
            + "<label><abbr title='Precio: $0.00 pesos'>Fresa</abbr></label>"
            + "</div>"
            + "<div>"
            + "<input type='checkbox' value='Vainilla' checked>\n"
            + "<label><abbr title='Precio: $0.00 pesos'>Vainilla</abbr></label>"
            + "</div>"
            + "</div >"
            + "<div class='relleno'>"
            + "<label>Relleno:</label>"
            + "<div>"
            + "<input type='checkbox' value='Fresa'>\n"
            + "<label><abbr title='Precio: $0.00 pesos'>Mermelada de Fresa</abbr></label>"
            + "</div>"
            + "<div>"
            + "<input type='checkbox' value='Avellana'>\n"
            + "<label><abbr title='Precio: $0.00 pesos'>Crema de Avellana</abbr></label>"
            + "</div>"
            + "<div>"
            + "<input type='checkbox' value='Betun'checked>\n"
            + "<label><abbr title='Precio: $0.00 pesos'>Betún de Mantequilla</abbr></label>"
            + "</div>"
            + "</div>"
            + "<div class='decoraciones'>"
            + "<label>Decoraciones: </label>"
            + "<div>"
            + "<input type='checkbox' value='Fresas'>\n"
            + "<label><abbr title='Precio: $0.00 pesos'>Fresas</abbr></label>"
            + "</div>"
            + "<div>"
            + "<input type='checkbox' value='Chocolate'>\n"
            + "<label><abbr title='Precio: $0.00 pesos'>Chispas de Chocolate</abbr></label>"
            + "</div>"
            + "<div>"
            + "<input type='checkbox' value='Chispas'>\n"
            + "<label><abbr title='Precio: $0.00 pesos'>Chispas de Colores</abbr></label>"
            + "</div>"
            + "</div>"
            + "</div >"
    }
    nivels.innerHTML = text;
}

generarPago = () => {
    document.querySelector('.pago').style.display = "";
    document.querySelector('#aceptar-pedido').style.display = "none";
}

cancelar = () => {
    document.querySelector('.pago').style.display = "none";
    document.querySelector('#aceptar-pedido').style.display = "";
}

hacerPedido = () => {
    alert("Pedido realizado");
    window.location.reload(true);
}