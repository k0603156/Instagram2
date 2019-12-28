fn main() {
    let target = "world";
    let mut greeting = "Hello";
    println!("{}, {}", greeting, target);
    greeting = "How are you doing";
    // target = "mate";
    // cannot assign twice to immutable variable
    // error: aborting due to previous error
    // rustc --explain E0384
    println!("{}, {}", greeting, target);
}
