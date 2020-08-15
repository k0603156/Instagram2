use actix_web::{web, App, HttpResponse, HttpServer, Responder};

async fn status() -> impl Responder {
    "{\"status\": \"UP\"}"
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    println!("Starting server at http://127.0.0.1:8080/");
    HttpServer::new(|| App::new().route("/", web::get().to(status)))
        .bind("127.0.0.1:8080")?
        .run()
        .await
}
