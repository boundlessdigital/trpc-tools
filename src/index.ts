const greeting_message = 'Hello, World!';

function say_hello(name?: string): void {
  if (name) {
    console.log(`${greeting_message} Nice to meet you, ${name}!`);
  } else {
    console.log(greeting_message);
  }
}

// Main execution
say_hello();
say_hello('TypeScript');

export { say_hello };