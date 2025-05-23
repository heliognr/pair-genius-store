// src-tauri/src/main.rs

// Importa o módulo `process` para ter acesso à função `exit`
use std::process;

// Define um comando Tauri que pode ser chamado do frontend JavaScript
// O atributo `#[tauri::command]` torna esta função acessível via `invoke`
#[tauri::command]
fn close_app() {
    // Esta função irá encerrar o processo da aplicação Tauri
    // O código de saída 0 indica que a aplicação terminou com sucesso
    process::exit(0);
}

fn main() {
    tauri::Builder::default()
        // Registra os comandos Tauri que podem ser chamados do frontend.
        // `tauri::generate_handler!` é uma macro que gera o código necessário
        // para que o Tauri possa lidar com as chamadas `invoke` para os comandos listados.
        // Certifique-se de que `close_app` está incluído aqui.
        .invoke_handler(tauri::generate_handler![close_app])
        // Executa a aplicação Tauri com o contexto gerado
        .run(tauri::generate_context!())
        // Se houver um erro ao iniciar a aplicação, a mensagem será exibida
        .expect("error while running tauri application");
}
