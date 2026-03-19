// EJERCICIO
const ejercicio = {
    titulo: "Completa el Código HTML",
    descripcion: "Rellena los espacios en blanco para crear la estructura HTML correcta",
    codigo: `<!DOCTYPE html>
<html>
<head>
    <title>_________</title>
</head>
<body>
    <h1>_________</h1>
    <p>_________</p>
</body>
</html>`,
    validar: (c) => c.includes("<!DOCTYPE html>") && c.includes("<html>") && c.includes("<title>") && c.includes("<h1>") && c.includes("<p>") && c.includes("</body>") && c.includes("</html>"),
    pista: "Completa los espacios con contenido. Respeta la estructura HTML"
};

document.addEventListener("DOMContentLoaded", () => {
    const gameModal = new bootstrap.Modal(document.getElementById("gameModal"));
    
    document.getElementById("btnJuego").addEventListener("click", () => {
        document.getElementById("gameContent").innerHTML = `
            <div class="mb-4">
                <h4 class="text-primary">${ejercicio.titulo}</h4>
                <p class="text-muted">${ejercicio.descripcion}</p>
                <div class="alert alert-info">💡 ${ejercicio.pista}</div>
            </div>
            <textarea id="codigoEditor" class="form-control mb-3" rows="10" style="font-family: monospace;">${ejercicio.codigo}</textarea>
        `;
        gameModal.show();
    });
    
    document.getElementById("btnValidar").addEventListener("click", () => {
        const codigo = document.getElementById("codigoEditor").value.trim();
        document.getElementById("errorContainer").innerHTML = "";
        
        if (!codigo) {
            mostrarError("El código no puede estar vacío", "error3.jpg");
            return;
        }
        
        if (ejercicio.validar(codigo)) {
            mostrarExito("¡Excelente! Completaste el ejercicio correctamente");
        } else {
            mostrarError("Código incorrecto. Revisa la estructura HTML.", "error1.jpg");
        }
    });
});

function mostrarError(msg, img) {
    document.getElementById("errorContainer").innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" style="max-width:400px;">
            <strong>❌</strong> ${msg}
            <img src="${img}" class="img-fluid rounded mt-2" style="max-height:200px;" onerror="this.style.display='none';">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}

function mostrarExito(msg) {
    document.getElementById("errorContainer").innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" style="max-width:400px;">
            <strong>✅</strong> ${msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}
