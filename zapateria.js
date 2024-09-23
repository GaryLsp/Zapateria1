// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
    fetch('zapateria.json')
        .then(response => response.json())
        .then(data => {
            let html = `
                <table>
                    <thead>
                        <tr>
                            <th>Descripción</th>
                            <th>Fecha</th>
                            <th>Talla</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            data.forEach(zapato => {
                html += `
                    <tr>
                        <td>${zapato.Descripcion}</td>
                        <td>${zapato.fecha}</td>
                        <td>${zapato.talla}</td>
                        <td>${zapato.precio}</td>
                    </tr>
                `;
            });
            html += `
                    </tbody>
                </table>
            `;
            document.getElementById('contenido').innerHTML = html;
        })
        .catch(error => console.error('Error al cargar los datos de zapatos:', error));
});
